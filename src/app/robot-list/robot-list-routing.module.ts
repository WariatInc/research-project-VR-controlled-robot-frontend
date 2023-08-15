import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotListComponent } from './robot-list.component';

const routes: Routes = [{ path: '', component: RobotListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotListRoutingModule { }
