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
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Excellence in Education',
    description: '100% success rate in Primary 6 national exams. FES is recognized for academic excellence and student achievement.',
    ctaText: 'Learn About Our Success',
    ctaLink: '/about'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    title: 'Comprehensive Learning Programs',
    description: 'From Day Care to Primary School, we offer quality education with English instruction and full-day care until 6PM.',
    ctaText: 'View Our Programs',
    ctaLink: '/programs'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Character Development',
    description: 'We train students to be hardworking, disciplined, confident, and strive for excellence in all they do.',
    ctaText: 'Our Values',
    ctaLink: '/about'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
    title: 'Partnership Opportunities',
    description: 'Join us in promoting school feeding, skill training, construction, and realizing our 2030-2035 strategic vision.',
    ctaText: 'Partner With Us',
    ctaLink: '/contact'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Dedicated Team Environment',
    description: 'Our skillful and passionate staff function as a family, creating a supportive learning culture for every child.',
    ctaText: 'Meet Our Team',
    ctaLink: '/about'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2092&q=80',
    title: 'Community Recognition',
    description: 'FES students are admired by the community as smart and disciplined learners with a promising future.',
    ctaText: 'Join Our Community',
    ctaLink: '/contact'
  }
];