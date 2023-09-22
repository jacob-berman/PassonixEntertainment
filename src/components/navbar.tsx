'use client'

import { useState } from "react";
import Logo from "./logo";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import NavSlideout from "./nav_slideout";

export default function Navbar() {
    const [navOpen, setNavOpen] = useState<boolean>(false)

    const handleOpenNav = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setNavOpen(!navOpen);
        console.log(navOpen)
    }

    return (
        <div className="fixed w-full bg-transparent z-50 flex justify-between p-5">
            <div className="">
                    <Logo forceDark={false} />
            </div>
            <div className="" >
                <button onClick={handleOpenNav}>
                    <Bars3CenterLeftIcon className="w-14 scale-x-[-1] text-secondary" />
                </button>
            </div>
            <NavSlideout navOpen={navOpen} setOpen={setNavOpen}/>
        </div>
    );
}
