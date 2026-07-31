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
    thesis: "Segmentation and Feature Extraction of CAD Mesh models and their Applications",
    thesisUrl: "https://lpriya-m.github.io/thesis_phd/thesis_f2.pdf"
  },
  {
    year: "2010—2012",
    institution: "National Institute of Technology Hamirpur",
    degree: "M.Tech. in Computer Science and Engineering",
    //thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2006—2010",
    institution: "Cochin University of Science and Technology",
    degree: "B.Tech. in Computer Science and Engineering",
    //thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
