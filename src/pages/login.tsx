import React from 'react';
import Link from 'next/link';
import { FaBuffer } from 'react-icons/fa';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import GoogleLoginBtn from '@/components/app/login/GoogleLoginBtn';
import { sendFirebaseEvent } from '@/lib/firebase/sendFirebaseEvent';

const Login = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const email = target.email.value;
    const password = target.password.value;

    if (!email || !password) {
      alert("Email dan Password wajib diisi!");
      return;
    }

    const token = jwt.sign({ email }, 'secret');
    Cookies.set("token", token);
    sendFirebaseEvent("login", {});
    window.location.href = "/";
  }

  return (
    <div className='container mx-auto h-[90vh] lg:h-screen p-2'>
      <div className='lg:w-[400px] lg:mx-auto'>
        <div className='text-lg font-semibold mb-4 lg:hidden'>Login</div>
        <Link href="/" className='items-center gap-2 text-xl hidden lg:flex w-fit mx-auto my-4'>
          <FaBuffer className="text-2xl" />
          <span>InGoods Login</span>
        </Link>
        <div className='border border-gray-400 rounded p-2'>
          <div className='w-fit mx-auto mb-4'>
            <GoogleLoginBtn />
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-4'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' className='rounded border border-gray-400 p-1' />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' className='rounded border border-gray-400 p-1' />
            </div>
            <button type="submit" className='bg-yellow-300 text-black font-semibold text-center w-full p-1 rounded border border-gray-400'>Lanjut</button>

            <div className='text-sm font-semibold my-4'>
              * Dengan melanjutkan, Anda setuju pada Ketentuan Penggunaan dan Pemberitahuan Privasi InGoods.
            </div>
          </form>
          <Link href="/register/" className='text-blue-600'>Buat Akun</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;