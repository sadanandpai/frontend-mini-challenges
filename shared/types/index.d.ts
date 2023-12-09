export interface Challenge {
  title: string;

  /* Set the link to `null` if the solution is not available. */
  link: string | null;

  difficulty: 'easy' | 'medium' | 'hard';
  developer?: string;
  contributors?: string[];
  youtube?: string;
  tags?: string[];
  isNew?: boolean;
}

export interface Contributor {
  name: string;
  pic: string;
}
