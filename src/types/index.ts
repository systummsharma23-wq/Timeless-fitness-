export interface FacilityZone {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  caloriesBurn: string;
  intensity: 'Medium' | 'High' | 'Elite';
  description: string;
  targetAudience: string;
  trainer: string;
}

export interface ScheduleSlot {
  time: string;
  activity: string;
  zone: string;
  trainer: string;
  day: 'Mon-Wed-Fri' | 'Tue-Thu-Sat' | 'Sunday';
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  highlightTag: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  period: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
