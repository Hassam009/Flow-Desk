import {cn} from "@/lib/utils"
import {ButtonHTMLAttributes} from "react"

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    active?: boolean
}

export function TabButton ({active=false, className, children, ...props }:TabButtonProps){
    return (
        <button
            className={cn(
                "px-4 py-1 rounded-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition",
                active ? "bg-gray-200 text-gray-900" : "bg-white dark:bg-zinc-800 hover:bg-gray-100",
                className
            )}
            {...props}
            >
                {children}
        </button>
    )
}