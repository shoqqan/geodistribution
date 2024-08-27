import { Explore } from '@/app/widgets/landing/explore/ui/explore';
import { WhatIs } from '@/app/widgets/landing/what-is/ui/what-is';
import { Hero } from '@/app/widgets/landing/hero/ui/hero';
import { Advantages } from '@/app/widgets/advantages/ui/advantages';
import { HowItWorks } from '@/app/widgets/how-it-works/ui/how-it-works';

export default function RootPage() {
  return (
    <main>
      <Hero />
      <article className="content">
        <Explore />
        <WhatIs />
        <Advantages />
        <HowItWorks type="landing" />
      </article>
    </main>
  );
}
