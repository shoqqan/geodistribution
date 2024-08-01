'use server';

import { cookies } from 'next/headers';
import { COOKIE_NAME, Locale } from '@/app/shared/lib';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || 'ru';
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
