import { Component, input, output } from '@angular/core';
import { Task } from './task.interface';
import { TaskStatus } from './task-status.enum';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  taskStatusChangedEvent = output<Task>();

  changeStatus(status: string) {
    this.taskStatusChangedEvent.emit({
      ...this.task(),
      status: status as TaskStatus,
    });
  }
}
