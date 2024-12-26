import * as React from "react";

export function FormInput({ label, type = "text", id }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-xs font-medium text-stone-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="flex mt-2 w-full bg-white rounded-lg border border-solid border-stone-300 min-h-[44px]"
        aria-label={label}
      />
    </div>
  );
}