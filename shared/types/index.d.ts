export interface Challenge {
  title: string;
  link: string;
  difficulty: string;
  developer?: string;
  contributors?: string[];
  tags?: string[];
  isNew?: boolean;
}

export interface Contributor {
  name: string;
  pic: string;
}
