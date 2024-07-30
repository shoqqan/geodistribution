import React from 'react';
import { Logo } from '@/app/shared/ui/logo';
import { Navigation } from '@/app/widgets/header/ui/navigation';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
