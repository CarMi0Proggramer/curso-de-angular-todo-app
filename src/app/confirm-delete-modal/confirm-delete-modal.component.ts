import {
  Component,
  ElementRef,
  inject,
  output,
  viewChild,
} from '@angular/core';
import { Task } from '../task/task.interface';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-confirm-delete-modal',
  imports: [],
  templateUrl: './confirm-delete-modal.component.html',
  styleUrl: './confirm-delete-modal.component.css',
})
export class ConfirmDeleteModalComponent {
  private readonly taskService = inject(TaskService);
  private readonly closeBtn =
    viewChild.required<ElementRef<HTMLButtonElement>>('closeModalBtn');
  task?: Task;

  taskDeletedEvent = output<Task>();

  setTask(task: Task) {
    this.task = task;
  }

  confirmDelete() {
    if (this.task) {
      this.taskService.delete(this.task.id).subscribe((task) => {
        this.taskDeletedEvent.emit(task);
        this.closeBtn().nativeElement.click();
      });
    }
  }
}
