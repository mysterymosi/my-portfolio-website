import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCafeone from '@/images/logos/cafeone.jpeg'
import logoMosiIdBanc from '@/images/logos/mosi-id-banc.svg'
import logoLittleAdmin from '@/images/logos/little-admin.svg'
import logoLittleApp from '@/images/logos/little-app.ico'
import logoDuff from '@/images/logos/duff.svg'
import logoSchoolable from '@/images/logos/schoolable.jpeg'

const projects = [
  {
    name: 'Schoolable Pay',
    description:
      'Financial infrastructure to run a successful school business',
    link: { href: 'https://schoolable.vercel.app/auth/login', label: 'schoolable.vercel.app' },
    logo: logoSchoolable,
  },
  {
    name: 'Cafe One Wallet',
    description:
      'Customer and Admin dashboard for a wallet infrastructure',
    link: { href: 'https://idbancwaas.vercel.app/login', label: 'dashboard.c-one.ng' },
    logo: logoCafeone,
  },
  {
    name: 'Little App Website',
    description:
      'Collaborated on the development of the Little App’s landing page',
    link: { href: 'https://trylittleapp.com/', label: 'trylittleapp.com' },
    logo: logoLittleApp,
  },
  {
    name: 'Little Admin',
    description:
      'Admin dashboard for monitoring and managing the operations of the Little App',
    link: { href: 'https://littleadmin.vercel.app/auth/login', label: 'littleadmin.vercel.app' },
    logo: logoLittleAdmin,
  },
  {
    name: 'Mosi ID Banc',
    description:
      'Admin dashboard for a Ledger system. The owners for some reason deemed it fit to name it after me. 😅',
    link: { href: 'https://mosiidbanc.vercel.app/auth/login', label: 'mosiidbanc.vercel.app' },
    logo: logoMosiIdBanc,
  },
  {
    name: 'Duff KYC Portal',
    description:
      'Dashboard designed to streamline the Know Your Customer (KYC) process.',
    link: { href: 'https://duff.vercel.app/auth/signin', label: 'duff.vercel.app' },
    logo: logoDuff,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Weaving the web of the future"
      intro="I’ve built a bunch of projects over the years but these are the ones that I recently developed and I’m currently maintaining."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
