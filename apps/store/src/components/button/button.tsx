import React from 'react';

export interface ButtonProps {
    contentButton: React.ReactNode; // text/icon
    className: string; // styles
    type?: "button" | "submit" | "reset"
    onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
    contentButton,
    className,
    type,
    onClick,
}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {contentButton}
        </button>
    );
};

export default Button;
