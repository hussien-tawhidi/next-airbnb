"use client";
import axios from "axios";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { useRegisterModal } from "../hooks";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../inputs/Input";
import Button from "../utils/Button";
export default function Register() {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    console.log(data);
    try {
      await axios.post("/api/register", data);
    } catch (error) {
      toast.error("Something went wrong");
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const bodyContent = (
    <div className=''>
      <Heading title='Welcome to Airbnb' subtitle='Create an account' />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='string'
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='string'
      />
      <Input
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='password'
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outLine
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => {}}
        disabled={isLoading}
      />
      <Button
        outLine
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => {}}
        disabled={isLoading}
      />
      <div className='text-neutral-500 text-center mt-4 font-light'>
        <div className='flex justify-center items-center flex-row gap-2' onClick={registerModal.onClose}>
          <p>Aready have an account ?</p>
          <span className='text-neutral-800 cursor-pointer hover:underline'>
            Log in
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
