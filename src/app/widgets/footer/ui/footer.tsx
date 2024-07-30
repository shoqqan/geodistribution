import React from 'react';
import { Logo } from '@/app/shared/ui/logo';
import Image from 'next/image';
import Link from 'next/link';
import { Map } from './map/map';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Map />
      <div className={styles.main}>
        <div className={styles.links}>
          <section>
            <Logo />
            <p className={styles.address}>
              пр. Аль-Фараби, 71
              <br />
              Алматы, Казахстан
            </p>
          </section>
          <section>
            <h4 className="list-title">Компания</h4>
            <ul>
              <li><Link href="#what_is_that">Что это?</Link></li>
              <li><Link href="#advantages">Преимущества</Link></li>
              <li><Link href="#htw">Как это работает</Link></li>
              <li><Link href="#news">Новости</Link></li>
            </ul>
          </section>
          <section>
            <h4 className="list-title">Застройщикам</h4>
            <ul>
              <li><Link href="borehole.html">Геотермальная скважина</Link></li>
              <li><Link href="calculate.html">Рассчитать</Link></li>
            </ul>
          </section>
          <section>
            <h4 className="list-title">Контакты</h4>
            <ul>
              <li><a href="mailto:info@palaredge.kz">info@palaredge.kz</a></li>
              <li><a href="tel:+77014359691">+7 701 435 9691</a></li>
            </ul>
          </section>
        </div>
        <div className={styles.icons}>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src="/inst.svg" width={40} height={40} alt="Instagram logo" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src="/fb.svg" width={40} height={40} alt="Facebook logo" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src="/tg.svg" width={40} height={40} alt="Telegram logo" />
          </Link>
        </div>
        <span className="copyright">Все права защищены 2023</span>
      </div>
    </footer>
  );
}
