export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Lakshmi Priya Muraleedharan",
  title: "Senior Researcher",
  institution: "Dolby Laboratories",
  // Note that links work in the description
  description:
    "I’ve always been drawn to the creative side of technology, especially where graphics, perception, and interaction meet. After completing my PhD in 3D Computer Graphics at IIT Madras, I moved into industry research to work on problems that combine mathematical beauty with user-centered design.<br> I’ve contributed to 3D graphics research, patents, XR prototypes, and engineering solutions that support real-time rendering and visual computing workflows. What motivates me is building tools that make visual creation easier, faster, and more expressive. I value thoughtful execution, collaboration, and learning environments where ideas grow collectively.",
  imageUrl:"/lakshmi.jpg",
  email: "lakshmipriya369@gmail.com",
  googleScholarUrl: "https://scholar.google.com/citations?user=WB628xAAAAAJ",
  githubUsername: "lpriya-m",
  linkedinUsername: "lakshmipriyam",
  cvUrl: "https://lpriya-m.github.io/cv/cv.pdf",
  secretDescription: "Outside of work, I enjoy reading, exploring new destinations and Indian classical dance" 
};
