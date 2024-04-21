import React from "react";
interface customBtnProps {
    id?: any;
    value?: string | undefined;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    onClick?: (event: any) => void;
    label?: string;
}
export declare const CustomBtn: React.FC<customBtnProps>;
export {};
