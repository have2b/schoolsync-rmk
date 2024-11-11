import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SchoolSync',
  description: 'School management',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
