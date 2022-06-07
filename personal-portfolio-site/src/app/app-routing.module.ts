import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [ 
{path: 'info', component:InfoComponent},
{path: 'comments', component:CommentsComponent},
{ path: '', redirectTo: '/info', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
