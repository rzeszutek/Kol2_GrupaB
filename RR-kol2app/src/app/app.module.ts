import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RRForumComponent } from './components/rr-forum/rr-forum.component';
import { RRForumItemComponent } from './components/rr-forum-item/rr-forum-item.component';
import { RRForumItemDetailsComponent } from './components/rr-forum-item-details/rr-forum-item-details.component';
import {RRDataService} from "./services/rr-data.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RRForumComponent,
    RRForumItemComponent,
    RRForumItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RRDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
