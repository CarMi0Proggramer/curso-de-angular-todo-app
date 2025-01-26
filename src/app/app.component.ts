import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.interface';
import { TaskStatus } from './task/task-status.enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks: Task[] = [
    {
      name: 'Mi primer tarea',
      description: 'Esta va a ser mi primer tarea',
      status: TaskStatus.PENDING,
    },
    {
      name: 'Mi segunda tarea',
      description: 'Esta va a ser mi segunda tarea',
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  onTaskStatusChanged(task: Task) {
    const index = this.tasks.findIndex((t) => t.name === task.name);

    if (index !== -1) {
      this.tasks[index] = task;
    }
  }
}
