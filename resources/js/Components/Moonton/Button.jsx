import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export default function Button(
    { 
        type = "submit", variant = "primary", processing, children, className = "", ...props 
    }) {
    return (
        <button className={`btn-${variant} text-white rounded-2xl py-[13px] text-center ${className} ${processing && "opacity-30"} `}
            type={type}
            {...props}
            disabled={processing}
        >
            {
                processing ? (
                    <span className='flex items-center justify-center'>
                        <FaSpinner className='animate-spin mr-2' />
                        Loading...
                    </span>
                ) : (
                    <span className="">
                        {children}
                    </span>
                )
            }
        </button>
    )
}