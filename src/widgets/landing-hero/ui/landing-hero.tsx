import React from 'react';
import { Button } from '@/shared/ui/button';
import styles from './landing-hero.module.scss';

export function LandingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          Климатическая система для дома:
          кондиционирование, влажность, отопление, возобновляемый источник энергии
        </h1>
        <p>
          Экологичный комфорт и равномерное распределение температуры по всему помещению
        </p>
        <div className={styles.buttonContainer}>
          <Button>Оставить заявку</Button>
          <Button buttonVariant="secondary">Оставить заявку</Button>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video src="/videos/hero.mp4" playsInline loop muted autoPlay>
          <track kind="captions" srcLang="en" label="English" />
        </video>
      </div>
    </section>
  );
}
