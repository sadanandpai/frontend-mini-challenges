export interface IChallenge {
  title: string;
  link: string;
  difficulty: 'easy' | 'medium' | 'hard';
  developer?: string;
  contributors?: string[];
  youtube?: string;
  tags?: string[];
  isNew?: boolean;
}
