import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Chart } from 'chart.js';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { PieChatComponent } from './pie-chat/pie-chat.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PieChatComponent,
    LineChartComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
