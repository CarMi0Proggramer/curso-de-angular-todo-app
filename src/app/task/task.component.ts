import { Component } from '@angular/core';
import { Task } from './task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task: Task = {
    name: 'Mi primer tarea',
    description: 'Esta va a ser mi primer tarea',
    status: 'completed',
  };
}
