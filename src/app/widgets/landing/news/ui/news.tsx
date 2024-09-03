import React from 'react';
import Link from 'next/link';
import styles from './news.module.scss';

export function News() {
  return (
    <section className={styles.section}>
      <div>
        <div>
          <h3>Будьте в курсе новостей</h3>
          <p>Узнавайте об обновлениях и усовершенствованиях системы первыми</p>
        </div>
        <Link href="">Все новости</Link>
      </div>
      <div />
    </section>
  );
}
