import * as React from "react";

export function FormInput({ label, type, id }) {
  return (
    <div className="flex flex-col mt-6 w-full first:mt-0">
      <label htmlFor={id} className="mb-2">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="flex w-full bg-white rounded-lg border border-solid border-stone-300 min-h-[44px]"
        aria-label={label}
      />
    </div>
  );
}