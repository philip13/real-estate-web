import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'real-estates/create', pathMatch: 'full', component: NewComponent },
  { path: 'real-estates',  component: IndexComponent },
  { path: 'real-estates/:id', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
