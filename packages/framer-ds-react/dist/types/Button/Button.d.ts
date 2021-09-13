import React from 'react';
export declare type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};
declare const Button: ({ onClick, children }: ButtonProps) => JSX.Element;
export default Button;
