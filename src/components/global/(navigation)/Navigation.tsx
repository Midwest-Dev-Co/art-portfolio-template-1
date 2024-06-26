'use client';

import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';

import {
  X,
  Menu,
  BellPlus,
  Sparkle,
  GalleryVerticalEnd,
  ChevronDown,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import LogoHorizontalIcon from '@/assets/icons/brand/Artfolio_Logo-Text-removebg-preview.png';
import Image from 'next/image';
import Link from 'next/link';
import { featuredPortfolioItems } from '@/assets/data/PortfolioItems';

const callsToAction = [
  { name: 'New Releases', href: '/portfolio?filter=new', icon: BellPlus },
  {
    name: 'Featured Artworks',
    href: '/portfolio?filter=featured',
    icon: Sparkle,
  },
  { name: 'View All', href: '/portfolio?filter=all', icon: GalleryVerticalEnd },
];

// * Component: Navigation
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // * Render
  return (
    <header className="absolute inset-x-0 top-0 z-50 isolate">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Artfolio</span>
            <Image
              className="h-8 w-auto"
              src={LogoHorizontalIcon}
              alt="Artfolio Logo"
              width={LogoHorizontalIcon.width}
              height={LogoHorizontalIcon.height}
            />
          </Link>
        </div>

        {/* Mobile Toggler */}
        <div className="flex lg:hidden">
          {!mobileMenuOpen && (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Desktop menu */}
        <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-12">
          <Popover>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900">
              Portfolio
              <ChevronDown
                className="h-5 w-5 flex-none text-slate-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-slate-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {featuredPortfolioItems?.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-slate-50"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-slate-600 group-hover:text-purple-600"
                          aria-hidden="true"
                        />
                      </div>
                      <Link
                        href={item.href}
                        className="mt-6 block font-semibold text-slate-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-slate-900/5 border-x border-slate-900/5">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-slate-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            About
          </Link>
          <Link
            href="/portfolio?filter=all"
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            Contact
          </Link>
        </Popover.Group>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#Calendar" // TODO: Link to Calendly Page
            className="text-sm font-semibold leading-6 text-slate-900"
          >
            Book a Meeting <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Artfolio</span>
              <Image
                className="h-8 w-auto"
                src={LogoHorizontalIcon}
                alt="Artfolio Logo"
                width={LogoHorizontalIcon.width}
                height={LogoHorizontalIcon.height}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }: { open: boolean }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50">
                        Portfolio
                        <ChevronDown
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...featuredPortfolioItems, ...callsToAction].map(
                          (item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ),
                        )}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  About
                </Link>
                <Link
                  href="#Portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  Portfolio
                </Link>
                <Link
                  href="#Contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#Calendar" // TODO: Link to Calendly Page
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >
                  Book a Meeting
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
