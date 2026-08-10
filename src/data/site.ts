export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  pi: string;
  institution: string;
  university: string;
  url: string;
  description: string;
  email: string;
  phone: string;
  address: string[];
  mapQuery: string;
  social: {
    scholar?: string;
    twitter?: string;
    github?: string;
  };
  nav: NavItem[];
}

export const site: SiteConfig = {
  name: "Smart Interface IC and Systems Laboratory",
  shortName: "SICSL @ YONSEI",
  pi: "Woojun Choi, Ph.D.",
  institution: "Department of Integrated Display Engineering",
  university: "Yonsei University",
  url: "https://sicsl-yonsei.github.io",
  description:
    "We design high-performance analog and mixed-signal CMOS circuits for next-generation display IC systems, energy-efficient sensor interfaces, data converters, miniaturized sensor platforms, and intelligent biomedical systems.",
  email: "wjchoi11@yonsei.ac.kr",
  phone: "+82-2-2123-5829",
  address: [
    "Smart Interface IC and Systems Laboratory",
    "Department of Integrated Display Engineering, Yonsei University",
    "Room 150B-3, Engineering Research Park",
    "50 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea",
  ],
  mapQuery: "Yonsei University Engineering Research Park, Seoul, Korea",
  social: {
    scholar: "https://scholar.google.com/citations?hl=en&user=jbET1VMAAAAJ&view_op=list_works&sortby=pubdate",
  },
  nav: [
    { label: "People", href: "/people" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Invited Talks", href: "/invited-talks" },
    { label: "Teaching", href: "/teaching" },
    { label: "Contact", href: "/contact" },
  ],
};
