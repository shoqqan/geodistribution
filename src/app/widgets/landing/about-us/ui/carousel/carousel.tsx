'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import Image from 'next/image';
import { A11y, Autoplay, FreeMode } from 'swiper/modules';
import { Company } from '@/app/widgets/landing/about-us/lib/consts';
import styles from './carousel.module.scss';

interface CarouselProps {
  logos: Company[]
}

export function Carousel({ logos }:CarouselProps) {
  return (
    <Swiper
      loop
      modules={[A11y, Autoplay, FreeMode]}
      effect="fade"
      spaceBetween={200}
      slidesPerView={5}
      className={styles.swiper}
      autoplay={{ delay: 2000 }}
      freeMode={{ enabled: true }}
    >
      {logos.map((logo, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={index}>
          <div className={styles.companyLogo}>
            <Image src={logo.imgSrc} width={150} height={100} alt={logo.name} />
          </div>
        </SwiperSlide>
      ))}

      <SwiperSlide>
        <div className={styles.companyLogo}>
          <Image src="/landing/partner-1.webp" width={150} height={100} alt="Mats" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.companyLogo}>
          <Image src="/landing/partner-1.webp" width={150} height={100} alt="Mats" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.companyLogo}>
          <Image src="/landing/partner-1.webp" width={130} height={100} alt="Mats" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.companyLogo}>
          <Image src="/landing/partner-1.webp" width={130} height={100} alt="Mats" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.companyLogo}>
          <Image src="/landing/partner-1.webp" width={130} height={100} alt="Mats" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
