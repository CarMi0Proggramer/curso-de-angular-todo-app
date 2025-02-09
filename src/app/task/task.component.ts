import { Component, inject, input, output } from '@angular/core';
import { Task } from './task.interface';
import { TaskStatus } from './task-status.enum';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private readonly taskService = inject(TaskService);
  task = input.required<Task>();
  taskStatusChangedEvent = output<Task>();
  taskMarkedForDeleteEvent = output<Task>();

  changeStatus(status: string) {
    this.taskService
      .update(this.task().id, {
        status: status as TaskStatus,
      })
      .subscribe((task) => {
        this.taskStatusChangedEvent.emit(task);
      });
  }

  delete() {
    this.taskMarkedForDeleteEvent.emit(this.task());
  }
}
