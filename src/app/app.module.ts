import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './pages/home/my-home/my-home.component';
import { MyAboutComponent } from './pages/about/my-about/my-about.component';
import { MyErrorComponent } from './pages/errors/my-error/my-error.component';
import { ListExampleComponent } from './shared/list/list-example/list-example.component';
import { SlackService } from "./service/slack/slack.service";

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyAboutComponent,
    MyErrorComponent,
    ListExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SlackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
