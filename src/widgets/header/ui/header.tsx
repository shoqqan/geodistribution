import React from 'react';
import { Logo } from '@/shared/ui/logo';
import { Navigation } from '@/widgets/header/ui/navigation/navigation';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
