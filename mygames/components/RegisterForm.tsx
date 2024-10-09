'use client';
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import logoImg from "@/assets/tic-tac-toe2.png";
import Image from 'next/image';

const RegisterForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // console.log(name);
  // console.log(email);
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, password
        })
      })

      if (res.ok) {
        const form = e.target as HTMLFormElement;

        try {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          if (res?.error) {
            setError("Invalid Credentials");
            return;
          }

          router.replace("dashboard");
          form.reset();
        } catch (error) {
          console.log('singIn', error);
        }
        //router.push('/');
      } else {
        console.log('User registration failed.')
      }

    } catch (error) {
      console.log('Error during registration', error)
    }

  };

  return (
    <div className='grid place-items-center pt-6'>
      <div className="shadow-lg px-32 py-20 rounded-sm border border-blue-600 bg-white">
        <h1 className="text-xl my-3 text-center">Register</h1>
        <Image src={logoImg} alt="" priority className='mx-auto my-3 w-16 h-16' />
        <form onSubmit={submitHandler} className='flex flex-col gap-3'>
          <input
            className='border rounded-sm border-blue-600'
            type='text'
            placeholder='userName'
            onChange={e => setName(e.target.value)}></input>
          <input
            className='border rounded-sm border-blue-600'
            type='text'
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}></input>
          <input
            className='border rounded-sm border-blue-600'
            type='password'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}></input>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 cursor-pointer'>Register</button>
          {error && (
            <div className='bg-red-500 text-white font-medium px-6 py-2 text-center'>{error}</div>
          )}
          <Link className="text-sm mt-2 text-right" href={"/logIn"} >
            Already have an account?<span className="underline text-blue-500"> LogIn</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
