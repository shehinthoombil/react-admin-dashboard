import * as React from "react";

export function FormInput({ label, type = "text", id, value, onChange, error }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-xs font-medium  text-stone-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        noValidate
        className={"flex mt-2 w-full bg-white rounded-lg outline-none px-2 focus:border-amber-500 border border-solid ${ error ? 'border-red-500'} : border-stone-300 } min-h-[44px]"}
        aria-label={label}
      />
    </div>
  );
}