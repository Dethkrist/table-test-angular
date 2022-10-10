import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './directive/sort.directive';
import { SearchFilterPipe } from './pipes/search.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BookChartComponent } from './components/chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SortDirective,
    SearchFilterPipe,
    BookChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
