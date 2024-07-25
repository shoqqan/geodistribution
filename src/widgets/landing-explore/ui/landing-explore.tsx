import React from 'react';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';
import styles from './landing-explore.module.scss';

export function LandingExplore() {
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
            <a href="https://www.instagram.com/">
              <Image src="/landing/explore-inst.svg" width={32} height={32} alt="Instagram logo" />
            </a>
            <a href="https://www.instagram.com/">
              <Image src="/landing/explore-wa.svg" width={32} height={32} alt="WhatsApp logo" />
            </a>
            <a href="https://www.instagram.com/">
              <Image src="/landing/explore-tg.svg" width={32} height={32} alt="Telegram Logo" />
            </a>
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
