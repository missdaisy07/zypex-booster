'use client'; 
import './globals.css';
import { cn } from '@/lib/utils';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { AppHeader } from '@/components/app-header';
import { Toaster } from '@/components/ui/toaster';
import { AdsterraPopup } from '@/components/adsterra-popup';
import { UserProvider } from '@/context/user-context';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Zypex Booster</title>
        <meta name="description" content="Boost your social media presence." />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background', ptSans.variable)}>
        <UserProvider>
            <SidebarProvider>
              <AppSidebar />
              <div className="flex-1 md:pl-[3rem]">
                <AppHeader />
                <main className="p-4 sm:p-6 lg:p-8">
                  {children}
                </main>
              </div>
            </SidebarProvider>
            <Toaster />
            <AdsterraPopup />
        </UserProvider>
      </body>
    </html>
  );
        }
