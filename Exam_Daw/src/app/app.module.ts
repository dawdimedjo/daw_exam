import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
