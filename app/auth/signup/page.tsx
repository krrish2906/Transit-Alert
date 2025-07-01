import Link from 'next/link';
import React from 'react'

export default function page() {
    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col items-center'>
            <div className='mt-12'>
                <h1 className='font-bold text-3xl tracking-wide'>Sign up for TransitAlert</h1>
            </div>
            <form className='flex flex-col gap-y-5 mt-10 w-3/4 items-start'>
                <label className='flex flex-col gap-y-2 w-full'>
                    <span className='font-medium text-base'>Email</span>
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder='Enter your email'
                        className='outline-none w-1/2 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4A739C]'
                    />
                </label>
                <label className='flex flex-col gap-y-2 w-full'>
                    <span className='font-medium text-base'>Password</span>
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder='Enter your password'
                        className='outline-none w-1/2 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4A739C]'
                    />
                </label>
                <label className='flex flex-col gap-y-2 w-full'>
                    <span className='font-medium text-base'>Confirm Password</span>
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder='Confirm Password'
                        className='outline-none w-1/2 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4A739C]'
                    />
                </label>
                <div className='w-1/2 flex justify-center mt-3'>
                    <button type="submit" className='w-full px-4 py-2.5 rounded-xl bg-[#0D80F2] font-semibold text-[#F7FAFC]'>
                        Sign Up
                    </button>
                </div>
            </form>
            <div className='mt-5'>
                <p className='text-sm text-[#4A739C] tracking-wide'>
                    Already have an account?{" "}
                    <Link href='/auth/login' className='hover:underline'>Log in</Link>
                </p>
            </div>
        </div>
    );
}
