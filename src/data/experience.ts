export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep 2023 to Present",
    title: "Senior Researcher",
    company: "Dolby Laboratories",
  },
  {
    date: "Feb 2020 to Sep 2023",
    title: "Chief Engineer",
    company: "Samsung Electronics",
  },
];
