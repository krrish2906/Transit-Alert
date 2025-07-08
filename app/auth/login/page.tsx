'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { PiEye, PiEyeClosed } from 'react-icons/pi';
import { useSignIn } from '@clerk/nextjs';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';

export default function LogInPage() {
    const { isLoaded, signIn, setActive } = useSignIn();
    const router = useRouter();
    
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    async function handleGoogleSignIn() {
        if (!isLoaded) {
            return (
                <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col justify-center items-center'>
                    <Loading />
                </div>
            );
        }
        setIsLoading(true);
        await signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: '/auth/login',
            redirectUrlComplete: '/'
        });
    };

    async function submitSignInForm(e: React.FormEvent) {
        e.preventDefault();
        if (!isLoaded) {
            return (
                <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col justify-center items-center'>
                    <Loading />
                </div>
            );
        }

        if (emailAddress.trim() === '' || password.trim() === '') {
            setError('Please fill in all required fields.');
            return;
        }

        setIsLoading(true);
        try {
            const result = await signIn.create({
                identifier: emailAddress,
                password
            });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push('/');
            }
            else {
                console.log(result);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col items-center'>
            <div className='mt-18'>
                <h1 className='font-bold text-3xl'>
                    <span className='text-[#0D80F2]'>Welcome</span> Back!
                </h1>
            </div>
            <form onSubmit={submitSignInForm} className='flex flex-col gap-y-5 mt-8 w-3/4 items-center'>
                <label className='flex flex-col gap-y-2 w-1/2'>
                    <span className='font-medium text-base'>Email</span>
                    <input
                        type="email"
                        name=""
                        id=""
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder='Enter your email'
                        className='outline-none w-full border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4A739C] text-[#4A739C]'
                    />
                    {
                        error && error === 'Please fill in all required fields.' && emailAddress.trim() === '' && (
                            <span className='text-xs text-red-500'>
                                { error }
                            </span>
                        )
                    }
                </label>
                <label className='flex flex-col gap-y-2 w-1/2'>
                    <span className='font-medium text-base'>Password</span>
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="outline-none w-full border border-gray-200 px-4 py-3 pr-12 rounded-xl placeholder-[#4A739C] text-[#4A739C]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4A739C] cursor-pointer p-3"
                        >
                            {
                                showPassword ? <PiEye className="size-5" /> : <PiEyeClosed className="size-5" />
                            }
                        </button>
                    </div>
                    <div className={`flex ${error && error === 'Please fill in all required fields.' && password.trim() === ''
                        ? "justify-between" : "justify-end"}`}>
                        {
                            error && error === 'Please fill in all required fields.' && password.trim() === '' && (
                                <span className='text-xs text-red-500'>
                                    { error }
                                </span>
                            )
                        }
                        <span className='text-sm text-[#4A739C] cursor-pointer hover:underline'>Forgot password?</span>
                    </div>
                </label>
                <div className='w-1/2 flex flex-col justify-center mt-1 gap-y-5'>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className='w-full px-4 py-2.5 rounded-xl bg-[#0D80F2] font-semibold text-[#F7FAFC] tracking-wider cursor-pointer hover:bg-[#0D80F2]/90 transition'
                    >
                        Log In
                    </button>
                    <div className='h-[1px] w-full bg-gray-200/70'></div>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className='w-full px-4 py-2.5 rounded-xl bg-gray-200/40 font-semibold text-black flex items-center justify-center gap-x-3 hover:bg-gray-200/50 transition tracking-wider cursor-pointer'
                    >
                        <FcGoogle className='size-6' />
                        Continue with Google
                    </button>
                </div>
            </form>
            <div className='mt-5'>
                <p className='text-sm text-[#4A739C] tracking-wide'>
                    Don’t have an account?{" "}
                    <Link href='/auth/signup' className='hover:underline'>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
