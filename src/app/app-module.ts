import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Parent } from './components/parent/parent';
import { Child } from './components/child/child';
import { Header } from './components/header/header';
import { Sender } from './components/sender/sender';
import { Logger } from './components/logger/logger';

@NgModule({
  declarations: [
    App,
    Parent,
    Child,
    Header,
    Sender,
    Logger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
