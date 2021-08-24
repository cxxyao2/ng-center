import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tree1Component } from './mat-schematics/tree1/tree1.component';
import { Draggrop1Component } from './mat-schematics/draggrop1/draggrop1.component';
import { Address1Component } from './mat-schematics/address1/address1.component';
import { Dashboard1Component } from './mat-schematics/dashboard1/dashboard1.component';

const routes: Routes = [
  { path: 'drag', component: Draggrop1Component },
  { path: 'tree', component: Tree1Component },
  { path: 'address', component: Address1Component },
  { path: 'dash', component: Dashboard1Component },
  { path: '', redirectTo: '/drag', pathMatch: 'full' },
  { path: '**', component: Draggrop1Component },
];

// const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
