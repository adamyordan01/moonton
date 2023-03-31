import { useState, useRef, useEffect } from "react"

export default function Topbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownTarget = useRef(null)

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

    const handleOutsideClick = (event) => {
        if (dropdownTarget.current && !dropdownTarget.current.contains(event.target)) {
            setDropdownOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, []);

    // const triggerDropdown = () => {
    //     // if user click the button, then the dropdown will be open, then the user click the button again, the dropdown will be closed and if user click outside the dropdown, the dropdown will be closed
    //     if (dropdownOpen) {
    //         setDropdownOpen(false)
    //     } else {
    //         setDropdownOpen(true)
    //     }
    //     setDropdownOpen(!dropdownOpen)
    // }
    return (
        <div className="flex justify-between items-center">
            <input type="text" className="top-search" placeholder="Search movie, cast, genre"
                // style="background-image: url('/icons/ic_search.svg');"
                // style={{ backgroundImage: `url("/icons/ic_search.svg")` }} 
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">Welcome, Granola Sky</span>
                {/* user avatar */}
                <div className="collapsible-dropdown flex flex-col gap-2 relative"
                    ref={dropdownTarget}
                >
                    <div
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button hover:cursor-pointer"
                        data-target="#dropdown-button"
                        onClick={toggleDropdown}
                    >
                        <img src="/images/avatar.png" className="rounded-full object-cover w-full" alt="" />
                    </div>
                    {
                        dropdownOpen && (
                            <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] overflow-hidden">
                                <a href="#!" className="transition-all hover:bg-sky-100 p-4">Dashboard</a>
                                <a href="#!" className="transition-all hover:bg-sky-100 p-4">Settings</a>
                                <a href="sign_in.html" className="transition-all hover:bg-sky-100 p-4">Sign Out</a>
                            </div>
                        )
                    }
                    {/* <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        // id="dropdown-target"
                        // ref={dropdownTarget}
                    >
                        <a href="#!" className="transition-all hover:bg-sky-100 p-4">Dashboard</a>
                        <a href="#!" className="transition-all hover:bg-sky-100 p-4">Settings</a>
                        <a href="sign_in.html" className="transition-all hover:bg-sky-100 p-4">Sign Out</a>
                    </div> */}
                </div>
            </div>
            <style jsx="true">
                {`
                    .top-search {
                        background-image: url('/icons/ic_search.svg');
                    }
                `}
            </style>
        </div>

    )
}