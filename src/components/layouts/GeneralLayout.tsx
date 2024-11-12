import { AppSidebar, SidebarProvider } from '@/components';
import React from 'react';

export function GeneralLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
