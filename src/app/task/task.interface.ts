import { TaskStatus } from './task-status.enum';

export interface Task {
  name: string;
  status: TaskStatus;
}
