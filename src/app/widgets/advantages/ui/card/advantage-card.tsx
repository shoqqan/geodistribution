import React from 'react';
import Image from 'next/image';
import { Advantage } from '../../lib/consts';
import styles from './advantage-card.module.scss';

export function AdvantageCard({
  advantage, head, image, text,
}: Advantage) {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <span>{advantage}</span>
        <h3>{head}</h3>
        <p>
          {text}
        </p>
      </div>
      <Image
        src={image}
        alt="Advantage Image"
        width={520}
        height={400}
        style={{ width: '520px', height: '400px' }}
      />
    </div>
  );
}
