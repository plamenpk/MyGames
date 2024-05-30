'use client';
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

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
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 rounded-lg border-t-8 border-r-8 border-green-400'>
        <h1 className='text-xl my-3'>Register</h1>
        <form onSubmit={submitHandler} className='flex flex-col gap-3'>
          <input
            type='text'
            placeholder='userName'
            onChange={e => setName(e.target.value)}></input>
          <input
            type='text'
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}></input>
          <input
            type='password'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}></input>
          <button className='bg-green-400 hover:bg-green-500 text-white font-medium px-6 py-2 cursor-pointer'>Register</button>
          {error && (
            <div className='bg-red-500 text-white font-medium px-6 py-2 text-center'>{error}</div>
          )}
          <Link className="text-sm mt-2 text-right" href={"/"} >
            Already have an account?<span className="underline"> LogIn</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
