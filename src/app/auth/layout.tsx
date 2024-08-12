import React, { ReactNode } from "react";

type AuthLayoutProps = {
    children: ReactNode;
};
export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className='h-screen flex justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
            {children}
        </div>
    );
}
