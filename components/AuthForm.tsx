"use client";
import React, {useState, useCallback} from "react";
import {FieldValues, useForm, SubmitHandler} from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [loading, setLoading] = useState(false);

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setLoading(true);
    if (variant === "REGISTER") {
      //Axios request to backend
    }
    if (variant === "LOGIN") {
      //NEXT AUTH SIGNIN
    }
  };

  const socialAction = (action: string) => {
    setLoading(true);
  };
  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-whit e px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form
          className='space-y-6'
          onSubmit={handleSubmit(onSubmit)}></form>
      </div>
    </div>
  );
};

export default AuthForm;
