import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'posts', component: ViewPostComponent },
  { path: 'detail/:id', component: DetailPostComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: 'create', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
