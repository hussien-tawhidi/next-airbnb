"use client";

import { InputProps } from "@/types";
import { BiDollar } from "react-icons/bi";

export default function Input({
  id,
  label,
  type,
  disabled,
  formatePrice,
  register,
  required,
  errors,
}: InputProps) {
  return (
    <div className='w-full relative mb-2'>
      {formatePrice && (
        <BiDollar
          size={24}
          className='text-neutral-700 absolute top-5 left-2'
        />
      )}
      <input
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=' '
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
        ${formatePrice ? "pl-9" : "pl-4"}
        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
        ${
          errors[id] ? "focus:border-rose-500" : "disabled:border-neutral-900"
        }`}
      />
      <label
        className={`absolute text-md duration-150 transform-150 -translate-y-3 top-3 z-10 origin-0 ${
          formatePrice ? "left-9" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-zinc-400"
        }`}>
        {label}
      </label>
    </div>
  );
}
