import { AppSidebar, SidebarProvider } from '@/components';
import React from 'react';
import { Header } from './Header';

export function GeneralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex w-full flex-col">
        <Header />
        {children}
      </div>
    </SidebarProvider>
  );
}
