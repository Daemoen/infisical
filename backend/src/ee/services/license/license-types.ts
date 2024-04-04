import { TOrgPermission } from "@app/lib/types";

export enum InstanceType {
  OnPrem = "self-hosted",
  EnterpriseOnPrem = "enterprise-self-hosted",
  Cloud = "cloud"
}

export type TOfflineLicenseContents = {
  license: TOfflineLicense;
  signature: string;
};

export type TOfflineLicense = {
  issuedTo: string;
  licenseId: string;
  customerId: string | null;
  issuedAt: string;
  expiresAt: string | null;
  terminatesAt: string | null;
  features: TFeatureSet;
};

export type TFeatureSet = {
  _id: null;
  slug: null;
  tier: -1;
  workspaceLimit: null;
  workspacesUsed: 0;
  dynamicSecret: false;
  memberLimit: null;
  membersUsed: 0;
  environmentLimit: null;
  environmentsUsed: 0;
  secretVersioning: true;
  pitRecovery: false;
  ipAllowlisting: false;
  rbac: true;
  customRateLimits: false;
  customAlerts: false;
  auditLogs: false;
  auditLogsRetentionDays: 0;
  samlSSO: true;
  scim: true;
  ldap: false;
  groups: true;
  status: null;
  trial_end: null;
  has_used_trial: true;
  secretApproval: false;
  secretRotation: true;
};

export type TOrgPlansTableDTO = {
  billingCycle: string;
} & TOrgPermission;

export type TOrgPlanDTO = {
  projectId?: string;
} & TOrgPermission;

export type TStartOrgTrialDTO = {
  success_url: string;
} & TOrgPermission;

export type TCreateOrgPortalSession = TOrgPermission;

export type TGetOrgBillInfoDTO = TOrgPermission;

export type TOrgPlanTableDTO = TOrgPermission;

export type TOrgBillingDetailsDTO = TOrgPermission;

export type TUpdateOrgBillingDetailsDTO = TOrgPermission & {
  name?: string;
  email?: string;
};

export type TOrgPmtMethodsDTO = TOrgPermission;

export type TAddOrgPmtMethodDTO = TOrgPermission & { success_url: string; cancel_url: string };

export type TDelOrgPmtMethodDTO = TOrgPermission & { pmtMethodId: string };

export type TGetOrgTaxIdDTO = TOrgPermission;

export type TAddOrgTaxIdDTO = TOrgPermission & { type: string; value: string };

export type TDelOrgTaxIdDTO = TOrgPermission & { taxId: string };

export type TOrgInvoiceDTO = TOrgPermission;

export type TOrgLicensesDTO = TOrgPermission;
