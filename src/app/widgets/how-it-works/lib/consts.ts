import { ImageProps } from 'next/image';

export type HIWPage = 'landing' | 'borehole';
interface Section {
  title:string,
  description:string,
  images?:ImageProps[],
  video?:string
}

type Sections = {
  [page in HIWPage]: Section[];
};

export const HIWSections: Sections = {
  landing: [
    {
      title: 'Установка системы',
      description:
      'В потолок, стену или пол встраиваются капиллярные маты — система из плотно соединенных легких и эластичных полипропиленовых трубок. По трубкам циркулирует дистиллированная вода.',
      images: [
        {
          src: '/landing/house-1.webp', alt: 'Empty house', width: 500, height: 500,
        },
        {
          src: '/landing/house-2.webp', alt: 'Ceilings', width: 500, height: 500,
        },
      ],
    },
    {
      title: 'Принцип работы',
      description:
      'Вода соприкасается с воздухом в помещении, нагретым от тепла людей, техники или солнечного света. По трубам она поступает в холодильный блок, отдает поглощенное тепло и возвращается в капиллярные маты уже охлажденной.',
      images: [
        {
          src: '/landing/house-1.webp', alt: 'Empty house', width: 500, height: 500,
        },
        {
          src: '/landing/house-3.webp', alt: 'Ceilings', width: 500, height: 500,
        },
      ],
    },
    {
      title: 'Результат',
      description:
      'Благодаря этой схеме в комнате понижается температура и создается комфортный микроклимат.',
      video: '/landing/house-4.mp4',
    },
  ],
  borehole: [],
};
