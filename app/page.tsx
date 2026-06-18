
import FeatureCards from "@/src/components/FeatureCards";
import Hero from "@/src/components/Hero";
import MusicSlider from "@/src/components/MusicSlider";
import PremiumStandard from "@/src/components/PremiumStandard";
import PricingCards from "@/src/components/PricingCards";
import SpotifyHeroPage from "@/src/components/SpotifyHeroPage";
import SpotifyPage from "@/src/components/SpotifyPage";
import Image from "next/image";

export default function Home() {
  return (
  <>

<Hero />
<PremiumStandard />

<SpotifyPage />
<FeatureCards />
<MusicSlider />
<SpotifyHeroPage />
<PricingCards />


  
  </>
  );
}
