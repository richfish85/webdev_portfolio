// src/lib/contacts.ts
export type Contacts = {
  emailAddress: string;
  socialMedia1: string;
    socialMedia2: string;
  website: string;   // external live demo (may be "#")
    github: string;    // external repo (may be "#")
};

export const contacts: Contacts[] = [
  {
    emailAddress: "richfish85@gmail.com",
    socialMedia1: "https://x.com/richfish85",
    socialMedia2: "https://www.linkedin.com/in/richard-fisher-824439177/",
    website: "dev.deepnet.com.au",
    github: "https://github.com/richfish85",
  },
];

