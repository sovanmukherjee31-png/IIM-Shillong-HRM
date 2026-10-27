export interface ModuleData {
  id: string;
  badge: string;
  title: string;
  description: string;
  capstoneDeliverable: string;
  competencies: Array<{
    title: string;
    description: string;
  }>;
  harvardCases?: string[];
  toolsCovered?: string[];
  hours: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  credentials: string;
  role: string;
  shortBio: string;
  fullBio: string;
  imageUrl: string;
  focusAreas: string[];
}

export interface CampusFacility {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Credentials' | 'Admissions' | 'Fees';
}

export interface LeadSubmission {
  fullName: string;
  workEmail: string;
  mobileNo: string;
  workExp: string;
  designation: string;
  submissionDate: string;
}

export type ActiveScreen = 'home' | 'curriculum-deepdive' | 'eligibility-calculator' | 'campus-residency';
