export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2014—2019",
    institution: "Indian Institute of Technology Madras",
    degree: "Ph.D. in Computational Geometry",
    advisor: "Prof. M Ramanathan",
  },
  {
    year: "2010—2012",
    institution: "National Institute of Technology Hamirpur",
    degree: "M.Tech. in Computer Science and Engineering",
  },
  {
    year: "2006—2010",
    institution: "Cochin University of Science and Technology",
    degree: "B.Tech. in Computer Science and Engineering",
  },
];
