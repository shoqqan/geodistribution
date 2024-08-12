'use client';

import React from 'react';
import { Navigation } from '@/app/widgets/header/ui/navigation/navigation';
import { Logo } from '@/app/shared/ui/logo/logo';
import { useScrollDirection } from '@/app/shared/hooks/useScrollDirection';
import styles from './header.module.scss';

export function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <header className={styles.header} data-direction={scrollDirection}>
      <Logo />
      <Navigation />
    </header>
  );
}
