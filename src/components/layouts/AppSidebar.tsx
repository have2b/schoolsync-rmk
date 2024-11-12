'use client';

import {
  LocaleLink,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components';
import { ADMIN_NAV_LINKS, STUDENT_NAV_LINKS, TEACHER_NAV_LINKS } from '@/constants';
import { useAuth } from '@/store/auth';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AppSidebar() {
  const t = useTranslations('navigation.sections');
  const pathname = usePathname();
  const { account } = useAuth();
  // Get appropriate nav links based on role
  const getNavLinks = () => {
    switch (account?.role) {
      case 'Admin':
        return ADMIN_NAV_LINKS;
      case 'Teacher':
        return TEACHER_NAV_LINKS;
      case 'Student':
        return STUDENT_NAV_LINKS;
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();

  // Function to check if the current path matches the menu item's href
  const isActiveLink = (href: string) => {
    const pathSegments = pathname.split('/').filter(Boolean); // Split path and remove empty segments
    const hrefSegments = href.split('/').filter(Boolean); // Split href and remove empty segments

    // Handle exact match for homepage
    if (href === '/') {
      return pathname === '/';
    }

    // Check if the second segment of the pathname matches the second segment of the href
    if (pathSegments.length > 1 && hrefSegments.length > 0) {
      return pathSegments[1] === hrefSegments[0];
    }

    // Handle other routes - check if pathname starts with href
    return pathname.startsWith(href);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton asChild className="hover:bg-sidebar-primary-foreground p-8">
          <Link className="flex w-full items-center justify-center" href={'/'}>
            <div className="relative size-20">
              <Image src={'/logo.svg'} alt="logo" fill />
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map((link) => (
                <SidebarMenuItem key={link.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActiveLink(link.href)}
                    tooltip={t(link.name)}
                  >
                    <LocaleLink href={link.href} className="h-full py-3">
                      {link.icon}
                      <span>{t(link.name)}</span>
                    </LocaleLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="w-full items-center justify-center">
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}
