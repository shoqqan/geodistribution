import { Hero } from '@/app/widgets/landing/hero';
import { Explore } from '@/app/widgets/landing/explore';
import { WhatIs } from '@/app/widgets/landing/what-is/ui/what-is';
import { Advantages } from '@/app/widgets/landing/advantages';

export default function RootPage() {
  return (
    <main>
      <Hero />
      <article className="content">
        <Explore />
        <WhatIs />
        <Advantages />
      </article>
    </main>
  );
}
