import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.interface';
import { TaskStatus } from './task/task-status.enum';
import { TaskService } from './task/task.service';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TaskComponent,
    AddTaskModalComponent,
    ConfirmDeleteModalComponent,
  ],
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
    const index = this.tasks.findIndex((t) => t.id === task.id);

    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }

  onTaskDeleted(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }
}
