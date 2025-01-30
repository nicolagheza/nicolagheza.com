'use client';

import { ImageUpload } from "@/components/ImageUpload";

export default function AvatarPage() {

  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Avatar Camuni&#8482;</h1>
      <div className="flex mt-8 text-base sm:text-lg">
        <ImageUpload
          className="mx-auto"
          maxSizeMB={2}
          acceptedTypes={['image/jpeg', 'image/png']}
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
