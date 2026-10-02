import { FacilityZone, ProgramItem, ScheduleSlot, ReviewItem, MembershipPlan, FaqItem } from '../types';

export const GYM_INFO = {
  name: 'Timeless Fitness',
  city: 'Jaipur, Rajasthan',
  rating: 4.7,
  reviewsCount: 320,
  phone: '079765 90461',
  phoneClean: '7976590461',
  phoneDisplay: '+91 79765 90461',
  whatsappUrl: 'https://wa.me/917976590461?text=Hi%20Timeless%20Fitness!%20I%20would%20like%20to%20book%20a%20free%20trial%20session.',
  fullAddress: 'RRVH+WF4, 5, Jagatpura Rd, Model Town - B, Krishna Puri, Model Town, Malviya Nagar, Jaipur, Rajasthan 302017',
  landmark: 'Model Town - B, Near Jagatpura Road, Malviya Nagar',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Timeless+Fitness+Jagatpura+Rd+Model+Town+Malviya+Nagar+Jaipur&output=embed',
  mapsDirectionsUrl: 'https://maps.google.com/?q=RRVH%2BWF4,+5,+Jagatpura+Rd,+Model+Town+-+B,+Krishna+Puri,+Model+Town,+Malviya+Nagar,+Jaipur,+Rajasthan+302017',
  timings: {
    weekdays: '5:30 AM – 10:30 PM (Mon – Sat)',
    sunday: '7:00 AM – 1:00 PM (Recovery & Open Gym)',
  }
};

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: 'rooftop-crossfit',
    title: 'Iconic Rooftop CrossFit Arena',
    subtitle: 'Jaipur’s Signature Open-Air Functional Turf',
    tagline: 'Fresh Air · Panoramic Skyline · High-Octane Stamina',
    description: 'Breathe free while pushing your endurance limits. Our crown jewel is an expansive rooftop functional training arena equipped with heavy rig frames, battle ropes, sled tracks, kettlebell arsenals, and medicine balls — under the open Jaipur sky.',
    image: '/src/assets/images/rooftop_crossfit_1790950973133.jpg',
    highlights: [
      'Open-air natural ventilation & unobstructed sunset views',
      'Custom heavy-duty rig with pull-up bars and Olympic rings',
      'Dual battle rope lanes, tire flips, and farmer-walk tracks',
      'Golden hour morning (6:30 AM) & sunset (6:00 PM) WOD batches'
    ],
    specs: [
      { label: 'Surface', value: 'High-Density Turf & Shock Rubber' },
      { label: 'Environment', value: 'Fresh Air & Skyline Views' },
      { label: 'Coaching', value: 'Certified CrossFit & Functional Specialists' }
    ]
  },
  {
    id: 'aesthetic-cardio',
    title: 'Aesthetic Cardio Deck',
    subtitle: 'High-Tech Endurance with Mood Ambient Lighting',
    tagline: 'Zero-Glare Glow · Commercial Grade · Heart Rate Sync',
    description: 'Step into an immersive cardio sanctuary designed to keep you in the zone. Featuring elite commercial treadmills with shock-absorption decks, stairmasters, assault bikes, and cross-trainers framed by sleek neon architectural accent lighting.',
    image: '/src/assets/images/cardio_aesthetic_1790950985600.jpg',
    highlights: [
      'Ergonomic shock-absorbing commercial running tracks',
      'Dedicated stairmasters for peak lower-body calorie incinerators',
      'Ambient lighting tuned to reduce eye strain and elevate focus',
      'Personal entertainment interfaces with real-time biometric metrics'
    ],
    specs: [
      { label: 'Equipment', value: 'Commercial Grade Tech Decks' },
      { label: 'Atmosphere', value: 'Aesthetic Neon Ambient Flow' },
      { label: 'Capacity', value: '25+ Simultaneous Cardio Stations' }
    ]
  },
  {
    id: 'strength-iron',
    title: 'Strength & Free Weights Iron Floor',
    subtitle: 'Precision Bio-Mechanical Resistance for Raw Power',
    tagline: 'Heavy Iron · Multi-Benches · Calibrated Plates',
    description: 'Built for everyone from beginners sculpting tone to seasoned lifters chasing PRs. Packed with pristine Olympic barbells, multi-grip power cages, precision selectorized cable machines, and dumbbells up to heavy professional poundage.',
    image: '/src/assets/images/strength_zone_1790951000453.jpg',
    highlights: [
      'Multiple squat cages with safety spotter arms and drop platforms',
      'Full dumbbell tree from 2.5 kg to 50 kg in duplicate pairs',
      'High-grade biomechanic selectorized plate-loaded machines',
      'Always spotless rubber flooring with strict rack etiquette'
    ],
    specs: [
      { label: 'Weights', value: '5,000+ kg Calibrated Iron & Urethane' },
      { label: 'Maintenance', value: 'Sanitized Hourly by Dedicated Crew' },
      { label: 'Support', value: 'Floor Spotting & Form Supervision' }
    ]
  },
  {
    id: 'yoga-zumba-studio',
    title: 'Dedicated Yoga & Zumba Studio',
    subtitle: 'High-Energy Dance Beats & Mindful Restorative Flow',
    tagline: 'Hardwood Floors · Surround Sound · Certified Leads',
    description: 'A vibrant enclosed studio tailored for rhythm and soul. Start your sunrise with centering Hatha & Vinyasa Yoga, and unleash your evening stress with our electrifying, music-pumped Zumba sessions guided by licensed choreographers.',
    image: '/src/assets/images/yoga_zumba_studio_1790951014905.jpg',
    highlights: [
      'Spring-cushioned wooden floor that protects knees and ankles',
      'Concert-grade acoustics with uplifting party playlists',
      'Full-length wall mirrors for posture and synchronization',
      'Morning serenity yoga and evening high-cardio Zumba daily'
    ],
    specs: [
      { label: 'Flooring', value: 'Impact-Absorbing Studio Timber' },
      { label: 'Instructors', value: 'ZIN™ Certified & Yoga Acharyas' },
      { label: 'Schedule', value: 'Morning & Evening Daily Batches' }
    ]
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'crossfit-wod',
    title: 'Rooftop CrossFit WOD',
    category: 'Functional Fitness',
    duration: '45 - 60 min',
    caloriesBurn: '500 - 800 kcal',
    intensity: 'High',
    description: 'High-intensity functional movements combining gymnastics, Olympic lifting, and metabolic conditioning in our breezy open-air rooftop.',
    targetAudience: 'Stamina, fat shred, athletic conditioning',
    trainer: 'Head CrossFit Coach'
  },
  {
    id: 'hypertrophy-strength',
    title: 'Strength & Body Sculpting',
    category: 'Strength & Iron',
    duration: '60 min',
    caloriesBurn: '350 - 550 kcal',
    intensity: 'High',
    description: 'Structured progressive overload training targeting lean muscle building, posture alignment, and metabolic rate elevation.',
    targetAudience: 'Muscle gain, bone density, body transformation',
    trainer: 'Certified Strength Specialist'
  },
  {
    id: 'bollywood-zumba',
    title: 'High-Energy Zumba Dance',
    category: 'Dance Cardio',
    duration: '50 min',
    caloriesBurn: '450 - 650 kcal',
    intensity: 'Medium',
    description: 'Ditch the workout and join the party! Explosive Latin, Bollywood, and EDM rhythms turn cardio into a celebration.',
    targetAudience: 'Cardio endurance, mood elevation, weight loss',
    trainer: 'Licensed ZIN™ Instructor'
  },
  {
    id: 'power-yoga',
    title: 'Power & Restorative Yoga',
    category: 'Mind & Flexibility',
    duration: '60 min',
    caloriesBurn: '250 - 400 kcal',
    intensity: 'Medium',
    description: 'Flowing asanas focused on core stability, hip mobility, spine decompression, and conscious breathwork to counteract desk strain.',
    targetAudience: 'Flexibility, joint health, mental clarity',
    trainer: 'Certified Yoga Acharya'
  },
  {
    id: 'personal-coaching',
    title: '1-on-1 Personal Training',
    category: 'Customized Protocol',
    duration: '60 min',
    caloriesBurn: '400 - 700 kcal',
    intensity: 'Elite',
    description: 'Dedicated trainer by your side for customized workout programming, weekly biometric tracking, and tailored nutrition guidelines.',
    targetAudience: 'Fast results, injury rehab, customized goals',
    trainer: 'Senior Master Coach'
  },
  {
    id: 'fat-loss-hiit',
    title: 'Metabolic HIIT & Core Burn',
    category: 'Metabolic Conditioning',
    duration: '40 min',
    caloriesBurn: '450 - 700 kcal',
    intensity: 'High',
    description: 'Short bursts of explosive intervals paired with quick recovery to trigger the post-exercise oxygen consumption (EPOC) calorie burn.',
    targetAudience: 'Fast fat loss, endurance, heart health',
    trainer: 'HIIT Conditioning Coach'
  }
];

export const SCHEDULE_DATA: ScheduleSlot[] = [
  // Mon-Wed-Fri
  { time: '06:00 AM – 07:00 AM', activity: 'Rooftop Sunrise CrossFit', zone: 'Rooftop Arena', trainer: 'Coach Rohit', day: 'Mon-Wed-Fri' },
  { time: '07:15 AM – 08:15 AM', activity: 'Power Vinyasa Yoga', zone: 'Studio A', trainer: 'Yogini Ananya', day: 'Mon-Wed-Fri' },
  { time: '08:30 AM – 09:30 AM', activity: 'Strength Fundamentals', zone: 'Iron Floor', trainer: 'Coach Vikram', day: 'Mon-Wed-Fri' },
  { time: '05:30 PM – 06:30 PM', activity: 'Cardio Blast & Core', zone: 'Cardio Deck', trainer: 'Coach Simran', day: 'Mon-Wed-Fri' },
  { time: '06:45 PM – 07:45 PM', activity: 'Rooftop Sunset CrossFit WOD', zone: 'Rooftop Arena', trainer: 'Coach Rohit', day: 'Mon-Wed-Fri' },
  { time: '08:00 PM – 09:00 PM', activity: 'High-Voltage Zumba Party', zone: 'Studio A', trainer: 'Pooja (ZIN™)', day: 'Mon-Wed-Fri' },

  // Tue-Thu-Sat
  { time: '06:00 AM – 07:00 AM', activity: 'Metabolic HIIT Conditioning', zone: 'Cardio Deck', trainer: 'Coach Simran', day: 'Tue-Thu-Sat' },
  { time: '07:15 AM – 08:15 AM', activity: 'Hypertrophy Upper Body', zone: 'Iron Floor', trainer: 'Coach Vikram', day: 'Tue-Thu-Sat' },
  { time: '08:30 AM – 09:30 AM', activity: 'Rooftop Kettlebell & Ropes', zone: 'Rooftop Arena', trainer: 'Coach Rohit', day: 'Tue-Thu-Sat' },
  { time: '05:30 PM – 06:30 PM', activity: 'Hatha Flow & Mobility', zone: 'Studio A', trainer: 'Yogini Ananya', day: 'Tue-Thu-Sat' },
  { time: '06:45 PM – 07:45 PM', activity: 'Bollywood Dance Fitness', zone: 'Studio A', trainer: 'Pooja (ZIN™)', day: 'Tue-Thu-Sat' },
  { time: '08:00 PM – 09:00 PM', activity: 'Rooftop Twilight Strength', zone: 'Rooftop Arena', trainer: 'Coach Vikram', day: 'Tue-Thu-Sat' },

  // Sunday
  { time: '07:30 AM – 09:00 AM', activity: 'Rooftop Community Hero WOD', zone: 'Rooftop Arena', trainer: 'Team Timeless', day: 'Sunday' },
  { time: '09:15 AM – 10:30 AM', activity: 'Restorative Stretch & Sound', zone: 'Studio A', trainer: 'Yogini Ananya', day: 'Sunday' },
  { time: '10:30 AM – 01:00 PM', activity: 'Open Gym & Technique Clinic', zone: 'All Floors', trainer: 'On-Duty Trainers', day: 'Sunday' },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Aakash Meena',
    role: 'Member since 2024 · Malviya Nagar',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The rooftop CrossFit area is hands down the best feature in Jaipur! Doing morning workouts with fresh cool air instead of stuffy AC rooms makes a world of difference. Trainers are very humble and genuinely guide your posture.',
    highlightTag: 'Rooftop CrossFit'
  },
  {
    id: 'rev-2',
    author: 'Priya Sharma',
    role: 'Member since 2023 · Jagatpura',
    rating: 5,
    date: '1 month ago',
    comment: 'As a woman beginner, I was hesitant about gym environments. Timeless Fitness is completely non-intimidating, respectful, and super clean. The Zumba classes are crazy fun and the cardio floor lighting looks like an international gym!',
    highlightTag: 'Safe & Clean Vibe'
  },
  {
    id: 'rev-3',
    author: 'Harshit Khandelwal',
    role: 'Powerlifter · Model Town',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Solid strength training equipment. Barbells are genuine, plates are in abundance, and you don’t have to wait around for equipment. 4.7 star rating is totally deserved. Definitely the top gym in Malviya Nagar.',
    highlightTag: 'Strength Equipment'
  },
  {
    id: 'rev-4',
    author: 'Dr. Neha Agarwal',
    role: 'Healthcare Professional · Jaipur',
    rating: 5,
    date: '2 months ago',
    comment: 'The trainers do not push unnecessary supplements or aggressive sales. They focus on form, stamina, and consistency. Very spacious with dedicated yoga & Zumba studio.',
    highlightTag: 'Knowledgeable Trainers'
  },
  {
    id: 'rev-5',
    author: 'Rahul Shekhawat',
    role: 'CrossFit Enthusiast · Jaipur',
    rating: 4.8,
    date: '1 month ago',
    comment: 'Sunset workouts on the rooftop are therapeutic after a long office day. Sled pushes and battle ropes with the cool evening breeze are unmatched. Highly recommend booking the trial pass!',
    highlightTag: 'Evening Vibe'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-monthly',
    name: 'Monthly Explorer',
    period: 'Per Month',
    price: '₹2,499',
    badge: 'Flexible',
    features: [
      'Full access to all Gym & Cardio floors',
      'Rooftop CrossFit area open access',
      'Free body composition & fitness assessment',
      'Locker room & hot shower facilities',
      'General trainer floor guidance'
    ]
  },
  {
    id: 'plan-quarterly',
    name: 'Quarterly Transformation',
    period: '3 Months',
    price: '₹6,499',
    originalPrice: '₹7,499',
    badge: 'Most Popular',
    popular: true,
    features: [
      'Everything in Monthly Explorer',
      'Unlimited Zumba & Power Yoga group batches',
      'Free customized diet & nutrition starter chart',
      '2 Guest trial passes for friends or family',
      '1 Complimentary 1-on-1 personal training intro',
      'Priority locker allotment'
    ]
  },
  {
    id: 'plan-annual',
    name: 'Annual Champion',
    period: '12 Months',
    price: '₹18,999',
    originalPrice: '₹29,999',
    badge: 'Maximum Value',
    features: [
      'All-inclusive 365-day VIP gym access',
      'Unlimited Rooftop CrossFit, Yoga & Zumba',
      'Monthly biometric scans & progress review',
      '4 Complimentary Personal Training sessions',
      'Official Timeless Fitness gym kit & shaker',
      'Up to 30 days membership freeze flexibility'
    ]
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'How do I avail the Free Trial Pass at Timeless Fitness?',
    answer: 'You can submit the Free Trial form on this page with your name and preferred timing, or ping us directly on WhatsApp (+91 79765 90461). We will instantly issue your pass and schedule your complimentary guided session.',
    category: 'Trial & Joining'
  },
  {
    question: 'What makes your Rooftop CrossFit area unique in Jaipur?',
    answer: 'Unlike basement or sealed air-conditioned gyms, our open-air rooftop provides 360-degree natural breeze, skyline views, heavy-duty outdoor rigs, turf sled tracks, and battle ropes. It is designed for maximum ventilation and an electric athletic community experience.',
    category: 'Facilities'
  },
  {
    question: 'Is Timeless Fitness beginner-friendly and comfortable for women?',
    answer: 'Absolutely. We take pride in cultivating a non-intimidating, clean, and respectful environment. Our certified trainers supervise your form from day one without awkwardness, and we have dedicated studios for women-centric group sessions like Zumba and Yoga.',
    category: 'Environment'
  },
  {
    question: 'What are the operating hours of the gym?',
    answer: 'We are open Monday through Saturday from 5:30 AM to 10:30 PM continuously, allowing you to train before work, during lunch, or late evening. On Sundays, we operate from 7:00 AM to 1:00 PM for recovery sessions and open training.',
    category: 'Timings'
  },
  {
    question: 'Where exactly are you located in Jaipur?',
    answer: 'We are conveniently located at RRVH+WF4, 5, Jagatpura Rd, Model Town - B, Krishna Puri, Model Town, Malviya Nagar, Jaipur, Rajasthan 302017. Easily accessible with ample two-wheeler and four-wheeler parking.',
    category: 'Location'
  },
  {
    question: 'Are group classes (Zumba, Yoga, CrossFit) included in the membership?',
    answer: 'Yes! Our quarterly and annual memberships include access to all daily scheduled group classes including Rooftop CrossFit WODs, Zumba dance fitness, and Power Yoga without extra per-session charges.',
    category: 'Classes'
  }
];
