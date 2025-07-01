import React from 'react'

export default function AlertPage() {
    return (
        <div className='h-full w-full'>
            <div className='mt-2 p-4.5 flex flex-col gap-y-5'>
                <div>
                    <h1 className='text-3xl font-bold'>Dashboard</h1>
                    <p className='text-sm text-[#4D7599]'>Manage alerts and user accounts</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Raise New Alert</h2>
                    <form className='flex flex-col gap-y-3 mt-3'>
                        <label className='flex flex-col gap-y-1'>
                            <span className='font-medium text-[15px]'>Alert Title</span>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder='Enter alert title'
                                className='outline-none w-1/3 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4D7599]'
                            />
                        </label>
                        <div className='flex flex-col gap-y-1'>
                            <span className='font-medium text-[15px]'>Alert Description</span>
                            <textarea
                                name=""
                                id=""
                                placeholder='Alert description'
                                className='w-1/3 h-26 outline-none border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4D7599]'
                            >
                            </textarea>
                        </div>
                        <label className='flex flex-col gap-y-1'>
                            <span className='font-medium text-[15px]'>Affected Lines</span>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder='Affected lines'
                                className='outline-none w-1/3 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4D7599]'
                            />
                        </label>
                        <label className='flex flex-col gap-y-1'>
                            <span className='font-medium text-[15px]'>Severity</span>
                            <select
                                name=""
                                id=""
                                className='outline-none w-1/3 border border-gray-200 px-4 py-3 rounded-xl placeholder-[#4D7599]'
                            >
                                <option value="low" className='text-[#4D7599]'>
                                    Low
                                </option>
                                <option value="medium" className='text-[#4D7599]'>
                                    Medium
                                </option>
                                <option value="high" className='text-[#4D7599]'>
                                    High
                                </option>
                            </select>
                        </label>
                    </form>
                </div>
                <div className='w-full flex justify-end'>
                    <button className='bg-[#1285E8] px-5 py-2 text-white rounded-full font-semibold cursor-pointer'>
                        Raise Alert
                    </button>
                </div>
            </div>
        </div>
    );
};
