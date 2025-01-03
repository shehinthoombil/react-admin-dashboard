import * as React from "react";

export function TableRow({ id, nickname, email, birthDate, gender, location, registrationDate }) {
  return (
    <>
      <div className="gap-2 self-stretch px-4 py-5 w-[76px] text-base leading-none whitespace-nowrap bg-white border-solid border-b-[0.5px] border-b-stone-300 min-h-[52px] text-stone-900">
        {id}.
      </div>
      <div className="gap-2 self-stretch px-4 py-5 w-[202px] text-base leading-none bg-white border-solid border-b-[0.5px] border-b-stone-300 min-h-[52px]">
        {nickname}
      </div>
      <div className="gap-2 self-stretch px-4 py-5 min-w-[240px] w-[315px] text-base leading-none bg-white border-solid border-b-[0.5px] border-b-stone-300 min-h-[52px]">
        {email}
      </div>
      <div className="gap-2 self-stretch px-4 py-5 w-[116px] text-base leading-none bg-white border-solid border-b-[0.5px] border-b-stone-300 min-h-[52px]">
        {birthDate}
      </div>
      <div className="gap-2 self-stretch px-4 py-5 w-[107px] text-base leading-none bg-white border-solid border-b-[0.5px] border-b-stone-300 min-h-[52px]">
        {gender}
      </div>
      <div className="gap-2 self-stretch px-4 py-5 w-[92px] text-base leading-none bg-white border-solid border-b-[0.5px] border-b-stone-300 min-h-[52px]">
        {location}
      </div>
      <div className="gap-2 self-stretch px-4 py-5 flex-1 shrink basis-0 min-w-[240px] text-base leading-none bg-white border-solid border-b-[0.5px] border-b-stone-300 min-h-[52px]">
        {registrationDate}
      </div>
    </>
  );
}