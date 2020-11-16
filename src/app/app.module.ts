import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ModifyContactComponent } from './modify-contact/modify-contact.component';
import { ViewAllContactsComponent } from './view-all-contacts/view-all-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ContactServiceService } from './contact-service.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    DeleteContactComponent,
    ModifyContactComponent,
    ViewAllContactsComponent,
    ViewContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
