import React from 'react';
import { Button } from '@/app/shared/ui/button';
import Image from 'next/image';
import styles from './what-is.module.scss';

export function WhatIs() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Что это такое?</h2>
          <p>
            Конструкция состоит из водяных капиллярных матов, соединительных
            труб и фитингов, приборов измерения и контроля, теплообменника,
            {/* eslint-disable-next-line max-len */}
            бойлера и охлаждающего устройства. Вода в систему заливается только один раз и циркулирует по полипропиленовым
            трубам под рабочим давлением 2-3 бар.
          </p>
          {/* eslint-disable-next-line max-len */}
          <p>Мы создаем систему, которую можно применять для отопления, охлаждения, увлажнения и осушения помещений. Эти функции можно комбинировать между собой, чтобы создать максимально комфортную климатическую среду в вашем доме.</p>
          <Button>Подробнее</Button>
        </div>
        <Image src="/landing/mats-three.webp" width={592} height={592} alt="Mats" />
      </div>
    </section>
  );
}
