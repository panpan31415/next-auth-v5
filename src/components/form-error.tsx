import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";

type FormErrorProps = {
    message?: string;
};
export default function FormError({ message }: FormErrorProps) {
    if (!message) return null;
    return (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center text-sm text-destructive gap-x-2'>
            <BsExclamationTriangle className='h-4 w-4' />
            <p>{message}</p>
        </div>
    );
}
