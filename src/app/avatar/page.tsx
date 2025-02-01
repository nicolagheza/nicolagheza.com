'use client';

import Image from "next/image";
import { ImageUpload } from "@/components/ImageUpload";
import { create } from './actions';
import { useState } from "react";

export default function AvatarPage() {

  const [avatarUrl, setAvatarUrl] = useState('');

  async function handleImageUpload(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    const output = await create(formData);
    setAvatarUrl(output);
  }

  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Avatar Camuni&#8482;</h1>
      <div className="flex flex-col gap-y-8 mt-8 text-base sm:text-lg">
        <ImageUpload
          className="mx-auto"
          maxSizeMB={2}
          acceptedTypes={['image/jpeg', 'image/png']}
          width={400}
          height={300}
          onImageUpload={handleImageUpload}
        />
        {avatarUrl &&
          <Image className="mx-auto border-border dark:border-darkBorder shadow-light dark:shadow-dark border-2" src={avatarUrl} alt='seriously-you-must-be-stupid' width={400} height={300} />
        }
      </div>
    </div>
  );
}
