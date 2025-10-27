export const SITE = {
  brand: {
    name: 'Mobile Equine Diagnostics',
    // tagline: 'Compassionate, on-site care for performance and companion horses',
    tagline: 'Compassionate, on-site equine care',
    logoUrl: '/assets/logo.svg', // replace later
  },
  hero: {
    src: '/assets/ranch-home.png',
    srcset: [
      '/assets/ranch-home.png',
      '/assets/ranch-home.png',
      '/assets/ranch-home.png 3000w',
    ].join(', '),
    alt: 'Ranch panorama in Agua Dulce, CA',
  },
  homeImages: {
    top: {
      // overlaps Mission + Areas (right side)
      src: '/assets/home-top.png',
      alt: 'Field-side equine care',
    },
    bottom: {
      // overlaps Areas + Offerings (left side)
      src: '/assets/home-bottom.png',
      alt: 'Diagnostic equipment and care',
    },
  },
  mission: `Our mission is to provide the highest quality veterinary care in a low stress environment with minimal restraint. We believe in the ability to use minimally invasive techniques to reduce the anxiety that is associated with a visit from the veterinarian while at the same time retaining the utmost standard of care.`,
  offerings: [
    {
      title: 'Haul In/Out Ambulatory Service',
      blurb: 'Portable ultrasound and digital radiography.',
    },
    {
      title: 'On-Site Client Education Seminars',
      blurb: 'Comprehensive gait and performance assessment.',
    },
    {
      title: 'Lameness Diagnostic Specialty',
      blurb: 'Rapid response and stabilization guidance.',
      badges: ['Full Service', 'Competitive Pricing'],
    },
  ],
  services: [
    'Digital radiography',
    'Ultrasound',
    'Pre-purchase exams',
    'Lameness workups',
    'Therapeutic recommendations',
    'Case coordination',
  ],
  areasServed: [
    'Acton',
    'Agua Dulce',
    'Antelope Valley',
    'Santa Clarita Valley',
    'Palmdale/Lancaster',
  ],
  affiliations: ['[Hospital Name 1]', '[Hospital Name 2]', '[Hospital Name 3]'],
  team: [
    {
      name: 'Dr. First Last',
      role: 'DVM',
      photo: '/assets/team1.jpg',
      bio: 'Short bio, specialties, years experience.',
    },
    {
      name: 'Tech First Last',
      role: 'RVT',
      photo: '/assets/team2.jpg',
      bio: 'Short bio, support focus, certifications.',
    },
  ],
  contact: {
    phone: '(555) 555-5555',
    email: 'info@mobileequinedx.com',
    city: 'Agua Dulce, CA',
    hours: 'Mon–Fri 8am–5pm',
  },
  servicesPage: {
    hero: {
      src: '/assets/services-hero.png', // dark photo, full-bleed
      srcset: ['/assets/services-hero.png'].join(', '),
      alt: 'Equine diagnostics in the field at dusk',
      title: 'Services',
      subtitle: 'Evidence-based diagnostics, calmly delivered',
    },

    image: '/assets/jack-drill.png',

    // Use plain editable text; component will sort A→Z
    services: [
      'Digital Radiography (X-Ray)',
      'Digital Ultrasound',
      'Diagnostic Treatment',
      'Individually Tailored Rehabilitation Programs',
      'IRAP Therapy',
      'Joint Injections',
      'Lameness Evaluations',
      'Platelet Rick Plasma (PRP) Therapy',
      'Soft Tissue Injurt',
      'Stem Cell Therapy',
    ],

    emergencyNote: '* Emergency Services When Available',

    affiliates: [
      'CALIFORNIA EQUINE ORTHOPEDICS',
      'SAN LUIS REY EQUINE HOSPITAL',
      'CHINO VALLEY EQUINE HOSPITAL',
      'ALAMO PNTADO EQUINE MEDICAL CENTER',
      'WEST COAST EQUINE HOSPITAL',
    ],
  },
  teamPage: {
    hero: {
      src: '/assets/services-hero.png', // dark photo, full-bleed
      srcset: ['/assets/services-hero.png'].join(', '),
      alt: 'Hands-on equine care with the MED team',
      title: 'Our Team',
      subtitle: 'Experienced, calm, and horse-first',
    },
    jackie: {
      name: 'Jacqueline Friedlander, DVM',
      photo: '/assets/team-jackie.png',
      paragraphs: [
        `Jacqueline is a graduate of the Western University of Health Sciences – College of Veterinary Medicine. She was born and raised in the Brentwood area of West Los Angeles and began riding horses at the age of 4. She spent many years on the hunter-jumper ‘A’ circuit with Rob Gage Stables at Middle Ranch before leaving the horse show world to dedicate more time to her growing horse training and riding lesson business.`,
        `Jackie met her husband, Martin while training horses in the Topanga canyon area. Martin introduced her to a wide equine world of polo, cutting, and reined cow horse events as well as natural horsemanship training. She and her husband own 3 horses (two Quarter horses and one Warmblood) and are very active in the horse community.`,
        `Her interests in veterinary medicine are lameness diagnostics and therapies, ophthalmology, and internal medicine. Dr. Friedlander is a member of the California Veterinary Medical Association as well as the American Association of Equine Practitioners.`,
        `In her spare time, Jackie enjoys reading, running with her chocolate Labrador, Colt, and camping in the Santa Ynez and Carmel Valleys with her husband, daughter, horses and dog.`,
      ],
    },
    martin: {
      name: 'Martin Friedlander',
      photo: '/assets/team-martin.png',
      paragraphs: [
        `Martin is a native of South Africa and emigrated to the United States as a teenager with his family. While in South Africa he grew up riding horses on his uncle’s ranch in Natal. He is an athlete and enjoys soccer and cricket. He developed a personal training and fitness business in the Santa Monica area.`,
        `Martin rode horses in the Topanga canyon area, which is where he met his wife, Dr. Jackie Friedlander. His equine interests soon expanded to include cutting and reined cow horse events. Martin spent many years working with the founders of the ‘natural horsemanship’ techniques that are used by many clinicians today.`,
        `While in Carmel Valley working under the guidance of the late Kent Hennicks (a disciple of Tom and Bill Dorrance) he was able to hone his communication skills with both horses and their people. Martin brings this essential component into his wife’s veterinary practice.`,
        `Martin assists Dr. Friedlander at most of her appointments. He allows Dr. Friedlander to provide care for her equine patients using the least amount of restraint possible — resulting in a low stress veterinary visit. In his spare time Martin enjoys playing soccer, cricket, and camping with his wife, daughter, horses and dog, Colt.`,
      ],
    },
  },
  contactInfo: {
    addressLine1: '35135 Johnson Rd.',
    city: 'Agua Dulce',
    region: 'CA',
    postalCode: '91390',
    phone: '(661) 733-7909',
    email: 'mobileequinediagnostics@hotmail.com',
    // Same Maps link behavior as footer
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=35135+Johnson+Rd,+Agua+Dulce,+CA+91390',
  },

  contactPage: {
    hero: {
      src: '/assets/services-hero.png', // dark photo, full-bleed
      srcset: ['/assets/services-hero.png'].join(', '),
      alt: 'Agua Dulce landscape at dusk',
      title: 'Contact',
      subtitle: 'Reach out to schedule an appointment or ask a question',
    },
  },
} as const;
