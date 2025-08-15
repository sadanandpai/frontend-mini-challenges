export interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}
