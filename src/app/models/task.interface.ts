export enum LEVELS {
  'INFO',
  'URGENT',
  'BLOCKING'
}

export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  level: LEVELS
}
