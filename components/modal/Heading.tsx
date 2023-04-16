"use client";

import { HeadingProps } from "@/types";

export default function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <div className={center ? "text-center" : "test-start"}>
      <p className='text-2xl font-bold'>{title}</p>
      <p className='font-light text-neutral-500 mt-2'>{subtitle}</p>
    </div>
  );
}
