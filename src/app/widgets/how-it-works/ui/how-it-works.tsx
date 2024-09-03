'use client';

import React, { RefObject, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HIWPage, HIWSections } from '../lib/consts';
import styles from './how-it-works.module.scss';

interface HowItWorksProps {
  type: HIWPage;
}

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks({ type }: HowItWorksProps) {
  const sections = HIWSections[type];
  const [visible, setVisible] = useState(sections[0].title);
  const sectionsContainer:RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionsContainer.current) {
      ScrollTrigger.create({
        trigger: sectionsContainer.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      });

      const cards = sectionsContainer.current.querySelectorAll(`.${styles.card}`);
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          endTrigger: card,
          onEnter: () => setVisible(sections[index]?.title || ''),
          onEnterBack: () => setVisible(sections[index]?.title || ''),
          scrub: true,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, { scope: sectionsContainer });

  return (
    <section className={styles.section}>
      <h2>Как это работает</h2>
      <div ref={sectionsContainer} className={styles.stickyContainer}>
        {sections.map((section) => (
          <div
            key={section.title}
            className={`${styles.card}`}
            data-visible={section.title === visible}
          >
            <div className={styles.textContainer}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
            <div className={styles.imgContainer}>
              {section.images?.map((image) => (
                <Image
                  key={image.src.toString()}
                  {...image}
                  alt={image.alt || `Image for ${section.title}`}
                />
              ))}
              {section.video && (
                <video src={section.video} playsInline loop muted autoPlay aria-label={`Video for ${section.title}`}>
                  <track kind="captions" srcLang="en" label="English" />
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
