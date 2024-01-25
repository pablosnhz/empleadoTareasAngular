import { Component, Input } from '@angular/core';
import { ITask, LEVELS } from '../../models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task: ITask = {
    title: 'titulo por defecto',
    description: 'Description por defecto',
    level: LEVELS.INFO,
    completed: false
  };



}
