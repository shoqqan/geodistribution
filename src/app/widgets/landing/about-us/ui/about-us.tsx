import React from 'react';
import Image from 'next/image';
import { Carousel } from '@/app/widgets/landing/about-us/ui/carousel/carousel';
import { Company } from '@/app/widgets/landing/about-us/lib/consts';
import styles from './about-us.module.scss';

export function AboutUs() {
  const logos:Company[] = [
    { imgSrc: '/landing/partner-1.webp', name: 'Company 1' },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>О нас</h2>
          <p>
            Polaredge — это казахстанский производитель капиллярных матов для климатических систем.
          </p>
          <p>
            Мы работаем на немецкой автоматизированной линии производства,
            используем высококачественный полипропилен и рассчитываем размеры
            конструкций и сварные соединения между капиллярными и коллекторными трубками.
            Мониторим и записываем все производственные процессы на заводе
            — от проверки сырья до упаковки.
          </p>
          <p>
            Мы постоянно развиваем наши технологии и применяем профессиональный опыт,
            чтобы клиенты могли пользоваться
            системами нагрева и охлаждения долго, надежно и экономично.
          </p>
        </div>
        <div className={styles.companyLogo}>
          <Image src="/landing/partner-1.webp" width={300} height={200} alt="Mats" />
        </div>
      </div>
      <Carousel logos={logos} />
    </section>
  );
}
