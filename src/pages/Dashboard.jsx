import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StatCard = ({ title, dateRange, value, unit, comparison, percentageChange, isPositive }) => (
  <Card className="bg-white p-4 rounded-lg shadow-sm">
    <div className="space-y-2">
      <h3 className="text-sm  font-medium md:text-base ">{title}</h3>
      <p className="text-[10px] text-gray-500 md:text-xs border-b border-gray-100 pb-2">
  {dateRange}
</p>
      <div className="flex items-baseline space-x-1 pt-3">
        <span className="text-2xl font-semibold md:text-3xl">{value}</span>
        <span className="text-sm font-semibold md:text-base">{unit}</span>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <span className="text-xs text-gray-600 md:text-sm">{comparison}</span>
        <span className={`text-xs  md:text-sm font-medium  ${isPositive ? 'text-green-500 bg-green-50 px-[4px] py-[2px] rounded-md' : 'text-red-500 py-[2px] bg-red-50 px-[4px] rounded-md'}`}>
          {isPositive ? '↑' : '↓'} {percentageChange}%
        </span>
      </div>
    </div>
  </Card>
);

const Dashboard = () => {
  // Mock data for stats cards
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

  // Mock data for the bottom stats
  const bottomStats = [
    {
      title: "抽選利用回数",
      dateRange: "2024年2月1日 - 2024年2月5日",
      value: "125",
      unit: "回 / 今月",
      comparison: "85回 (前月の今日時点）",
      percentageChange: "47",
      isPositive: true
    },
    {
      title: "アカウント削除数",
      dateRange: "2024年2月1日 - 2024年2月5日",
      value: "10",
      unit: "人 / 今月",
      comparison: "8人 (前月の今日時点）",
      percentageChange: "25",
      isPositive: true
    }
  ];

  // Mock data for demographics chart
  const demographicsData = [
    { age: '10代未満', male: 100, female: 80, other: 40 },
    { age: '10代', male: 150, female: 120, other: 80 },
    { age: '20代', male: 200, female: 180, other: 120 },
    { age: '30代', male: 250, female: 200, other: 150 },
    { age: '40代', male: 200, female: 160, other: 140 },
    { age: '50代', male: 150, female: 120, other: 100 },
    { age: '60代', male: 100, female: 80, other: 60 },
    { age: '70代', male: 50, female: 40, other: 30 },
    { age: '80代', male: 30, female: 25, other: 20 },
    { age: '90代以上', male: 10, female: 8, other: 5 }
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum, entry) => sum + entry.value, 0);
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}人
            </p>
          ))}
          <p className="font-medium mt-1 border-t border-gray-200 pt-1">
            合計: {total}人
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <div className="flex items-center justify-start mt-4 text-xs">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center mr-4">
            <div
              className="w-3 h-3 mr-1"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="p-6 h-screen space-y-6">
    {/* Top Stats Grid - keep existing code */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>

    {/* Demographics Chart and Bottom Stats */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="bg-white p-4 rounded-lg shadow-sm">
        <div className="mb-4  border-b border-gray-100 pb-3">
          <div className="flex justify-between  items-center">
            <h3 className="text-sm text-gray-700 font-medium md:text-base ">性別・年代比</h3>
            <div className="flex items-center space-x-2">
            <span className="text-xs  font-medium md:text-sm">2024</span>
              <ChevronLeft className="w-4 h-4 cursor-pointer" />
              <span className="text-xs font-medium md:text-sm">年 01月</span>
              <ChevronRight className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="h-80 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
          
              data={demographicsData}
              margin={{ top: 20, right: 30, left:10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="age" 
                tick={{ fontSize: 11 }}
                tickMargin={10}
              />
              <YAxis 
                tick={{ fontSize: 11 }}
                tickMargin={10}
                ticks={[0, 200, 400, 600, 800, 1000]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend content={<CustomLegend />} />
              <Bar dataKey="male" stackId="a" fill="#FF9900" name="男性" />
              <Bar dataKey="female" stackId="a" fill="#FFCC66" name="女性" />
              <Bar dataKey="other" stackId="a" fill="#FFE4B5" name="その他" />
              <Bar dataKey="noResponse" stackId="a" fill="#FFF5E6" name="回答なし" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Bottom Stats Cards - keep existing code */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-40 gap-4">
        {bottomStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
    <div className="max-sm:h-[300px] h-[200px] w-full"></div>
  </div>
  );
};

export default Dashboard;