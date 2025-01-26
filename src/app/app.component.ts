import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.interface';
import { TaskStatus } from './task/task-status.enum';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly taskService = inject(TaskService);
  tasks: Task[] = [];

  constructor() {
    this.taskService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onTaskStatusChanged(task: Task) {
    const index = this.tasks.findIndex((t) => t.name === task.name);

    if (index !== -1) {
      this.tasks[index] = task;
    }
  }
}
