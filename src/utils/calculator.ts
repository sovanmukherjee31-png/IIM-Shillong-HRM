/**
 * Executive Programme Fee & Eligibility Calculations
 * Conforms to IIM Shillong & SHRM India Executive PGC-HRM specifications
 */

export interface FeeBreakdown {
  baseFee: number;
  gstRate: number;
  gstAmount: number;
  totalWithGst: number;
  installments: Array<{
    stage: number;
    title: string;
    dueTime: string;
    baseAmount: number;
    gstAmount: number;
    totalAmount: number;
  }>;
  emiOptions: Array<{
    months: number;
    monthlyBase: number;
    monthlyTotal: number;
    zeroCostInterest: boolean;
  }>;
}

export const BASE_PROGRAMME_FEE = 150000;
export const GST_RATE = 0.18;
export const APPLICATION_FEE = 2500;
export const ALUMNI_STATUS_FEE = 10000;

export function calculateFeeBreakdown(baseFee: number = BASE_PROGRAMME_FEE): FeeBreakdown {
  const gstAmount = Math.round(baseFee * GST_RATE);
  const totalWithGst = baseFee + gstAmount;

  // 4 Installment stages: 40k, 40k, 35k, 35k
  const installmentBases = [
    { stage: 1, title: 'Instalment 1', dueTime: 'On Selection / Acceptance', baseAmount: 40000 },
    { stage: 2, title: 'Instalment 2', dueTime: 'Month 3 (Quarter 1 Completion)', baseAmount: 40000 },
    { stage: 3, title: 'Instalment 3', dueTime: 'Month 6 (Mid-Term Evaluation)', baseAmount: 35000 },
    { stage: 4, title: 'Instalment 4', dueTime: 'Month 9 (Pre-Capstone Defense)', baseAmount: 35000 },
  ];

  const installments = installmentBases.map((item) => {
    const stageGst = Math.round(item.baseAmount * GST_RATE);
    return {
      ...item,
      gstAmount: stageGst,
      totalAmount: item.baseAmount + stageGst,
    };
  });

  const emiTenures = [6, 9, 12];
  const emiOptions = emiTenures.map((months) => {
    const monthlyBase = Math.round(baseFee / months);
    const monthlyTotal = Math.round(totalWithGst / months);
    return {
      months,
      monthlyBase,
      monthlyTotal,
      zeroCostInterest: true,
    };
  });

  return {
    baseFee,
    gstRate: GST_RATE,
    gstAmount,
    totalWithGst,
    installments,
    emiOptions,
  };
}

export interface EligibilityInput {
  experienceBand: '10-15' | '15-20' | '20+' | '<10';
  hasDegree: boolean;
  domain: 'hr' | 'talent' | 'ld' | 'business_leader' | 'consultant' | 'other';
  currentRoleLevel?: 'mid' | 'senior' | 'director_vp' | 'c_suite';
}

export interface EligibilityResult {
  isEligible: boolean;
  score: number; // 0 to 100
  tier: 'Premier Candidate' | 'Executive Fast-Track' | 'Standard Admissions Review' | 'Not Eligible';
  readinessSummary: string;
  recommendedPathway: string;
}

export function evaluateEligibility(input: EligibilityInput): EligibilityResult {
  if (!input.hasDegree || input.experienceBand === '<10') {
    return {
      isEligible: false,
      score: 30,
      tier: 'Not Eligible',
      readinessSummary: 'Programme requires a recognized Bachelor’s Degree and a minimum of 10+ years of professional leadership experience.',
      recommendedPathway: 'Consider mid-career general management executive programmes prior to Cohort 08 application.',
    };
  }

  let score = 70;

  // Experience Band weighting
  if (input.experienceBand === '20+') {
    score += 15;
  } else if (input.experienceBand === '15-20') {
    score += 12;
  } else if (input.experienceBand === '10-15') {
    score += 8;
  }

  // Domain weighting
  if (['hr', 'talent', 'ld'].includes(input.domain)) {
    score += 10;
  } else if (['business_leader', 'consultant'].includes(input.domain)) {
    score += 8;
  } else {
    score += 4;
  }

  // Role Level weighting
  if (input.currentRoleLevel === 'c_suite') {
    score += 5;
  } else if (input.currentRoleLevel === 'director_vp') {
    score += 4;
  }

  let tier: EligibilityResult['tier'] = 'Standard Admissions Review';
  let summary = 'Strong profile meeting baseline admissions criteria for Cohort 07 screening.';
  let pathway = 'General Executive Cohort with Capstone Defense in strategic workforce planning.';

  if (score >= 90) {
    tier = 'Premier Candidate';
    summary = 'Exceptional leadership tenure and executive alignment. Highly prioritized for interview and corporate sponsorship fast-track.';
    pathway = 'Boardroom People Strategy & AI Workforce Transformation track with faculty mentoring.';
  } else if (score >= 80) {
    tier = 'Executive Fast-Track';
    summary = 'Outstanding background with ideal mid-to-senior HR leadership trajectory. Immediate eligibility for Cohort 07 selection.';
    pathway = 'Strategic HRBP Advisory & Executive Total Rewards specialization.';
  }

  return {
    isEligible: true,
    score: Math.min(score, 100),
    tier,
    readinessSummary: summary,
    recommendedPathway: pathway,
  };
}

export function validateLeadForm(formData: {
  workExp: string;
  fullName: string;
  workEmail: string;
  mobileNo: string;
  designation: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!formData.workExp || !['10-15', '15-20', '20+'].includes(formData.workExp)) {
    errors.workExp = 'Please select a valid experience band (10–15, 15–20, or 20+ years).';
  }

  if (!formData.fullName || formData.fullName.trim().length < 3) {
    errors.fullName = 'Full name must contain at least 3 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.workEmail || !emailRegex.test(formData.workEmail)) {
    errors.workEmail = 'Please provide a valid official work email address.';
  }

  // Mobile clean
  const cleanMobile = formData.mobileNo.replace(/[^0-9]/g, '');
  if (cleanMobile.length < 10) {
    errors.mobileNo = 'Please provide a valid 10-digit mobile number.';
  }

  if (!formData.designation || formData.designation.trim().length < 3) {
    errors.designation = 'Current designation & organization is required.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
