export interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: '/images/369.jpg',
    title: 'Fidrofa Excellence School',
    description: 'Educate and Transform',
    ctaText: 'Learn About Our School',
    ctaLink: '/about'
  },
  {
    id: 2,
    image: '/images/316.jpg',
    title: 'Comprehensive Learning Programs',
    description: 'From Day Care to Primary School, we offer quality education with English instruction and full-day care until 6PM.',
    ctaText: 'View Our Programs',
    ctaLink: '/programs'
  },
    {
    id: 3,
    image: '/images/391.jpg',
    title: 'Vision & Mission',
    description: 'To provide affordable quality education for the transformation of Taba communities',
    ctaText: 'Learn More',
    ctaLink: '/about'
  },
  {
    id: 4,
    image: '/videos/vision.gif',
    title: 'Vision 2035',
    description: 'Land expansion (1 Hector), Secondary School, college, hospital',
    ctaText: 'Our Future Vision',
    ctaLink: '/about'
  },

];