import { Hero } from '@/app/widgets/landing/hero';
import { Explore } from '@/app/widgets/landing/explore';

export default function RootPage() {
  return (
    <main>
      <Hero />
      <article className="content">
        <Explore />
      </article>
    </main>
  );
}
