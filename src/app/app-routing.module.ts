import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { EditComponent } from './views/edit/edit.component';
import { FormComponent } from './views/form/form.component';
import { PostsComponent } from './views/posts/posts.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'about',component:AboutComponent},
  {path:'form',component:FormComponent},
  {path:'updatePosts/:id',component:EditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
