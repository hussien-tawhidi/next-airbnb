"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../utils/Avatar";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { useRegisterModal } from "../hooks";
export default function UserMenu() {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenMenu = () => {
    setIsOpen(!isOpen);
    // alert("Hello");
  };

  return (
    <div className='relative'>
      <div className='flex flex-row item-center gap-3'>
        <div
          className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
          onClick={() => {}}>
          Airbnb your home
        </div>
        <div
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
          onClick={toggleOpenMenu}>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {/* -------------------------------------- */}
      {/* menu */}
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointeronClick={toggleOpenMenu}'>
            <>
              <MenuItems label='Sign In' onClick={registerModal.onOpen} />
              <MenuItems label='Sign up' onClick={registerModal.onOpen} />
            </>
          </div>
        </div>
      )}
    </div>
  );
}
