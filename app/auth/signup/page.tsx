'use client'

// Modules import:-
import React, { useState } from 'react'
import { useSignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Icons import:-
import { FcGoogle } from 'react-icons/fc';
import { PiEye, PiEyeClosed } from 'react-icons/pi';

// Components Import:-
import Loading from '@/components/Loading';

export default function SignUpPage() {
    const { isLoaded, signUp, setActive } = useSignUp();
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter();

    if (!isLoaded) {
        return (
            <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col justify-center items-center'>
                <Loading />
            </div>
        );
    }
    
    async function handleGoogleSignUp() {
        if (!isLoaded) {
            return (
                <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col justify-center items-center'>
                    <Loading />
                </div>
            );
        }
        setIsLoading(true);
        await signUp.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: '/auth/signup',
            redirectUrlComplete: '/'
        });
    };

    async function submitSignUpForm(e: React.FormEvent) {
        e.preventDefault();
        if (!isLoaded) {
            return (
                <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col justify-center items-center'>
                    <Loading />
                </div>
            );
        }

        if (emailAddress.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            setError('Please fill in all required fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Password doesn’t match!');
            return;
        }

        setIsLoading(true);
        try {
            await signUp.create({ emailAddress, password });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code"
            });
            setPendingVerification(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function pressVerifyButton(e: React.FormEvent) {
        e.preventDefault();
        if (!isLoaded) {
            return (
                <div className='h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col justify-center items-center'>
                    <Loading />
                </div>
            );
        }

        setIsLoading(true);
        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({ code });

            if (completeSignUp.status !== 'complete') {
                console.log(completeSignUp);
            }
            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                router.push('/');
            }

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    
    return (
        <div className='h-full min-h-[calc(100vh-4rem)] w-full bg-white text-black flex flex-col items-center pb-1'>
            <div className='mt-8'>
                <h1 className='font-bold text-3xl'>
                    Sign up for{" "}
                    <span className='text-[#0D80F2]'>TransitAlert</span>
                </h1>
            </div>
            {
                !pendingVerification ? (
                    <form
                        onSubmit={submitSignUpForm}
                        className='flex flex-col gap-y-5 mt-8 w-3/4 items-center'
                    >
                        {/* Email */}
                        <label className='flex flex-col gap-y-2 w-1/2'>
                            <span className='font-medium text-base'>Email</span>
                            <input
                                type='email'
                                required={true}
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

                        {/* Password */}
                        <label className='flex flex-col gap-y-2 w-1/2'>
                            <span className='font-medium text-base'>Password</span>
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required={true}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
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
                            {
                                error && error === 'Password doesn’t match!' && (
                                    <span className='text-xs text-red-500'>
                                        { error }
                                    </span>
                                )
                            }
                            {
                                error && error === 'Please fill in all required fields.' && password.trim() === '' && (
                                    <span className='text-xs text-red-500'>
                                        { error }
                                    </span>
                                )
                            }
                        </label>
                        
                        {/* Confirm Password */}
                        <label className='flex flex-col gap-y-2 w-1/2'>
                            <span className='font-medium text-base'>Confirm Password</span>
                            <div className="relative w-full">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    required={true}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    className="outline-none w-full border border-gray-200 px-4 py-3 pr-12 rounded-xl placeholder-[#4A739C] text-[#4A739C]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4A739C] cursor-pointer p-3"
                                >
                                    {
                                        showConfirmPassword ? <PiEye className="size-5" /> : <PiEyeClosed className="size-5" />
                                    }
                                </button>
                            </div>
                            {
                                error && error === 'Password doesn’t match!' && (
                                    <span className='text-xs text-red-500'>
                                        { error }
                                    </span>
                                )
                            }
                            {
                                error && error === 'Please fill in all required fields.' && confirmPassword.trim() === '' && (
                                    <span className='text-xs text-red-500'>
                                        { error }
                                    </span>
                                )
                            }
                        </label>
                        <div id="clerk-captcha"></div>
                        <div className='w-1/2 flex flex-col justify-center mt-1 gap-y-5'>
                            <button
                                type="submit"
                                className={`w-full px-4 py-2.5 rounded-xl bg-[#0D80F2] font-semibold text-[#F7FAFC] tracking-wider cursor-pointer hover:bg-[#0D80F2]/90 transition ${isLoading ? "opacity-60" : "opacity-100"}`}
                                disabled={isLoading}
                            >
                                Sign Up
                            </button>

                            <div className='h-[1px] w-full bg-gray-200/70'></div>
                            
                            <button
                                type="button"
                                onClick={handleGoogleSignUp}
                                className={`w-full px-4 py-2.5 rounded-xl bg-gray-200/40 font-semibold text-black flex items-center justify-center gap-x-3 hover:bg-gray-200/50 transition tracking-wider cursor-pointer ${isLoading ? "opacity-60" : "opacity-100"}`}
                                disabled={isLoading}
                            >
                                <FcGoogle className='size-6' />
                                Sign Up with Google
                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={pressVerifyButton} className="flex flex-col items-center mt-16 w-3/4 space-y-4">
                        <h1 className='text-2xl font-medium'>Email Verification</h1>
                        <div className='w-1/3 text-sm bg-yellow-500/10 border border-yellow-500 text-yellow-500 p-4 rounded-xl'>
                            <p>We’ve sent a verification code to your email. Please check your inbox and enter the code below to verify your account.</p>
                        </div>
                        <div className="flex flex-col w-1/3 space-y-1.5">
                            <label htmlFor="code" className='font-normal'>Verification Code</label>
                            <input
                                id="code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Enter verification code"
                                className="outline-none w-full border border-gray-200 px-4 py-3 pr-12 rounded-xl placeholder-[#4A739C] text-[#4A739C]"
                                required={true}
                            />
                            {
                                error && (
                                    <span className='text-xs text-red-500'>
                                        { error }
                                    </span>
                                )
                            }
                        </div>
                        <button
                            type="submit"
                            className={`w-1/3 px-4 py-2.5 rounded-xl bg-[#0D80F2] font-semibold text-[#F7FAFC] mt-5 tracking-wider cursor-pointer hover:bg-[#0D80F2]/90 transition ${isLoading ? "opacity-60" : "opacity-100"}`}
                            disabled={isLoading}
                        >
                            Verify Email
                        </button>
                    </form>
                )
            }
            <div className='mt-5 mb-5'>
                <p className='text-sm text-[#4A739C] tracking-wide'>
                    Already have an account?{" "}
                    <Link href='/auth/login' className='hover:underline'>Log in</Link>
                </p>
            </div>
        </div>
    );
}
