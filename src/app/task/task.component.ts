import { Component } from '@angular/core';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NewTaskComponent, TaskListComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.less'
})
export class TaskComponent {

}
