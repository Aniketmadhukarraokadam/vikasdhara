import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Application, ApplicationStatus, ApplicationPriority, ApplicationType } from "@/types/admin";

interface ApplicationsContextType {
  applications: Application[];
  addApplication: (app: Omit<Application, "id" | "createdAt" | "updatedAt" | "notes">) => Application;
  updateStatus: (id: string, status: ApplicationStatus) => void;
  updatePriority: (id: string, priority: ApplicationPriority) => void;
  assignTo: (id: string, person: string) => void;
  addNote: (id: string, author: string, text: string) => void;
  deleteApplication: (id: string) => void;
  resetToSampleData: () => void;
  exportCSV: () => void;
}

const STORAGE_KEY = "vvf_ats_applications_v1";

const initialSampleApplications: Application[] = [
  {
    id: "APP-2026-001",
    type: "csr_partner",
    name: "Vikram Malhotra",
    email: "v.malhotra@techcorp-pune.com",
    mobile: "+91 98230 11223",
    organization: "TechCorp Solutions India (Hinjewadi Phase 2, Pune)",
    location: "pune",
    subject: "CSR Project: Digital Skilling Centre for Slum Youth in Pune",
    message: "We have an approved CSR budget under Schedule VII for youth digital education and vocational skill development in Pune. Looking to establish a 40-seat computer training lab with Vikasdhara Foundation.",
    status: "in_review",
    priority: "high",
    assignedTo: "Pune CSR Coordinator",
    notes: [
      {
        id: "note-1",
        author: "Anirudh Kadam",
        text: "Initial exploratory call scheduled for Thursday at Hinjewadi liaison centre.",
        createdAt: "2026-09-11 11:30 AM"
      }
    ],
    createdAt: "2026-09-10 09:15 AM",
    updatedAt: "2026-09-11 11:30 AM",
  },
  {
    id: "APP-2026-002",
    type: "volunteer",
    name: "Pooja Deshmukh",
    email: "pooja.deshmukh@gmail.com",
    mobile: "+91 97654 44321",
    organization: "COEP Technological University, Pune",
    location: "pune",
    subject: "Weekend Volunteer for Women's Tech Mentorship",
    message: "Final-year Computer Engineering student at COEP. Eager to volunteer 6 hours every weekend to teach Python basics and web literacy to women self-help groups in Pune.",
    status: "shortlisted",
    priority: "medium",
    assignedTo: "Volunteer Coordinator (Pune)",
    notes: [
      {
        id: "note-2",
        author: "Sumit Jadhav",
        text: "Profile verified. Excellent background for Python bootcamp mentoring.",
        createdAt: "2026-09-12 02:45 PM"
      }
    ],
    createdAt: "2026-09-11 04:20 PM",
    updatedAt: "2026-09-12 02:45 PM",
  },
  {
    id: "APP-2026-003",
    type: "beneficiary_skilling",
    name: "Ganesh Pandurang Shinde",
    email: "ganesh.shinde98@gmail.com",
    mobile: "+91 94221 88765",
    organization: "Youth Aspirant",
    location: "nanded",
    subject: "Enrollment in Solar Technician & Electrical Vocational Batch",
    message: "Seeking admission into the upcoming 3-month certified vocational course in solar grid installation at the Dharmabad rural training campus.",
    status: "approved",
    priority: "medium",
    assignedTo: "Dharmabad Training Lead",
    notes: [
      {
        id: "note-3",
        author: "Dnyaneshvar Ballod",
        text: "Eligibility verified under rural youth employment quota. Orientation pack dispatched.",
        createdAt: "2026-09-12 05:00 PM"
      }
    ],
    createdAt: "2026-09-09 10:00 AM",
    updatedAt: "2026-09-12 05:00 PM",
  },
  {
    id: "APP-2026-004",
    type: "contact",
    name: "Dr. Sunita Kulkarni",
    email: "dr.skulkarni@healthcare-maharashtra.org",
    mobile: "+91 99220 33445",
    organization: "Maharashtra Rural Health Mission",
    location: "general",
    subject: "Preventive Healthcare & Eye Checkup Camp Collaboration",
    message: "We would like to organize free diabetes and vision screening camps in 8 villages around Dharmabad, Nanded with volunteer and logistical support from Vikasdhara Foundation.",
    status: "in_progress",
    priority: "high",
    assignedTo: "Health Camp Coordinator",
    notes: [
      {
        id: "note-4",
        author: "Anirudh Kadam",
        text: "Gram Panchayat permissions aligned. Proposed date: Oct 15-18.",
        createdAt: "2026-09-13 10:15 AM"
      }
    ],
    createdAt: "2026-09-12 11:30 AM",
    updatedAt: "2026-09-13 10:15 AM",
  },
  {
    id: "APP-2026-005",
    type: "gaushala_support",
    name: "Rameshwar Patil",
    email: "patil.rameshwar@agri-pune.in",
    mobile: "+91 98501 77662",
    organization: "Patil Organic Farms",
    location: "nanded",
    subject: "Feed & Fodder Contribution for Gau Shala",
    message: "Interested in contributing 15 tons of green fodder and organic feed supplies for the indigenous cattle care center in Marathwada.",
    status: "new",
    priority: "low",
    assignedTo: "Gau Seva Team",
    notes: [],
    createdAt: "2026-09-13 01:20 PM",
    updatedAt: "2026-09-13 01:20 PM",
  }
];

const ApplicationsContext = createContext<ApplicationsContextType | undefined>(undefined);

export function ApplicationsProvider({ children }: { children: ReactNode }) {
  const [applications, setApplications] = useState<Application[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Error reading applications from localStorage", e);
    }
    return initialSampleApplications;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    } catch (e) {
      console.error("Error saving applications to localStorage", e);
    }
  }, [applications]);

  const addApplication = (appData: Omit<Application, "id" | "createdAt" | "updatedAt" | "notes">) => {
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });
    const newId = `APP-2026-${String(applications.length + 1).padStart(3, "0")}`;
    const newApp: Application = {
      ...appData,
      id: newId,
      status: appData.status || "new",
      priority: appData.priority || "medium",
      notes: [],
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    setApplications(prev => [newApp, ...prev]);
    return newApp;
  };

  const updateStatus = (id: string, status: ApplicationStatus) => {
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, status, updatedAt: timestamp } : app))
    );
  };

  const updatePriority = (id: string, priority: ApplicationPriority) => {
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, priority, updatedAt: timestamp } : app))
    );
  };

  const assignTo = (id: string, person: string) => {
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, assignedTo: person, updatedAt: timestamp } : app))
    );
  };

  const addNote = (id: string, author: string, text: string) => {
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short"
    });
    const newNote = {
      id: `note-${Date.now()}`,
      author,
      text,
      createdAt: timestamp
    };

    setApplications(prev =>
      prev.map(app =>
        app.id === id
          ? {
              ...app,
              notes: [newNote, ...app.notes],
              updatedAt: timestamp
            }
          : app
      )
    );
  };

  const deleteApplication = (id: string) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  };

  const resetToSampleData = () => {
    setApplications(initialSampleApplications);
  };

  const exportCSV = () => {
    const headers = ["Application ID", "Type", "Name", "Email", "Mobile", "Organization", "Location", "Subject", "Status", "Priority", "Assigned To", "Created At"];
    const rows = applications.map(a => [
      `"${a.id}"`,
      `"${a.type}"`,
      `"${a.name.replace(/"/g, '""')}"`,
      `"${a.email}"`,
      `"${a.mobile}"`,
      `"${(a.organization || "").replace(/"/g, '""')}"`,
      `"${a.location}"`,
      `"${(a.subject || "").replace(/"/g, '""')}"`,
      `"${a.status}"`,
      `"${a.priority}"`,
      `"${a.assignedTo || "Unassigned"}"`,
      `"${a.createdAt}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Vikasdhara_Applications_Export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <ApplicationsContext.Provider
      value={{
        applications,
        addApplication,
        updateStatus,
        updatePriority,
        assignTo,
        addNote,
        deleteApplication,
        resetToSampleData,
        exportCSV,
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
}

export function useApplications() {
  const context = useContext(ApplicationsContext);
  if (!context) {
    throw new Error("useApplications must be used within an ApplicationsProvider");
  }
  return context;
}
