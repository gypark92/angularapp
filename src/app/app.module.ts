import { ComponentInput } from './component-List/component.input.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentList } from './component-List/component-list.component';
import { ComponentPipe } from './component-pipe/component-pipe.component';

@NgModule({
  declarations: [AppComponent, ComponentList, ComponentInput, ComponentPipe],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
