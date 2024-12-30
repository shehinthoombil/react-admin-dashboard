import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { StatCard } from "../Components/Dashboard/StatCard";
import { SidebarItem } from "../Components/Dashboard/SidebarItem";
import { Loader } from "../Components/Loader";

const sidebarItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b770f451218dfee8638a8399199277aa3f841bab9f2517d0faef7ada457587df?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", label: "ダッシュボード", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc24b1d59a12f4caa7cd0f88b5712beb90afcb0710e74c3d2fda1284481a2602?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", label: "登録ユーザー", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd67b3d0339b11230eb53aa620b9372214347c0a67e42355c86a5a1d2ecd8580?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", label: "当選者", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0aef3cd3ef63e446b91c2d0ff1d8cb2e4d28edc06af733db0a47dedd45ff271f?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709", label: "運営管理者", isActive: false }
];

const statsData = [
  {
    title: "ユーザー登録数累計",
    dateRange: "2024年2月1日 - 2024年2月5日",
    value: "450",
    unit: "人",
    comparison: "400人 (前月時点の累計）",
    percentageChange: "12.5",
    isPositive: true
  },
  {
    title: "アクティブユーザー",
    dateRange: "2024年2月1日 - 2024年2月5日",
    value: "50",
    unit: "人 / 今月",
    comparison: "12人 (前月時点）",
    percentageChange: "316.6",
    isPositive: true
  },
  {
    title: "定着率",
    dateRange: "2024年1月1日 - 2024年1月31日",
    value: "10",
    unit: "% / 前月",
    comparison: "12% (前々月）",
    percentageChange: "16.6",
    isPositive: false
  },
  {
    title: "平均検索回数",
    dateRange: "2024年2月1日 - 2024年2月5日",
    value: "4",
    unit: "回 / 今月",
    comparison: "2回 (前月の今日時点）",
    percentageChange: "100",
    isPositive: true
  }
];

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/dashboard-stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);
  if (isLoading) return <Loader />;

  return (
    <div className="flex overflow-hidden flex-wrap bg-stone-100">
      <div className="flex flex-col text-sm leading-none whitespace-nowrap text-stone-500">
        <div className="flex flex-col pt-5 bg-white border-r border-stone-100 pb-[645px] max-md:pb-24">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aff3b15d3f080edb47e2ae71d2cded8f44f9e408faaf00a87630a90116c7c61f?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
            alt="Dashboard logo"
            className="object-contain ml-4 max-w-full aspect-[6.49] w-[130px] max-md:ml-2.5"
          />
          <div className="flex flex-col mt-8 mb-0 max-md:mb-2.5">
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit max-md:max-w-full">
        <div className="flex flex-col justify-center items-end px-16 py-1.5 w-full bg-white border-b border-solid border-b-stone-100 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-2 items-start px-3 py-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f643d27d3c0d5d2758e36638d8cef363a899feb8a57d744768c6730000aa0d7?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
              alt="User profile"
              className="object-contain w-6 aspect-square"
              onClick={handleLogout}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className="mx-10 mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;