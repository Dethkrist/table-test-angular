import { Component, Input, OnInit, ViewChild } from '@angular/core';
import Book from 'src/app/interfaces/book.interface';
import {
  ChartComponent, 
  ApexAxisChartSeries, 
  ApexChart, 
  ApexXAxis,
  ApexTitleSubtitle} from "ng-apexcharts";

  export type ChartOptions = {
    series: ApexAxisChartSeries,
    chart: ApexChart,
    xaxis: ApexXAxis,
    title: ApexTitleSubtitle
  };

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class BookChartComponent implements OnInit{

  @Input() result!: Book[];
  years!: string[];
  chartBookAmount!: number[];

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;


  constructor() {}

  ngOnInit() {
    this.getYears();
    this.getChartBooksAmount();
    this.getChartOptions()
  }

  getChartOptions() {
    this.chartOptions = {
      series: [
        {
          name: "Books",
          data: this.chartBookAmount
        }
      ],
      chart: {
        height: 350,
        type: 'bar'
      },
      title: {
        text: 'Books by year'
      },
      xaxis: {
        categories: this.years
      }
    }
  }

  getChartBooksAmount() {
    for (let i = 0; i < this.years.length; i++) {
      let arr: number[] = [];
      arr.push(
        this.result.filter((book) => 
          new Date(book.publishDate)
          .getFullYear()
          .toString() === this.years[i])
          .length)
      this.chartBookAmount = arr;
    }
  }

  getYears() {
    let arr: string[] = [];
    this.result.forEach((book) => arr
      .push(new Date(book.publishDate)
        .getFullYear()
        .toString()
        ))
    let set = new Set(arr);
    this.years = Array.from(set);  
  }

}
