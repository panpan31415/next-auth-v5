import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
    label: string;
    href: string;
};
export default function BackButton({ label, href }: BackButtonProps) {
    return (
        <Button
            variant={"link"}
            className='font-normal w-full'
            size={"sm"}
            asChild>
            <Link href={href}> {label}</Link>
        </Button>
    );
}
