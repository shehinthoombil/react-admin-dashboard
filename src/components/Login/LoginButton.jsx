import * as React from "react";

export function LoginButton({ children, variant = "primary", loading }) {
    return (
        <button
            className={`flex flex-col justify-center items-center  w-full   rounded-[100px]
                 ${variant === "primary"
                    ? "bg-amber-500 text-white font-bold hover:bg-amber-500 disabled:bg-amber-400"
                    : "text-stone-900 font-medium hover:bg-stone-100"
                }
                   ${loading ? "cursor-wait" : "cursor-pointer"}
                `}
            disabled={loading} 
        >
            <span className="flex items-center justify-center py-4 px-28 max-md:px-5">
                {loading ? (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                    children
                )}
            </span>
        </button>
    );
}