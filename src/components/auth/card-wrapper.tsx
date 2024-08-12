import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";

type CardWrapperProps = {
    children: ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHerf: string;
    showSocial?: Boolean;
};
export default function CardWrapper({
    children,
    headerLabel,
    backButtonHerf,
    backButtonLabel,
    showSocial,
}: CardWrapperProps) {
    return (
        <Card className='w-[400px] shadow-md'>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
        </Card>
    );
}
