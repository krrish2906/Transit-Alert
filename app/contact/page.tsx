import React from 'react'
import { PiFacebookLogo, PiInstagramLogo, PiTwitterLogo } from 'react-icons/pi';

export default function ContactPage() {
    return (
        <div className='h-full w-full bg-white text-black flex flex-col items-center'>
            <div className='w-4/5 my-10'>
                <div className='w-full flex flex-col gap-y-5 mb-5'>
                    <div>
                        <h2 className='font-bold text-[32px]'>Contact Us</h2>
                        <p className='text-sm text-[#5C738A]'>
                            We’re here to help! Reach out to us through any of the channels below.
                        </p>
                    </div>
                    <form className='flex flex-col gap-y-5'>
                        <p className='font-bold text-[19px]'>Contact Form</p>
                        <label className='flex flex-col gap-y-2'>
                            <span className='font-medium text-base'>Your Name</span>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder='Enter your name'
                                className='outline-none w-1/3 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#5C738A]'
                            />
                        </label>
                        <label className='flex flex-col gap-y-2'>
                            <span className='font-medium text-base'>Your Email</span>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder='Enter your email'
                                className='outline-none w-1/3 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#5C738A]'
                            />
                        </label>
                        <label className='flex flex-col gap-y-2'>
                            <span className='font-medium text-base'>Subject</span>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder='Enter the subject'
                                className='outline-none w-1/3 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#5C738A]'
                            />
                        </label>
                        <div className='flex flex-col gap-y-2'>
                            <span className='font-medium text-base'>Message</span>
                            <textarea
                                name=""
                                id=""
                                className='w-1/3 h-36 outline-none border border-gray-200 px-4 py-3 rounded-xl'
                            >
                            </textarea>
                        </div>
                        <div className='w-4/5 flex justify-end'>
                            <button type="submit" className='px-4 py-2 rounded-full bg-[#DBE8F2] font-semibold'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-full'>
                    <p className='font-bold text-xl'>Other Ways to Reach Us</p>
                    <div className='w-3/4 h-0.5 bg-gray-200/50 mt-6'></div>
                    <div className='flex gap-8 py-4'>
                        <div>
                            <span className='text-sm text-[#5C738A]'>Email</span>
                            <p className='text-sm'>support@transit.com</p>
                        </div>
                        <div>
                            <span className='text-sm text-[#5C738A]'>Phone</span>
                            <p className='text-sm'>+1-555-123-4567</p>
                        </div>
                    </div>
                    <div className='w-1/6 h-0.5 bg-gray-200/50 mt-6'></div>
                    <div className='py-5'>
                        <span className='text-sm text-[#5C738A]'>Social Media</span>
                        <p>Follow us on social media</p>
                        <p>for updates and support</p>
                    </div>
                    <div className='flex gap-10'>
                        <div className='bg-[#EBEDF2] p-2 rounded-full'>
                            <PiTwitterLogo className='size-6' />
                        </div>
                        <div className='bg-[#EBEDF2] p-2 rounded-full'>
                            <PiFacebookLogo className='size-6' />
                        </div>
                        <div className='bg-[#EBEDF2] p-2 rounded-full'>
                            <PiInstagramLogo className='size-6' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
