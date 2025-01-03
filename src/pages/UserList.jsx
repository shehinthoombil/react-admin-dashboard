import React, { useState, useEffect } from "react";
import { TableRow } from "../components/userList/TableRow";
import { SidebarItem } from "../components/userList/SidebarItem";
import { TableHeader } from "../components/userList/TableHeader";
import { Pagination } from "../components/userList/Pagination";

// Initial user data matching the image
const initialUserData = [
    { id: "01", nickname: "ゆうと", email: "example1@example.com", birthDate: "1992年 12月", gender: "男性", location: "東京都", registrationDate: "2024年 01月 12日" },
    { id: "02", nickname: "ニックネーム最大12文字", email: "user234@example.net", birthDate: "1987年 5月", gender: "女性", location: "東京都", registrationDate: "2024年 01月 12日" },
    { id: "03", nickname: "わんこ好き", email: "test_user@gmail.com", birthDate: "1996年 10月", gender: "男性", location: "東京都", registrationDate: "2024年 01月 12日" },
    { id: "04", nickname: "はるかぜ", email: "dummy_email_567@yahoo.co.jp", birthDate: "1998年 2月", gender: "男性", location: "静岡県", registrationDate: "2024年 01月 12日" },
    { id: "05", nickname: "あおい", email: "ecampleaddrss124623@outlook.com", birthDate: "1978年 5月", gender: "女性", location: "埼玉県", registrationDate: "2024年 01月 11日" },
    { id: "06", nickname: "ポンたろう", email: "random.user@example.org", birthDate: "1978年 6月", gender: "女性", location: "栃木県", registrationDate: "2024年 01月 11日" },
    { id: "07", nickname: "まさやん", email: "email1234@example.co.jp", birthDate: "1972年 8月", gender: "回答しない", location: "鹿児島県", registrationDate: "2024年 01月 11日" },
    { id: "08", nickname: "なつこ", email: "user_test456@gmail.com", birthDate: "1969年 11月", gender: "回答しない", location: "茨城県", registrationDate: "2024年 01月 11日" },
    { id: "09", nickname: "ぴょんぴょん", email: "example_email@yahoo.com", birthDate: "1984年 4月", gender: "女性", location: "東京都", registrationDate: "2024年 01月 10日" },
    { id: "10", nickname: "ひまわりさん", email: "dummy.address@example.net", birthDate: "1988年 4月", gender: "その他", location: "福岡", registrationDate: "2024年 01月 10日" }
];

const sidebarItems = [
    { text: "ダッシュボード", isActive: false },
    { text: "登録ユーザー", isActive: true },
    { text: "当選者", isActive: false },
    { text: "運営管理者", isActive: false }
];

function UserTable() {
    const [users, setUsers] = useState(initialUserData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUsers, setSelectedUsers] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalItems = 5000;

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (term) {
            const filtered = initialUserData.filter(user =>
                user.nickname.toLowerCase().includes(term.toLowerCase()) ||
                user.email.toLowerCase().includes(term.toLowerCase())
            );
            setUsers(filtered);
        } else {
            setUsers(initialUserData);
        }
    };

    const handleToggleUser = (userId) => {
        setSelectedUsers(prev => {
            const newSet = new Set(prev);
            if (newSet.has(userId)) {
                newSet.delete(userId);
            } else {
                newSet.add(userId);
            }
            return newSet;
        });
    };

    return (
        <div className="h-screen ">

            {/* Main Content */}
            <div className="max-xl:w-screen">

                {/* Content */}
                <div className="p-4 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
                        <h1 className="text-xl font-medium text-stone-900">登録ユーザー一覧</h1>
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="ニックネーム/メールアドレスで検索"
                                value={searchTerm}
                                onChange={handleSearch}
                                className="w-full h-10 px-4 pl-10 rounded-lg border border-stone-300 focus:outline-none focus:border-stone-400"
                            />
                            <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Table Container with Horizontal Scroll */}
                    <div className="bg-white rounded-lg overflow-x-scroll">
                        <div className="overflow-x-auto">
                            <div className="min-w-[900px]"> {/* Minimum width to prevent squishing */}
                                <table className="w-full">
                                    <thead className="bg-stone-50 text-sm text-stone-500">
                                        <tr>
                                            <th className="py-3 px-4 text-left whitespace-nowrap">No.</th>
                                            <th className="py-3 px-4 text-left whitespace-nowrap">ニックネーム</th>
                                            <th className="py-3 px-4 text-left whitespace-nowrap">メールアドレス</th>
                                            <th className="py-3 px-4 text-left whitespace-nowrap">生年月</th>
                                            <th className="py-3 px-4 text-left whitespace-nowrap">性別</th>
                                            <th className="py-3 px-4 text-left whitespace-nowrap">居住地</th>
                                            <th className="py-3 px-4 text-left whitespace-nowrap">登録日</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr
                                                key={user.id}
                                                className={`border-t border-stone-200 text-sm hover:bg-stone-50 ${selectedUsers.has(user.id) ? 'bg-stone-50' : ''
                                                    }`}
                                                onClick={() => handleToggleUser(user.id)}
                                            >
                                                <td className="py-4 px-4 whitespace-nowrap">{user.id}</td>
                                                <td className="py-4 px-4 whitespace-nowrap cursor-pointer" >{user.nickname}</td>
                                                <td className="py-4 px-4 whitespace-nowrap cursor-pointer group relative">
                                                    {user.email}
                                                    <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 left-1/2 transform -translate-x-1/2 top-full mt-1">
                                                        {user.email}
                                                    </div>
                                                </td>
                                                {/* <td  className="py-4 cursor-pointer px-4 whitespace-nowrap" >{user.email}</td> */}
                                                <td className="py-4 px-4 whitespace-nowrap">{user.birthDate}</td>
                                                <td className="py-4 px-4 whitespace-nowrap">{user.gender}</td>
                                                <td className="py-4 px-4 whitespace-nowrap">{user.location}</td>
                                                <td className="py-4 px-4 whitespace-nowrap">{user.registrationDate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 gap-4 md:gap-0">
                        <div>5,000人中 - 10人表示</div>
                        <div className="flex gap-2">
                            <button className="px-2 py-1">&lt;</button>
                            {[1, 2, 3, 4, 5].map(page => (
                                <button
                                    key={page}
                                    className={`px-2 py-1 rounded ${currentPage === page ? 'bg-amber-500 text-white' : ''
                                        }`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}
                            <span>...</span>
                            <button className="px-2 py-1">500</button>
                            <button className="px-2 py-1">&gt;</button>
                        </div>
                    </div>
                </div>
                <div className="h-[60px] w-full"></div>
            </div>
        </div>
    );
}

export default UserTable;