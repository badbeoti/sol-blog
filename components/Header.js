import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import clsx from 'clsx'
import NextImage from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="supports-backdrop-blur:bg-white/95 dark:bg-dark/75 sticky top-0 z-40 bg-white/75 py-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex cursor-pointer select-none items-center justify-between">
              <div className="mr-3 flex items-center justify-center">
                <NextImage
                  src="/static/images/logo.png"
                  alt={siteMetadata.headerTitle}
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {headerNavLinks.map((link) => {
              return (
                <Link key={link.title} href={link.href}>
                  <span
                    className={clsx(
                      'inline-block cursor-pointer select-none rounded px-2 py-1 font-medium text-gray-900 dark:text-gray-100 sm:px-3 sm:py-2',
                      router.pathname.startsWith(link.href)
                        ? 'bg-gray-200 dark:bg-gray-700'
                        : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    )}
                    data-umami-event={`nav-${link.href.replace('/', '')}`}
                  >
                    {link.title}
                  </span>
                </Link>
              )
            })}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
