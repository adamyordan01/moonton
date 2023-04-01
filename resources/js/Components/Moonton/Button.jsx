import React from 'react';


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
            {children}
        </button>
    )
}