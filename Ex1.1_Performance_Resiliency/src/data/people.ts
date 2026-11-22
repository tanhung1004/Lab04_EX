
import type { Person } from "../types/person";

export const people: Person[] = [
  {
    id: "p01",
    name: "Nguyen Tan Hung",
    role: "Frontend Developer",
    department: "Engineering",
    email: "hung@example.com",
    location: "Ho Chi Minh City",
    bio: "Builds accessible React interfaces with TypeScript.",
    skills: ["React", "TypeScript", "Accessibility"],
  },
  {
    id: "p02",
    name: "Tran Minh Anh",
    role: "UI/UX Designer",
    department: "Product Design",
    email: "anh@example.com",
    location: "Da Nang",
    bio: "Designs responsive interfaces and design systems.",
    skills: ["Figma", "CSS Grid", "Design Systems"],
  },
  {
    id: "p03",
    name: "Le Quoc Bao",
    role: "Backend Developer",
    department: "Engineering",
    email: "bao@example.com",
    location: "Ha Noi",
    bio: "Develops APIs, databases, and server-side services.",
    skills: ["Node.js", "PostgreSQL", "REST API"],
  },
  {
    id: "p04",
    name: "Pham Thu Ha",
    role: "QA Engineer",
    department: "Quality Assurance",
    email: "ha@example.com",
    location: "Ho Chi Minh City",
    bio: "Tests applications and helps teams ship with confidence.",
    skills: ["Testing", "Playwright", "Automation"],
  },
];
