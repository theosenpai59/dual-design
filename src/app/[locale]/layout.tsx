import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import LayoutContent from '@/src/components/LayoutContent';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LayoutContent>
        {children}
      </LayoutContent>
      <div className="bg-navy-night text-gray-100 min-h-screen">
        <Navbar locale={locale} />
        <main className="flex-grow">{children}</main> 
        <Footer />
      </div>
      <Analytics />
          <SpeedInsights />
    </NextIntlClientProvider>
  );
}