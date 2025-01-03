import * as React from "react";

export function StatCard({ title, dateRange, value, unit, comparison, percentageChange, isPositive }) {
  return (
    <div className="flex flex-col grow shadow-[0px_4px_20px_rgba(237,234,228,0.5)]">
      <div className="flex flex-col justify-center px-3.5 pt-5 pb-5 w-full bg-white rounded-lg border-solid border-t-[1.5px] border-t-stone-100 border-x-[1.5px] border-x-stone-100">
        <div className="flex flex-col justify-center w-full">
          <div className="text-base leading-none text-stone-900">{title}</div>
          <div className="mt-2.5 text-xs tracking-normal leading-none font-[350] text-stone-500">
            {dateRange}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-3.5 pt-8 pb-6 w-full bg-white rounded-none border-solid border-b-[1.5px] border-stone-100 border-t-[0.5px] border-x-[1.5px]">
        <div className="flex flex-col w-full">
          <div className="flex gap-1 items-end self-start text-stone-900">
            <div className="text-3xl font-medium leading-none">{value}</div>
            <div className="text-sm font-bold leading-none">{unit}</div>
          </div>
          <div className="flex gap-10 justify-between items-center mt-4 w-full">
            <div className="self-stretch my-auto text-sm leading-none text-stone-500">
              {comparison}
            </div>
            <div className={`flex flex-col justify-center self-stretch py-1.5 pr-1.5 pl-1 my-auto text-sm font-medium leading-none ${isPositive ? 'text-green-600 bg-emerald-50' : 'text-red-500 bg-rose-100'} whitespace-nowrap rounded`}>
              <div className="flex items-start">
                <img
                  loading="lazy"
                  src={`http://b.io/ext_${isPositive ? '7' : '9'}-`}
                  alt={isPositive ? "Increase indicator" : "Decrease indicator"}
                  className="object-contain shrink-0 w-2.5 aspect-square"
                />
                <div>{percentageChange}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}