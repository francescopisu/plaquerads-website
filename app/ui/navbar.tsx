"use client";

import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/app/ui/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                  {/* Mobile menu button */}
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
    
                  {/* Primary navigation - hidden on small screens */}
                  <div className="hidden sm:flex sm:space-x-4 justify-center">
                    <NavLinks />
                  </div>

    
                  {/* Spacer div to push the hamburger to the right */}
                  <div className="flex justify-end sm:hidden">
                    {/* Empty div for spacing */}
                  </div>
                </div>
              </div>
    
              {/* Mobile menu, show/hide based on menu state */}
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  <NavLinks />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      );
}


