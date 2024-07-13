import React from 'react';
import { fonts } from '@/shared/lib';
import styles from './logo.module.scss';

export function Logo() {
  return (
    <div className={`${fonts.dinPro.variable} ${styles.logo}`}>GeoDistribution</div>
  );
}
