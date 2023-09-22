'use client'

import Logo from "./logo";
import { ArrowUpRightIcon  } from "@heroicons/react/20/solid";
import { FacebookSVG, TwitterSVG } from "./social_svg";
import Link from "next/link";
import { getCurrentYear } from "@/utils/utils";

interface FormattedListItemParams {
    text: string;
    link: string;
}

function FormattedListItem({ text, link }:FormattedListItemParams)
{
    return(
        <a href="#" className="flex items-center">
            <ArrowUpRightIcon className="h-8 pr-3"/>
            <h5>{text}</h5>
        </a>
    )
}


export default function Footer() {
    
    return(
        <section className="bg-secondary text-white">
            <div className="animated-text-wrapper">
                <h1 className="animated-text text-secondary-dark uppercase font-bold">Indie Inspired, Passion Pioneered, Stories Sustained. Indie Inspired, Passion Pioneered, Stories Sustained.</h1>
            </div>
            <div className='mx-auto h-full font-400 container'>
                <div className="flex pt-10 mx-auto items-start place-content-between pb-32">
                    <div className="pr-52 w-3/4">
                        <Logo forceDark={true}/>
                    </div>
                    <div className="flex flex-col w-1/4 text-center">
                    <Link href="/about">
                        <h4 className="transform transition-transform duration-300 hover:scale-125">About</h4>
                    </Link>
                    <Link href="/news">
                        <h4 className="transform transition-transform duration-300 hover:scale-125">News</h4>
                    </Link>
                    <Link href="/games">
                        <h4 className="transform transition-transform duration-300 hover:scale-125">Games</h4>
                    </Link>
                    <Link href="/contact">
                        <h4 className="transform transition-transform duration-300 hover:scale-125">Contact</h4>
                    </Link>
                    </div>
                    <div className="flex flex-col w-1/4">
                        <h6 className="uppercase font-bold pb-4">Follow us</h6>
                        <div className="flex">
                            <Link href="#" className="transform transition-transform duration-300 hover:scale-125"><FacebookSVG className="w-14 pr-2" color="white"/></Link>
                            <Link href="#" className="transform transition-transform duration-300 hover:scale-125"><TwitterSVG className="w-16 pr-2 pl-2" color="white"/></Link>
                        </div>
                    </div>
                </div>
                <div className="text-center text-secondary-xdark pb-10">
                    <p>© {getCurrentYear()} Passonix Entertainment. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}