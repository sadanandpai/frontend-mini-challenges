export interface Meeting {
  id: number;
  title: string;
  start: string;
  end: string;
  column: number;
  totalConflicts: number;
  modified?: boolean;
}
