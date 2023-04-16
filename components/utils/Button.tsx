"use client"
import { ButtonProps } from "@/types";

export default function Button({
  label,
  onClick,
  disabled,
  outLine,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
  ${outLine ? "bg-white" : "bg-rose-500"}
  ${outLine ? "border-black" : "bg-rose-500"}
  ${outLine ? "text-black" : "text-white"}
  ${small ? "py-1" : "py-3"}
  ${small ? "text-sm" : "text-md"}
  ${small ? "font-light" : "font-semibold"}
  ${small ? "border-[1px]" : "border-2"}
  `}>
      {label}
      {Icon && <Icon size={18} className='absolute left-4 top-3' />}
    </button>
  );
}
