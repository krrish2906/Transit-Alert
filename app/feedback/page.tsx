import React from 'react'

export default function FeedbackPage() {
    return (
        <div className='h-[calc(100vh-4rem)] w-full bg-white flex justify-center text-black'>
            <div className='w-3/4 mt-14'>
                <h1 className='text-[35px] font-bold'>Feedback</h1>
                <p className='text-sm text-[#4A739C] mt-2'>
                    Your feedback helps us improve the TransitAlert system. Please share your thoughts, suggestions, or report any issues you’ve encountered.
                </p>
                <div className='mt-8 w-full'>
                    <textarea name="" id="" className='border border-gray-300 rounded-xl w-2/5 h-36'></textarea>
                </div>
                <div className='w-full flex justify-end px-20 mt-2'>
                    <button className='text-white bg-[#0A80ED] rounded-full text-base font-semibold py-2 px-4'>Submit Feedback</button>
                </div>
            </div>
        </div>
    )
}
