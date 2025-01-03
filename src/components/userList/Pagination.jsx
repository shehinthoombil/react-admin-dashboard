import * as React from "react";

export function Pagination({ totalItems, currentPage, itemsPerPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayedItems = `${totalItems}人中 - ${itemsPerPage}人表示`;

  return (
    <div className="flex flex-wrap gap-10 items-center pl-4 mt-72 max-md:mt-10 max-md:max-w-full">
      <div className="self-stretch my-auto text-sm tracking-wide leading-none text-stone-500">
        {displayedItems}
      </div>
      <div className="flex gap-1.5 items-start self-stretch my-auto min-w-[240px]">
        <button
          className="flex flex-col justify-center items-center px-1.5 py-2.5 w-9 bg-white rounded min-h-[32px]"
          aria-label="Previous page"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ff9eb6f5fd503a70742f4518280984c84ade1b894cbbc8a588a5dc934f9f488?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
            alt=""
            className="object-contain w-2 aspect-[0.67]"
          />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-1.5 py-3 w-9 text-sm leading-none rounded min-h-[32px] ${
              page === currentPage
                ? "text-white bg-amber-500"
                : "text-black bg-white"
            }`}
          >
            {page}
          </button>
        ))}
        <div className="px-1.5 py-3 w-9 text-sm leading-none text-black whitespace-nowrap rounded bg-stone-100 min-h-[32px]">
          ...
        </div>
        <button className="px-1.5 py-3 w-9 text-sm leading-none text-black whitespace-nowrap bg-white rounded min-h-[32px]">
          {totalPages}
        </button>
        <button
          className="flex flex-col justify-center items-center px-1.5 py-2.5 w-9 bg-white rounded min-h-[32px]"
          aria-label="Next page"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01255612dbdf52b0064edcc8effa5afdef64dee9e768a6506c8d31dd864cdb98?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
            alt=""
            className="object-contain w-2 aspect-[0.67]"
          />
        </button>
      </div>
    </div>
  );
}