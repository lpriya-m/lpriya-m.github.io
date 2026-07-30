export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "International Conference on Smart Multimedia",
    title: "Neural fields for multimedia applications (Part-1): trends in audio, images and videos",
    authors: "Ujjal Kr Dutta, Anustup Choudhury, Lakshmi Priya Muraleedharan, Jian Liu, Guan-Ming Su",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-82475-3_19",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2024",
    conference: "International Conference on Smart Multimedia",
    title: "Neural fields for multimedia applications (Part-2): trends in volumetric videos and 3d objects",
    authors: "Lakshmi Priya Muraleedharan, Jian Liu, Ujjal Kr Dutta, Anustup Choudhury, Guan-Ming Su",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-82475-3_20",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2022",
    conference: "SIGGRAPH Asia Posters",
    title: "Automatic Deformation-based animation of 3D mesh",
    authors: "Lakshmi Priya Muraleedharan, Vikas Kantha Gowda, Basavaraja Shanthappa Vandrotti",
    paperUrl: "https://dl.acm.org/doi/abs/10.1145/3550082.3564184",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2022",
    conference: "Computer Graphics International",
    title: "LiteAR: A Framework to Estimate Lighting for Mixed Reality Sessions for Enhanced Realism",
    authors: "Chinmay Raut, Anamitra Mani, Lakshmi Priya Muraleedharan, Raghavan Velappan",
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-031-23473-6_32",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2019",
    conference: "CAD/Graphics",
    journal: "Computers & Graphics",
    title: "Autoencoder-based part clustering for part-in-whole retrieval of CAD models",
    authors: "Lakshmi Priya Muraleedharan, Shyam Sundar Kannan, Ramanathan Muthuganapathy",
    paperUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0097849319300391",
    //codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2017",
    conference: "CAD/Graphics",
    journal: "Computers & Graphics",
    title: "Random cutting plane approach for identifying volumetric features in a CAD mesh model",
    authors: "Lakshmi Priya Muraleedharan, Shyam Sundar Kannan, Ameya Karve, Ramanathan Muthuganapathy",
    paperUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0097849317301188",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    //tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    //imageUrl:
      //"https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
