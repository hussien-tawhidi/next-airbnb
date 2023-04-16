"use client"
import Image from "next/image";

export default function LogoNav() {
  return (
    <Image
      width={100}
      height={100}
      className='hidden md:block cursor-pointer'
    alt="Logo" src="/images/logo.png"/>
  );
}
