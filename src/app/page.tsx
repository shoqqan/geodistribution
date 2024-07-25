import { LandingHero } from '@/widgets/landing-hero';
import { LandingExplore } from '@/widgets/landing-explore';

export default function Home() {
  return (
    <div>
      <LandingHero />
      <main className="content">

        <LandingExplore />
      </main>
    </div>
  );
}
