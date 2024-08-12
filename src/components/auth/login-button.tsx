"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

type LoginButtonTypes = {
    children: ReactNode;
    mode?: "redirect" | "modal";
    asChild?: boolean;
};

export default function LoginButton({ children, mode = "redirect", asChild }: LoginButtonTypes) {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login");
    };

    if (mode === "modal") {
        return <span>...</span>;
    }

    return (
        <span
            onClick={onClick}
            className='cursor-pointer'>
            {children}
        </span>
    );
}
