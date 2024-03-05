import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnitTreeComponent } from './unit-tree/unit-tree.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { ReuseButtonComponent } from './reuse-button/reuse-button.component';
import { UnitFormComponent } from './unit-form/unit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitTreeComponent,
    UnitListComponent,
    ReuseButtonComponent,
    UnitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
