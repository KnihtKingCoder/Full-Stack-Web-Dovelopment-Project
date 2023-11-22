import React from 'react';

function Input({
    type,
    placeholder,
    className="",
    onChange="",
    ...props
}) {
    return (
        <div className='flex flex-col mb-4'>
            <input
             type={type || "text"}
             placeholder={placeholder}
             className={`h-10 border bg-[#FAFAFA] border-gray-500 rounded-sm px-3 py-2 text-sm outline-none ${className}`}
             onChange={onChange}
             {...props}
            />
        </div>
    );
}

export default Input;