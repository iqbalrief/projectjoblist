/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import {
  ChevronDownIcon,
  PencilIcon,

  ArrowCircleLeftIcon
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PageHeader(props) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-5">
 
      <div className="flex-1 min-w-0">
        <span className="hidden sm:block">
          <button
            type="button"
            onClick={() => props.setModal()}

            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {props.actionType === 'Add' ?
              <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" /> :
              <ArrowCircleLeftIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
            }

            {props.actionType}

          </button>
        </span>

        {/* Dropdown */}
        <Menu as="span" className="ml-3 relative sm:hidden">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                More
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
              </Menu.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        View
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  )
}
