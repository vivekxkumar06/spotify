
import FeatureCards from "@/src/components/home/FeatureCards";
import Hero from "@/src/components/home/Hero";
import MusicSlider from "@/src/components/home/MusicSlider";
import PremiumStandard from "@/src/components/premium/PremiumStandard";
import PricingCards from "@/src/components/premium/PricingCards";
import SpotifyHeroPage from "@/src/components/home/SpotifyHeroPage";
import SpotifyPage from "@/src/components/home/SpotifyPage";
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
