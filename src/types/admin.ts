export type ApplicationType =
  | "volunteer"
  | "csr_partner"
  | "contact"
  | "beneficiary_skilling"
  | "gaushala_support";

export type ApplicationStatus =
  | "new"
  | "in_review"
  | "shortlisted"
  | "interviewed"
  | "approved"
  | "in_progress"
  | "rejected"
  | "completed";

export type ApplicationPriority = "low" | "medium" | "high" | "urgent";

export interface ApplicationNote {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

export interface Application {
  id: string;
  type: ApplicationType;
  name: string;
  email: string;
  mobile: string;
  organization?: string;
  location: "pune" | "nanded" | "general" | string;
  subject?: string;
  message: string;
  status: ApplicationStatus;
  priority: ApplicationPriority;
  assignedTo?: string;
  notes: ApplicationNote[];
  createdAt: string;
  updatedAt: string;
  customData?: Record<string, string | number | boolean>;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "superadmin" | "trustee" | "coordinator";
  hub: "Pune" | "Nanded" | "All";
}
