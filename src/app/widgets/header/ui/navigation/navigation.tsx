'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { Button } from '@/app/shared/ui/button';
import { useTranslations } from 'next-intl';
import { setUserLocale } from '@/app/shared/services';
import { Locale } from '@/app/shared/lib';
import styles from './navigation.module.scss';

export function Navigation() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('header.nav');
  const onChangeLocale = (locale:Locale) => () => {
    startTransition(() => {
      setUserLocale(locale);
    });
  };
  return (
    <nav className={styles.navigation}>
      <Link href="#what-is">
        {t('whatIs')}
      </Link>
      <Link href="#advantages">
        Преимущества
      </Link>
      <Link href="#how-it-work">
        Как это работает
      </Link>
      <Link href="#news">
        Новости
      </Link>
      <Link href="#faq">
        FAQ
      </Link>
      <Button buttonVariant="secondary" className="lang" onClick={onChangeLocale('en')}>
        EN
      </Button>
      <Button buttonVariant="secondary" className="lang" onClick={onChangeLocale('ru')}>
        RU
      </Button>
      <Button>
        Каталог
      </Button>
    </nav>
  );
}
