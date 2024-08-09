'use client';

import React from 'react';
import { Navigation } from '@/app/widgets/header/ui/navigation/navigation';
import { Logo } from '@/app/shared/ui/logo/logo';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
