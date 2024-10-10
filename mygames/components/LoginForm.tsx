"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logoImg from "@/assets/tic-tac-toe2.png";
import { setUserState, resetUserState, selectValue } from "@/slices/userStateSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { data: session } = useSession(); // useSession hook to get session
  const dispatch = useDispatch();

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res) {
        setError("Sign in failed. Please try again.");
        return;
      }

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace('/');
    } catch (error) {
      console.log('signIn', error);
      setError("An error occurred. Please try again.");
    }
  };

  if (session?.user?.name) {
    dispatch(setUserState(session.user.name));
  }

  return (
    <div className="grid place-items-center pt-6">
      <div className="shadow-lg px-32 py-20 rounded-sm border border-blue-600 bg-white">
        <h1 className="text-xl my-3 text-center">Log In</h1>
        <Image src={logoImg} alt="" priority className='mx-auto my-3 w-16 h-16' />
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className='border rounded-sm border-blue-600'
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            required
          />
          <input
            className='border rounded-sm border-blue-600'
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 cursor-pointer">
            Log In
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don&apos;t have an account? <span className="underline text-blue-500">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
