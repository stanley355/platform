import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBuffer, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { decode } from 'jsonwebtoken';
import { sendFirebaseEvent } from '@/lib/firebase/sendFirebaseEvent';

const Navbar = () => {
  const [userToken, setUserToken] = useState("");
  const user: any = userToken ? decode(userToken) : null;

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) setUserToken(token);
  }, [userToken]);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as any;
    const keywords = target.keywords.value;

    if (!keywords) return;

    sendFirebaseEvent("search", { keywords });
    window.location.href = `/search?keywords=${keywords}`;
  }

  const SearchForm = () => (
    <form onSubmit={formHandler} className='w-full p-4 px-2'>
      <div className='w-full rounded-md bg-white flex items-center text-black'>
        <label htmlFor="search" className='w-full'>
          <input type="text" name='keywords' id='search' className='p-2 w-full rounded-l-md' placeholder='Cari Barang Impor' />
        </label>
        <button type='submit' className='bg-yellow-500 text-primary-color text-2xl p-2 rounded-md'>
          <FaSearch />
        </button>
      </div>
    </form>
  );

  return (
    <nav className='bg-primary-color text-white w-full'>
      <div className='flex items-center justify-between p-2 lg:py-0'>
        <Link href="/" className='flex items-center gap-2 text-xl'>
          <FaBuffer className="text-2xl" />
          <span>InGoods</span>
        </Link>
        <div className='hidden lg:block lg:w-4/6'>
          <SearchForm />
        </div>
        <div className='flex items-center gap-4 lg'>
          <Link href={userToken ? "/account" : "/login"} className='flex items-center gap-2'>
            <div className='text-sm'>{user ? user?.name : "Masuk"}</div>
            <FaUser className="text-xl" />
          </Link>
          <a href="/cart" title='Shopping Cart'>
            <FaShoppingCart className="text-2xl" />
          </a>
        </div>
      </div>
      <div className='block lg:hidden'>
        <SearchForm />
      </div>
    </nav>
  )
};

export default Navbar;