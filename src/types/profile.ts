export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Availability {
  available: boolean;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  experience: string;
  tagline: string;
  location: string;
  availability: Availability;
  contact: ContactInfo;
}
