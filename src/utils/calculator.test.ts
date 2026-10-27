import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateFeeBreakdown,
  evaluateEligibility,
  validateLeadForm,
  BASE_PROGRAMME_FEE,
  GST_RATE,
} from './calculator';

test('calculateFeeBreakdown returns correct base, 18% GST and 4 installments matching 150000', () => {
  const breakdown = calculateFeeBreakdown(BASE_PROGRAMME_FEE);
  assert.equal(breakdown.baseFee, 150000);
  assert.equal(breakdown.gstAmount, 27000);
  assert.equal(breakdown.totalWithGst, 177000);

  // Check 4 stages sum
  const totalBaseInstallments = breakdown.installments.reduce((acc, curr) => acc + curr.baseAmount, 0);
  assert.equal(totalBaseInstallments, 150000);

  // Check 12-month zero-cost EMI base
  const emi12 = breakdown.emiOptions.find((e) => e.months === 12);
  assert.ok(emi12);
  assert.equal(emi12.monthlyBase, 12500);
});

test('evaluateEligibility marks candidate without degree or <10 years as ineligible', () => {
  const res1 = evaluateEligibility({
    experienceBand: '<10',
    hasDegree: true,
    domain: 'hr',
  });
  assert.equal(res1.isEligible, false);

  const res2 = evaluateEligibility({
    experienceBand: '10-15',
    hasDegree: false,
    domain: 'hr',
  });
  assert.equal(res2.isEligible, false);
});

test('evaluateEligibility grants Premier Candidate tier for senior HR leaders with 20+ years', () => {
  const res = evaluateEligibility({
    experienceBand: '20+',
    hasDegree: true,
    domain: 'hr',
    currentRoleLevel: 'c_suite',
  });
  assert.equal(res.isEligible, true);
  assert.equal(res.tier, 'Premier Candidate');
  assert.ok(res.score >= 90);
});

test('validateLeadForm correctly catches empty or malformed fields', () => {
  const invalid = validateLeadForm({
    workExp: '',
    fullName: 'J',
    workEmail: 'notanemail',
    mobileNo: '123',
    designation: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.workExp);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.workEmail);
  assert.ok(invalid.errors.mobileNo);
  assert.ok(invalid.errors.designation);

  const valid = validateLeadForm({
    workExp: '15-20',
    fullName: 'Rajesh Sharma',
    workEmail: 'rajesh.sharma@enterprise.com',
    mobileNo: '+91 98765 43210',
    designation: 'VP - Human Resources, Global Corp',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
