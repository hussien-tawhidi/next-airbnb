"use client";

import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      width={30}
      height={30}
      className='rounded-full'
      alt='Avatar'
      src='/images/placeholder.jpg'
    />
  );
}
