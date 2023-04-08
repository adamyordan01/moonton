import SubscriptionDetail from "@/Components/Moonton/SubscriptionDetail";
import { Link } from "@inertiajs/react";
import { OtherUserMenu, UserMenu } from "./MenuList";
import MenuItem from "@/Components/Moonton/MenuItem";


export default function Sidebar ({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto scroll- h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    {/* Menu */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {
                            UserMenu.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    isActive={
                                        route().current() == menu.link ? true : false
                                    }
                                    {...menu} 
                                />
                            ))
                        }
                    </div>
                    {/* ./Menu */}

                    {/* Others */}
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {
                            OtherUserMenu.map((menu, index) => (
                                <MenuItem
                                    key={`${index}-${menu.text}`}
                                    isActive={
                                        route().current() == menu.link ? true : false
                                    }
                                    {...menu}
                                />
                            ))
                        }
                    </div>
                    {/* ./Others */}

                    {/* Subscription details */}
                    {
                        auth.activePlan && (
                            <SubscriptionDetail
                                isPremium={auth.activePlan.name === 'Premium' ? true : false}
                                activeDays={auth.activePlan.activeDays}
                                remainingActiveDays={auth.activePlan.remainingActiveDays}
                                name={auth.activePlan.name}
                            />
                        )
                    }
                    {/* ./Subscription details */}
                </div>
            </div>
        </aside>
    )
}