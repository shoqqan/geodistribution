import React from 'react';
import { fonts } from '@/app/shared/lib';
import styles from './logo.module.scss';

interface LogoProps {
  variant?: 'primary' | 'secondary';
}
export function Logo(props: LogoProps) {
  const { variant = 'primary' } = props;
  return (
    <div className={`${fonts.dinPro.variable} ${styles.logo} ${styles[variant]}`}>GeoDistribution</div>
  );
}
