/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import globalVal from '../globalResumeVar.js';
var resumeLink = globalVal.value;

const navigation = [
  { name: 'Home', href: '/', target: '_self', rel: 'noreferrer', current: false },
  { name: 'Projects', href: 'projects', target: '_self', rel: 'noreferrer', current: false },
  { name: 'Resume', href: resumeLink, target: '_blank', rel: 'noreferrer', current: false },
  { name: 'Github', href: 'https://github.com/solderq35', target: '_blank', rel: 'noreferrer', current: false },
  { name: 'Email', href: 'mailto:huangjeff.cs@gmail.com', target: '_blank', rel: 'noreferrer', current: false },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/huangjeffcs/',
    target: '_blank',
    rel: 'noreferrer',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        target={item.target}
                        rel={item.rel}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-gray-100 hover:bg-gray-700 hover:text-white'
                            : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium text-lg'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
