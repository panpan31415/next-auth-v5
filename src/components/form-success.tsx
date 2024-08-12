import { CheckCircle } from "lucide-react";
import React from "react";

type FormSuccessProps = {
    message?: string;
};
export default function FormSuccess({ message }: FormSuccessProps) {
    if (!message) return null;
    return (
        <div className='bg-emerald-500/15 p-3 rounded-md flex items-center text-sm text-emerald-500 gap-x-2'>
            <CheckCircle className='h-4 w-4' />
            <p>{message}</p>
        </div>
    );
}
