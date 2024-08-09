import React from 'react';
import { AdvantageCard } from './card/advantage-card';
import { advantages } from '../lib/consts';
import styles from './advantages.module.scss';

export function Advantages() {
  return (
    <section className={styles.section}>
      <h2>
        Преимущества
      </h2>
      <div>
        {
          advantages.map((advantage) => (
            <AdvantageCard
              key={advantage.text}
              advantage={advantage.advantage}
              head={advantage.head}
              text={advantage.text}
              image={advantage.image}
            />
          ))
        }
      </div>
    </section>
  );
}
