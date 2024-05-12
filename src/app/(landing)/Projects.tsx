'use client';

import { portfolioItems } from '@/assets/data/PortfolioItems';
import Section from '@/components/global/Section';
import SectionHeader from '@/components/global/SectionHeader';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

export default function ProjectsPortfolio() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <Section name="Portfolio">
      {/* Header */}
      <SectionHeader
        title="Featured Projects"
        subtitle="And here are some of my..."
        description="I'm always working on new projects and experimenting with different styles and techniques. Here are a few of my favorites."
      />

      {/* Content */}
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {portfolioItems?.map((item) => (
          <li
            key={item.name}
            className="relative"
            onClick={() => setSelectedItem(item.id)}
          >
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-slate-100 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-100">
              <Image
                src={item.image}
                alt={item.name}
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {item.name}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-slate-900">
              {item.name}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-slate-500">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Transition.Root show={!!selectedItem} as={Fragment}>
        <Dialog className="relative z-10" onClose={() => setSelectedItem(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-black sm:text-2xl lg:text-3xl leading-6 text-slate-900 uppercase tracking-wide sm:leading-9 sm:truncate"
                      >
                        {
                          portfolioItems.find(
                            (item) => item.id === selectedItem,
                          )?.name
                        }
                      </Dialog.Title>

                      <div className="mt-6">
                        <Image
                          src={
                            portfolioItems.find(
                              (item) => item.id === selectedItem,
                            )?.image!
                          }
                          alt={
                            portfolioItems.find(
                              (item) => item.id === selectedItem,
                            )?.name!
                          }
                        />
                      </div>

                      <div className="mt-4">
                        <p className="text-sm sm:text-lg text-slate-500">
                          {
                            portfolioItems.find(
                              (item) => item.id === selectedItem,
                            )?.description
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <Link
                      href={`/contact?subject=Portfolio%20Project%20Inquiry&body=I'm%20interested%20in%20learning%20more%20about%20the%20project%20%22${
                        portfolioItems.find((item) => item.id === selectedItem)
                          ?.name
                      }%22.%0A%0A%0A`}
                      className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                      onClick={() => setSelectedItem(null)}
                    >
                      Contact Me
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Section>
  );
}

// type
