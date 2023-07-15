import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  tasks: string[] = [];

  constructor(private fb: FormBuilder) { }

  taskFg = this.fb.group({
    taskCtrl: ['', [Validators.required, Validators.minLength(3)]]
  }); 

  addTask(): void {
    this.tasks?.push(this.TaskCtrl.value);
  }

  removeTask(i: number): void {
    this.tasks?.splice(i, 1);
  }

  get TaskCtrl(): FormControl {
    return this.taskFg.get('taskCtrl') as FormControl;
  }
}
