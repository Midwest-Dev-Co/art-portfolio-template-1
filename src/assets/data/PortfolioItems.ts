import { Brush, Pen, Palette, SwatchBook } from 'lucide-react';

import { StaticImageData } from 'next/image';

import EclipsedHorizonsImage from '@/assets/images/Eclipsed_Horizons.jpg';
import WhispersOfTheEternalImage from '@/assets/images/Whispers_of_the_Eternal.jpg';
import SymphonyOfSolitudeImage from '@/assets/images/Symphony_of_Solitude.jpg';
import LuminescentReverieImage from '@/assets/images/Luminescent_Reverie.jpg';

export interface IPortfolioItem {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: any;
  type: string;
  image: StaticImageData;
  isFeatured: boolean;
}

export const portfolioItems: IPortfolioItem[] = [
  {
    id: '1',
    name: 'Eclipsed Horizons',
    description: 'A surreal landscape where the sky meets shadowed horizons.',
    href: '/portfolio/eclipsed-horizons',
    icon: Brush,
    type: 'painting',
    image: EclipsedHorizonsImage,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Whispers of the Eternal',
    description: 'Delicate strokes capturing the essence of timeless whispers.',
    href: '/portfolio/whispers-of-the-eternal',
    icon: Palette,
    type: 'charcoal',
    image: WhispersOfTheEternalImage,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Symphony of Solitude',
    description:
      "An evocative portrayal of serene solitude amidst nature's symphony.",
    href: '/portfolio/symphony-of-solitude',
    icon: SwatchBook,
    type: 'virtual watercolor',
    image: SymphonyOfSolitudeImage,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Luminescent Reverie',
    description: 'A dreamlike scene illuminated by ethereal, glowing light.',
    href: '/portfolio/luminescent-reverie',
    icon: Pen,
    type: 'digital',
    image: LuminescentReverieImage,
    isFeatured: true,
  },
];

export const featuredPortfolioItems: IPortfolioItem[] = portfolioItems.filter(
  (item) => item.isFeatured,
);
