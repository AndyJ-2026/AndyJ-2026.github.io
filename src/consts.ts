import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Andy J",
  DESCRIPTION: "Welcome to Andy J's portfolio and blog.",
  AUTHOR: "Andy J",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Gallery",
    HREF: "/gallery",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "ysf63453@gmail.com",
    HREF: "mailto:ysf63453@gmail.com",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@ByteNeko2025",
    HREF: "https://twitter.com/ByteNeko2025",
  },
  {
    NAME: "WeChat",
    ICON: "github",
    TEXT: "nbrj2004",
    HREF: "#",
  },
]

