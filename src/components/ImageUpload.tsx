'use client';

import React, { useState, useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';

// Types for the component props
export interface ImageUploadProps {
  onImageUpload?: (file: File) => Promise<void> | void;
  onImageRemove?: () => Promise<void> | void;
  defaultImage?: string;
  className?: string;
  maxSizeMB?: number;
  acceptedTypes?: string[];
  disabled?: boolean;
  width?: number;
  height?: number;
}

export const ImageUpload: React.FC<ImageUploadProps> = (props) => {
  const [preview, setPreview] = useState<string | null>(props.defaultImage || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback((file: File): string | null => {
    if (!props.acceptedTypes?.includes(file.type)) {
      return 'Invalid file type. Please upload a supported image format.';
    }

    const maxSize = (props.maxSizeMB || 5) * 1024 * 1024;
    if (file.size > maxSize) {
      return `File size exceeds ${props.maxSizeMB}MB limit.`;
    }

    return null;
  }, [props.acceptedTypes, props.maxSizeMB]);

  const handleFileUpload = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const previewUrl = URL.createObjectURL(file);

      if (props.onImageUpload) {
        await props.onImageUpload(file);
      }

      setPreview(previewUrl);
    } catch (error) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = async () => {
    try {
      if (props.onImageRemove) {
        await props.onImageRemove();
      }

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      setPreview(null);
      setError(null);
    } catch (error) {
      setError('Failed to remove image. Please try again.');
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (props.disabled) return;

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className={`relative ${props.className || ''}`}>
      <div
        className={`relative flex items-center justify-center border-2 border-dashed rounded-lg overflow-hidden
          ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 cursor-pointer hover:bg-gray-100'}
          ${error ? 'border-red-500' : 'border-gray-300'}`}
        style={{ width: props.width || 300, height: props.height || 300 }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          </div>
        ) : preview ? (
          <div className="relative w-full h-full">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 z-10"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <Upload className="w-8 h-8 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              Drag and drop or click to upload
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Max size: {props.maxSizeMB || 5}MB
            </p>
          </div>
        )}

        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileSelect}
          accept={props.acceptedTypes?.join(',')}
          disabled={props.disabled || isLoading}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};
