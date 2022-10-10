import { Component, Input, OnInit } from '@angular/core';
import Book from "src/app/interfaces/book.interface"; 
import { SortDirective } from 'src/app/directive/sort.directive';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [SortDirective]
})
export class TableComponent {
  searchText?: any = '';
  fileName = "BooksTable.xlsx"
  @Input() result!: Book[]

  exportExcel() {
    let element = document.querySelector('.table');
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');

    XLSX.writeFile(wb,this.fileName)
  }
}
