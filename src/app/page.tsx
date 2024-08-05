import { Hero } from '@/app/widgets/landing/hero';
import { Explore } from '@/app/widgets/landing/explore';
import { WhatIs } from '@/app/widgets/landing/what-is/ui/what-is';

export default function RootPage() {
  return (
    <main>
      <Hero />
      <article className="content">
        <Explore />
        <WhatIs />
      </article>
    </main>
  );
}
