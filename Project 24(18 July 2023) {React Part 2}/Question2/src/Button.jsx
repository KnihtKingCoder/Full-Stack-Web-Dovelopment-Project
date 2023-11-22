import React from 'react';

function Button({
    children,
    onClick,
    type = 'button',
    className = '',
    ...props
}) {
    return (
        <button type={type} onClick={onClick} className={`bg-white px-6 py-4 cursor-pointer shadow-lg   ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;