import React from 'react';
import { Button } from 'antd';
import styles from './card.module.scss';

interface NewsCardProps {
  imgSrc: string;
  date:string
  title:string
  description:string
}

export function NewsCard() {
  return (
    <div>
      <Image />
      <div>
        <div>
          <p />
          <h4 />
          <p />
        </div>
        <Button />
      </div>
    </div>
  );
}
