import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import LayoutContent from '@/src/components/LayoutContent';

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
    </NextIntlClientProvider>
  );
}