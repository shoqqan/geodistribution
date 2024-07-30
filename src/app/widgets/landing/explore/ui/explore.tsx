import React from 'react';
import { Button } from '@/app/shared/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import styles from './explore.module.scss';

export function Explore() {
  return (
    <section className={styles.section}>
      <h2>
        Устанавливаем системы
        <br />
        и продаем комплектующие
      </h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>
            Читайте нас
            <br />
            в соцсетях:
          </h3>
          <div>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image src="/landing/explore-inst.svg" width={32} height={32} alt="Instagram logo" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image src="/landing/explore-wa.svg" width={32} height={32} alt="WhatsApp logo" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Image src="/landing/explore-tg.svg" width={32} height={32} alt="Telegram Logo" />
            </Link>
          </div>
          <Image src="/landing/explore.svg" width={400} height={300} className={styles.liquid} alt="Liquid Animation" />
        </div>
        <div className={styles.card}>
          <h3>Из чего состоит система?</h3>
          <video src="/landing/explore-text-fall.mp4" playsInline loop muted autoPlay>
            <track kind="captions" srcLang="en" label="English" />
          </video>
        </div>
        <div className={styles.card}>
          <h1>GeoDistribution</h1>
        </div>
      </div>
      <Button>Узнать подробнее</Button>
    </section>
  );
}
