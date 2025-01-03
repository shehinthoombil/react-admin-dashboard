import { Navigate, useNavigate, Outlet, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { SidebarItem } from "./SidebarItem";
import { UsersRound, LayoutDashboard, Menu, X ,Gift ,User } from 'lucide-react';
import { LogOut } from 'lucide-react';
const  SidebarItem= ({ icon, label, navigate_to })=> {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Determine if the current route matches the `navigate_to` route
    const isActive = location.pathname === navigate_to;
  
    return (
      <div onClick={() => navigate(navigate_to)}
        className={`flex  flex-col justify-center cursor-pointer py-4 px-28 pl-4 w-full ${
          isActive
            ? "font-bold text-amber-500 bg-orange-50 border-solid border-r-[3px] border-r-amber-500"
            : "bg-white"
        } max-w-[250px]`}
      >
        <div className="flex pl-2 gap-2.5 items-center w-full">
          <div className="font-semibold">{icon}</div>
          <div
            
            className="flex-1 shrink self-stretch my-auto basis-0 cursor-pointer"
          >
            {label}
          </div>
        </div>
      </div>
    );
  }
  
const ProtectedRoute=()=> {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const navigate = useNavigate();

    const sidebarItems = [
        { icon: <LayoutDashboard />, navigate_to: "/dashboard", label: "ダッシュボード", isActive: true },
        { icon: <UsersRound />, navigate_to: "/users", label: "登録ユーザー", isActive: false },
        { icon: <Gift />, navigate_to: "/gift", label: "当選者", isActive: false },
        { icon: <User  />, navigate_to: "/profile", label: "運営管理者", isActive: false }
    ];

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <div className="flex overflow-hidden flex-wrap h-screen bg-stone-100">
            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
                className={`2xl:hidden fixed top-4 z-50 p-2 rounded-md bg-white shadow-md ${isSidebarOpen ? 'right-2' : 'left-4'}`}
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="2xl:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    fixed 2xl:static z-40  flex flex-col min-h-screen bg-white text-sm leading-none whitespace-nowrap text-stone-500
                    transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full 2xl:translate-x-0 max-2xl:hidden'}
                `}
            >
                <div className="flex flex-col pt-5 bg-white border-r border-stone-100">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aff3b15d3f080edb47e2ae71d2cded8f44f9e408faaf00a87630a90116c7c61f?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
                        alt="Dashboard logo"
                        className="object-contain ml-4 max-w-full aspect-[6.49] w-[160px]"
                    />
                    <div className="flex flex-col mt-8 mb-0">
                        {sidebarItems.map((item, index) => (
                            <div key={index} onClick={() => {
                                if (window.innerWidth < 1536) { // 2xl breakpoint
                                    toggleSidebar();
                                }
                            }}>
                                <SidebarItem {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit lg:ml-0">
                <div className="flex flex-col justify-center items-end px-4 lg:px-16 py-1.5 w-full bg-white border-b border-solid border-b-stone-100">
                    <div className="relative flex gap-2 items-center px-3 py-2.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f643d27d3c0d5d2758e36638d8cef363a899feb8a57d744768c6730000aa0d7?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
                            alt="User profile"
                            className="object-contain w-6 aspect-square cursor-pointer"
                            onClick={toggleProfileMenu}
                        />

                        {isProfileMenuOpen && (
                            <div className="absolute right-0 mt-[64px] text-xs bg-white shadow-md rounded-md w-40 py-1">
                                <button
                                    className="w-full flex items-center gap-2 px-4 py-2 text-left font-bold text-red-500 hover:bg-stone-100"
                                    onClick={handleLogout}
                                >
                                    <LogOut size={16} className="shrink-0" /> {/* Ensure icon size is consistent */}
                                    <span className="flex-1">Logout</span>
                                </button>
                            </div>
                        )}

                    </div>
                </div>
                <div className="overflow-y-scroll bg-amber-50/30">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default ProtectedRoute;
