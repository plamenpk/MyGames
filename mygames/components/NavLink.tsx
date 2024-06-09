'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, FC } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const ifPath = usePathname().startsWith(href);
  return (
    <Link
      href={href}
      className={ifPath
        ? "text-blue-800 text-xl px-4 py-2 hover:text-blue-800"
        : "border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800"
      }>
      {children}</Link>
  )
}

export default NavLink;

