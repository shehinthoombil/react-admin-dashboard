import React, { useState, useEffect } from "react";
import { TableRow } from "../Components/userList/TableRow";
import { SidebarItem } from "../Components/userList/SidebarItem";
import { TableHeader } from "../Components/userList/TableHeader";
import { Pagination } from "../Components/userList/Pagination";

const userData = [
  {
    id: "01",
    nickname: "ゆうと",
    email: "example1@example.com",
    birthDate: "1992年 12月",
    gender: "男性",
    location: "東京都",
    registrationDate: "2024年 01月 12日"
  }
];

const sidebarItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/131712ca00a3b63cf3803ee93f3e4d2157164e90c8e800595cbce9931c479ca4?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", text: "ダッシュボード", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8266f0e1ae0e5edf20458d2a148acf9cdc4b5cf937e22230cdc5313287df6bcb?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", text: "登録ユーザー", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd67b3d0339b11230eb53aa620b9372214347c0a67e42355c86a5a1d2ecd8580?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", text: "当選者", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43cdfc0bfce7ab13efe550cd28b6cbc356f4758b7073ea8e88a5590760bd39d3?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", text: "運営管理者", isActive: false }
];

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from an API
        const fetchUsers = async () => {
          try {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
        fetchUsers();
      }, []);
  return (
    <div className="flex overflow-hidden flex-wrap bg-stone-100">
      <div className="flex flex-col text-sm leading-none whitespace-nowrap text-stone-500">
        <div className="flex flex-col pt-5 bg-white border-r border-solid border-r-stone-100 pb-[645px] max-md:pb-24">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/37cbc438fac0a1ce7175d11e03a979299ff2682c0d4304a8140776b7319c637a?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
            alt="Company Logo"
            className="object-contain ml-4 max-w-full aspect-[6.49] w-[130px] max-md:ml-2.5"
          />
          <div className="flex flex-col mt-8 mb-0 max-md:mb-2.5">
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col grow shrink-0 items-center self-start basis-0 w-fit max-md:max-w-full">
        <div className="flex flex-col justify-center items-end self-stretch px-16 py-1.5 w-full bg-white border-b border-solid border-b-stone-100 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-2 items-start px-3 py-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f643d27d3c0d5d2758e36638d8cef363a899feb8a57d744768c6730000aa0d7?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
              alt="User Profile"
              className="object-contain w-6 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between mt-10 w-full tracking-tight max-w-[1136px] max-md:max-w-full">
          <div className="my-auto text-xl font-medium leading-none text-stone-900">
            登録ユーザー一覧
          </div>
          <div className="flex flex-col justify-center items-start px-2 py-2.5 text-base leading-none text-center bg-white rounded-lg border border-solid border-stone-300 text-stone-400 max-md:pr-5">
            <div className="flex gap-2 items-center min-h-[21px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92bae9ffe4ea1cf23c3702da405a2ed00843569dca36aa97ee64b4237156c2bb?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
                alt="Search Icon"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
              <label htmlFor="searchInput" className="sr-only">ニックネーム / メールアドレスで検索</label>
              <input
                id="searchInput"
                type="text"
                placeholder="ニックネーム / メールアドレスで検索"
                className="self-stretch my-auto bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-wrap items-start self-stretch mx-10 mt-4 rounded-lg max-md:mr-2.5">
          <TableHeader />
          {userData.map((user) => (
            <TableRow key={user.id} {...user} />
          ))}
        </div>
        <Pagination totalItems={5000} currentPage={1} itemsPerPage={10} />
      </div>
    </div>
  );
}

export default UserTable;