export interface Portfolio {
  title: string;
  description: string;
  codeUrl: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Method and an electronic device for contextual based enhancement of extended reality scene",
    description: "US20250086906A1",
    codeUrl: "https://patents.google.com/patent/US20250086906A1/en",
  },
  {
    title: "Voxel occupancy based object placement in extended reality xr environment",
    description: "US20250086879A1",
    codeUrl: "https://patents.google.com/patent/US20250086879A1/en",
  },
];
