import { Toaster } from '@/components';
import { routing } from '@/i18n/routing';
import AuthProvider from '@/providers/AuthProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import '../globals.css';

const robotoFlex = localFont({
  src: '../fonts/RobotoFlex.ttf',
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

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${robotoFlex.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <main className="w-full">
              <AuthProvider>{children}</AuthProvider>
            </main>
            <Toaster position="top-right" richColors closeButton={true} />
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
