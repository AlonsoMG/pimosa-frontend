import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MachineryDashboardComponent } from './machinery-dashboard/machinery-dashboard.component';
import { MachineryCreateComponent } from './machinery-create/machinery-create.component';
import { MachineryInformationComponent } from './machinery-information/machinery-information.component';
import { MachineryUpdateComponent } from './machinery-update/machinery-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MachineryConfigurationComponent } from './machinery-configuration/machinery-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineryDashboardComponent,
    MachineryCreateComponent,
    MachineryInformationComponent,
    MachineryUpdateComponent,
    MachineryConfigurationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
