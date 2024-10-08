import React from 'react';
import Button from '@/app/shared/ui/button/button';
import styles from './hero.module.scss';

export function Hero() {
  return (
    <div className={styles.hero}>
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
        <video src="/landing/hero.mp4" playsInline loop muted autoPlay>
          <track kind="captions" srcLang="en" label="English" />
        </video>
      </div>
    </div>
  );
}
