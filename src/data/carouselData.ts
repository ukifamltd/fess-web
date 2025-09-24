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
    image: 'https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/504169272_10236879988356894_8937222913421438917_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=KminT72Dm0IQ7kNvwEM-FlJ&_nc_oc=Adn7_h3crwP549bIdf9KbZlu816OxYXGDokElWU3HgMuiNKvBo3GM9b5bIUlYdDn-cPlxxN5EJ7oW_0DyMRKWX4E&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=kMn2Hp3BfSd5Bh3JhFc7wg&oh=00_AfZxlU3InFmz2zTWnnXyYG-cI2xAGaVkYTNvTbnSM8Lq3A&oe=68D9E7DF',
    title: 'Excellence in Education',
    description: '100% success rate in Primary 6 national exams. FES is recognized for academic excellence and student achievement.',
    ctaText: 'Learn About Our Success',
    ctaLink: '/about'
  },
  {
    id: 2,
    image: 'https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/552197773_10238488913219010_1648716343769207569_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=ds6MZ-f_T7sQ7kNvwFRh435&_nc_oc=Adm1bqcRyIy4dTnbdoLog3lHL4nP_x6Fo3Kw5Y0ujexyRzCbmku5WmLrJ0gzQ-volQFM57aKThAqCJV4UZARph7C&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=dctMSYe_7nN3LBgNsOKchA&oh=00_AfZnSERPKWvIJAYJ_Pdgt-QbqX3s2PWVslEKDLTcxyHQaw&oe=68D9E65B',
    title: 'Comprehensive Learning Programs',
    description: 'From Day Care to Primary School, we offer quality education with English instruction and full-day care until 6PM.',
    ctaText: 'View Our Programs',
    ctaLink: '/programs'
  },
  {
    id: 3,
    image: 'https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/515030751_10237416703614440_2701754165341915665_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=oVe-A3ub0iAQ7kNvwFX0L_m&_nc_oc=Adm9-zzcW7vyDMI5M2fqyDTX9F0ENYQEN1KLRBXrCCcOG1yvXIeV5qkXKZ-MZN8bGvTAocDvTQjWfuNZH3UYK1Jm&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=RHvveyPTlXur-Nay2PJX4Q&oh=00_AfbRl1bNRqU2bLiuVszYOE3rE7hMobEaUS1_7yy5uteYCA&oe=68D9D2A6',
    title: 'Character Development',
    description: 'We train students to be hardworking, disciplined, confident, and strive for excellence in all they do.',
    ctaText: 'Our Values',
    ctaLink: '/about'
  },
  {
    id: 4,
    image: 'https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/505709843_10236956217542576_6828824210782066492_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=7JAOiZcrui0Q7kNvwFE41CC&_nc_oc=AdlkkkGt3JjKgsdFSByuCPsrVqfQT9U3uxRGZloa13Qw6QzTTQLzhPqUXptMIvOjQZ3wGOyT1hfeh9GzmVHMALJI&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=DwBL2HLnk-h4OCFAqNcrDQ&oh=00_AfagechqB8hdG_1RCCOuadNvR73M4zFNFzKqjj5oerDxNA&oe=68D9EFA6',
    title: 'Partnership Opportunities',
    description: 'Join us in promoting school feeding, skill training, construction, and realizing our 2030-2035 strategic vision.',
    ctaText: 'Partner With Us',
    ctaLink: '/contact'
  },
  {
    id: 5,
    image: 'https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/493278082_10236365408252713_8358736395262008807_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=-eh59P-jVZgQ7kNvwGTPcQx&_nc_oc=AdmpvbLmorBv-fPYGps0ZHyrAqFsQDiYvisuTP6UBAH9w-AE669JLtpRAj8r9ara34nfHCA8DPF_aKMS6kTvr8Ow&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=yY0-xafvKwZ2Eisj9-_8RQ&oh=00_AfaMQ7hSllThM0He1z3CcmXWxqs34Qo3HsJZD-3ZAa-FTA&oe=68D9F3FF',
    title: 'Dedicated Team Environment',
    description: 'Our skillful and passionate staff function as a family, creating a supportive learning culture for every child.',
    ctaText: 'Meet Our Team',
    ctaLink: '/about'
  },
  {
    id: 6,
    image: 'https://scontent.fkgl4-1.fna.fbcdn.net/v/t39.30808-6/494185034_10236365409452743_6621101251354095227_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=il1WvBy4kt0Q7kNvwE22Q6c&_nc_oc=AdkSdGarJYKxcwC9hgcNciYj2916CqQ_xyBfxOQ9tY-ziZtBdimlxriNOQu7s0zZFayyJ2p35LHNg5qCWrDY0xRX&_nc_zt=23&_nc_ht=scontent.fkgl4-1.fna&_nc_gid=msd4KTjzIvznEmtcjLeSWw&oh=00_AfYXVHXCtRUYIl0NdAFsPRS4hSt-cZ2RR21waZm3UxlBjw&oe=68D9D6D2',
    title: 'Community Recognition',
    description: 'FES students are admired by the community as smart and disciplined learners with a promising future.',
    ctaText: 'Join Our Community',
    ctaLink: '/contact'
  }
];