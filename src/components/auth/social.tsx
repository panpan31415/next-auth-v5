"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Social() {
    return (
        <div className='flex items-center w-full gap-x-2'>
            <Button
                size={"lg"}
                className='w-full'
                variant={"outline"}
                onClick={() => console.log("Google login button")}>
                <FcGoogle className='h-5 w-5' />
            </Button>
            <Button
                size={"lg"}
                className='w-full'
                variant={"outline"}
                onClick={() => console.log("Github login button")}>
                <FaGithub className='h-5 w-5' />
            </Button>
        </div>
    );
}
