export interface IChallenge {
  title: string;
  link: string | null;
  difficulty: 'easy' | 'medium' | 'hard';
  developer?: string;
  contributors?: string[];
  youtube?: string;
  tags?: string[];
  isNew?: boolean;
}
