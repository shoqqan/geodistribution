import React from 'react';
import Link from 'next/link';
import { Button } from '@/shared/ui/button';
import styles from './navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Link href="#what-is">
        Что это?
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
      <Button buttonVariant="secondary" className="lang">
        EN
      </Button>

      <Button>
        Каталог
      </Button>
    </nav>
  );
}
