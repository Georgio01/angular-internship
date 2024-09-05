import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { TaskComponent } from './task/task.component';


export const routes: Routes = [
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent},
    {path:'task-list',component:TaskComponent}

];

