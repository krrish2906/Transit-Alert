'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { PiEye, PiEyeClosed } from 'react-icons/pi';

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col items-center'>
            <div className='mt-10'>
                <h1 className='font-bold text-3xl tracking-wide'>Sign up for TransitAlert</h1>
            </div>
            <form className='flex flex-col gap-y-5 mt-8 w-3/4 items-start'>
                <label className='flex flex-col gap-y-2 w-full'>
                    <span className='font-medium text-base'>Email</span>
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder='Enter your email'
                        className='outline-none w-1/2 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4A739C] text-[#4A739C]'
                    />
                </label>
                <label className='flex flex-col gap-y-2 w-full'>
                    <span className='font-medium text-base'>Password</span>
                    <div className="relative w-1/2">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="outline-none w-full border border-gray-200 px-4 py-3 pr-12 rounded-xl placeholder-[#4A739C] text-[#4A739C]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A739C] cursor-pointer pr-1"
                        >
                            {
                                showPassword ? <PiEye className="size-5" /> : <PiEyeClosed className="size-5" />
                            }
                        </button>
                    </div>
                </label>
                <label className='flex flex-col gap-y-2 w-full'>
                    <span className='font-medium text-base'>Confirm Password</span>
                    <div className="relative w-1/2">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="outline-none w-full border border-gray-200 px-4 py-3 pr-12 rounded-xl placeholder-[#4A739C] text-[#4A739C]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A739C] cursor-pointer pr-1"
                        >
                            {
                                showConfirmPassword ? <PiEye className="size-5" /> : <PiEyeClosed className="size-5" />
                            }
                        </button>
                    </div>
                </label>
                <div className='w-1/2 flex flex-col justify-center mt-1 gap-y-5'>
                    <button type="submit" className='w-full px-4 py-2.5 rounded-xl bg-[#0D80F2] font-semibold text-[#F7FAFC] tracking-wider'>
                        Sign Up
                    </button>
                    <div className='h-[1px] w-full bg-gray-200/70'></div>
                    <button type="submit" className='w-full px-4 py-2.5 rounded-xl bg-gray-200/35 font-semibold text-black flex items-center justify-center gap-x-3 hover:bg-gray-200/45 transition tracking-wider'>
                        <FcGoogle className='size-6' />
                        Sign Up with Google
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
