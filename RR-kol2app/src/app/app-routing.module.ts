import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RRForumComponent} from "./components/rr-forum/rr-forum.component";
import {RRForumItemComponent} from "./components/rr-forum-item/rr-forum-item.component";
import {RRForumItemDetailsComponent} from "./components/rr-forum-item-details/rr-forum-item-details.component";


const routes: Routes = [
  { path: '', component: RRForumComponent},
  { path: 'rr-forum-item', component: RRForumItemComponent},
  { path: 'rr-forum-item-details/:id', component: RRForumItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
