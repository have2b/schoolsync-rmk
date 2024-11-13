import { AppSidebar, SidebarProvider } from '@/components';
import React from 'react';
import { CustomBreadcrumb } from './CustomBreadcrumb';
import { Header } from './Header';

export function GeneralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex w-full flex-col">
        <Header />
        <CustomBreadcrumb>{children}</CustomBreadcrumb>
      </div>
    </SidebarProvider>
  );
}
