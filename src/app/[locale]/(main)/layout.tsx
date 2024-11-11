import { SidebarProvider } from '@/components';
import { routing } from '@/i18n/routing';
// import { SessionProvider } from '@/providers/SessionProvider';
import { Toaster } from '@/components';
import { QueryProvider } from '@/providers/QueryProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import '../../globals.css';

const robotoFlex = localFont({
  src: '../../fonts/RobotoFlex.ttf',
  variable: '--font-roboto-flex',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'SchoolSync',
  description: 'School management',
};

// Define an interface for layout props
interface MainLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function MainLayout({ children, params }: Readonly<MainLayoutProps>) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale as 'en' | 'vi')) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${robotoFlex.variable} antialiased`}>
        <QueryProvider>
          <SidebarProvider>
            <main className="w-full bg-muted">{children}</main>
            <Toaster position="top-right" richColors />
          </SidebarProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
