import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { BoldDirective } from './bold.directive';
import { IfRulesDirective } from './if-rules.directive';
import { DataComponent } from './data/data.component';
@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    IfRulesDirective,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
