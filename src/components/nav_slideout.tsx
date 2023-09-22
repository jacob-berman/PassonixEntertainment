'use client'

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FacebookSVG, TwitterSVG } from './social_svg';

export default function NavSlideout({ navOpen, setOpen }: any) {
    const [showCloseBtn, setShowCloseBtn] = useState<boolean>(false);
    const duration = 700;

    useEffect(() => {
    if (navOpen) {
        const timeout = setTimeout(() => {
            setShowCloseBtn(true);
        }, duration - duration - 10);
        return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setShowCloseBtn(false);
            }, duration); 
        }
    }, [navOpen])

  return (
    <Transition.Root show={navOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden" onClose={setOpen}>
        {/* Background Overlay */}
        <Transition.Child
          as={Fragment}
          enter={`transition ease-in-out duration-${duration}`}
          enterFrom="opacity-0"
          enterTo="opacity-80"
          leave={`transition ease-in-out duration-${duration}`}
          leaveFrom="opacity-80"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black" aria-hidden="true" />
        </Transition.Child>
        {/* Slide-out Menu */}
        <Transition.Child
          as={Fragment}
          enter={`transform transition ease-in-out duration-${duration}`}
          enterFrom="translate-x-1/3"
          enterTo="translate-x-0"
          leave={`transform transition ease-in-out duration-${duration}`}
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="flex float-right w-1/3 h-full bg-secondary text-white flex flex-col p-4 z-50">
            {
                showCloseBtn && (
                    <div className="flex justify-end">
                        <button className="mb-4" onClick={() => setOpen(false)}>
                            <XMarkIcon className="h-10 stroke-[3px] transform transition-transform duration-300 hover:scale-125" aria-hidden="true" />
                        </button>
                    </div>
                )
            }
            <div className="pl-20">
                <p className='uppercase font-bold text-gray-200 pb-10'>Thanks for choosing Passonix!</p>
                <div className="flex flex-col w-1/4 text-center">
                    <Link href="/about">
                        <h3 className="transform transition-transform duration-300 hover:scale-125">About</h3>
                    </Link>
                    <Link href="/news">
                        <h3 className="transform transition-transform duration-300 hover:scale-125">News</h3>
                    </Link>
                    <Link href="/games">
                        <h3 className="transform transition-transform duration-300 hover:scale-125">Games</h3>
                    </Link>
                    <Link href="/contact">
                        <h3 className="transform transition-transform duration-300 hover:scale-125">Contact</h3>
                    </Link>
                    <div className="flex content-center p-5">
                        <Link href="#" className="transform transition-transform duration-300 hover:scale-125"><FacebookSVG className="w-14 pr-2" color="white"/></Link>
                        <Link href="#" className="transform transition-transform duration-300 hover:scale-125"><TwitterSVG className="w-16 pr-2 pl-2" color="white"/></Link>
                    </div>
                </div>

            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
