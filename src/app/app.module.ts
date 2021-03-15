import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypingjsComponent } from './typingjs/typingjs.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { TimelineComponent } from './timeline/timeline.component';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    TypingjsComponent,
    MessagesComponent,
    MessageComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    NgxTypedJsModule,
    NgwWowModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
