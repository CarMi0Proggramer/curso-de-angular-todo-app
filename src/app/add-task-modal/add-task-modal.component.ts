import {
  Component,
  ElementRef,
  inject,
  output,
  viewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task.interface';

@Component({
  selector: 'app-add-task-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css',
})
export class AddTaskModalComponent {
  private readonly taskService = inject(TaskService);
  private readonly closeBtn =
    viewChild.required<ElementRef<HTMLButtonElement>>('closeModalBtn');

  addTaskForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8)]),
    status: new FormControl('PENDING'),
  });

  addTaskEvent = output<Task>();

  hasErrors(fieldName: 'name' | 'status', errorType: string) {
    const field = this.addTaskForm.get(fieldName);

    if (field) {
      return field.hasError(errorType) && field.touched;
    }

    return false;
  }

  onSubmit() {
    if (this.addTaskForm.valid) {
      const { name, status } = this.addTaskForm.value;

      this.taskService
        .create({
          name: name!,
          status: status!,
        })
        .subscribe((task) => {
          this.addTaskEvent.emit(task);
          this.clearForm();
          this.closeBtn().nativeElement.click();
        });
    }
  }

  clearForm() {
    this.addTaskForm.reset({
      status: 'PENDING',
    });
  }
}
