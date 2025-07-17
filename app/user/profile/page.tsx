"use client"

import React, { useState } from 'react'

export default function ProfilePage() {
    const [isChecked1, setIsChecked1] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)

    const handleCheckboxChange = (num: number) => {
        if(num == 1) setIsChecked1(!isChecked1);
        else setIsChecked2(!isChecked2);
    }

    return (
        <div className='w-full h-full bg-white text-black flex flex-col items-center'>
            <div className='w-3/4 mt-10 flex flex-col gap-y-7 mb-12'>
                {/* User Profile */}
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-3xl tracking-wide'>User Profile</h1>
                    <p className='text-sm text-[#4A739C]'>Manage your account settings and preferences.</p>
                </div>

                {/* Personal Information */}
                <div className='flex flex-col gap-y-4'>
                    <p className='font-bold text-[19px]'>Personal Information</p>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-2'>
                            <span className='font-medium text-base'>Name</span>
                            <p className='outline-none w-1/3 h-10 border border-gray-200 px-4 py-3 rounded-xl'></p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <span className='font-medium text-base'>Email</span>
                            <p className='outline-none w-1/3 h-10 border border-gray-200 px-4 py-3 rounded-xl'></p>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <span className='font-medium text-base'>Phone Number</span>
                            <p className='outline-none w-1/3 h-10 border border-gray-200 px-4 py-3 rounded-xl'></p>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className='flex flex-col gap-y-5'>
                    <p className='font-bold text-[19px]'>Notification Settings</p>
                    <div className='flex flex-col gap-y-6'>
                        <div className='flex w-full justify-between'>
                            <div>
                                <span className='text-base font-medium'>Push Notifications</span>
                                <p className='text-sm text-[#4A739C]'>Receive real-time alerts about service disruptions via push notifications.</p>
                            </div>
                            <div className='relative'>
                                <input
                                    type='checkbox'
                                    className='sr-only'
                                    checked={isChecked1}
                                />
                                <div
                                    className='block h-8 w-14 rounded-full bg-[#E5E7EB] cursor-pointer'
                                    onClick={() => handleCheckboxChange(1)}>
                                </div>
                                <div
                                    className={`dot absolute top-1 h-6 w-6 rounded-full bg-white z-10 cursor-pointer transition
                                    ${isChecked1 ? "right-1 -translate-x-full" : "translate-x-full left-1"}`}
                                    onClick={() => handleCheckboxChange(1)}>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div>
                                <span className='text-base font-medium'>Email Alerts</span>
                                <p className='text-sm text-[#4A739C]'>Get email updates on major service changes and announcements.</p>
                            </div>
                            <div className='relative'>
                                <input
                                    type='checkbox'
                                    className='sr-only'
                                    checked={isChecked2}
                                />
                                <div
                                    className='block h-8 w-14 rounded-full bg-[#E5E7EB] cursor-pointer'
                                    onClick={() => handleCheckboxChange(2)}>
                                </div>
                                <div
                                    className={`dot absolute top-1 h-6 w-6 rounded-full bg-white z-10 cursor-pointer transition
                                    ${isChecked2 ? "right-1 -translate-x-full" : "translate-x-full left-1"}`}
                                    onClick={() => handleCheckboxChange(2)}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alert History */}
                <div className='flex flex-col gap-y-5'>
                    <p className='font-bold text-[19px]'>Alert History</p>
                    <div className="overflow-hidden rounded-xl border border-gray-300">
                        <table className="border-collapse w-full text-left">
                            <thead>
                                <tr className='h-[56px]'>
                                    <th className="w-1/4 font-medium px-4 py-2">Date</th>
                                    <th className="w-1/4 font-medium px-4 py-2">Route</th>
                                    <th className="w-1/4 font-medium px-4 py-2">Type</th>
                                    <th className="w-1/4 font-medium px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='h-[72px]'>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        2024-03-15
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        Route 101
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        Delay
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        <span className='bg-[#E8EDF5] text-black px-5 py-1 rounded-lg'>
                                            Resolved
                                        </span>
                                    </td>
                                </tr>
                                <tr className='h-[72px]'>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        2024-03-10
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        Route 202
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        Cancellation
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        <span className='bg-[#E8EDF5] text-black px-5 py-1 rounded-lg'>
                                            Resolved
                                        </span>
                                    </td>
                                </tr>
                                <tr className='h-[72px]'>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        2024-03-05
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        Route 303
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        Diversion
                                    </td>
                                    <td className="text-[#4A739C] text-base border-t border-gray-300 px-4 py-2">
                                        <span className='bg-[#E8EDF5] text-black px-5 py-1 rounded-lg'>
                                            Active
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
