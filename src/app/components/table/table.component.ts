import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService.service';
import Book from "src/app/interfaces/book.interface"; 
import { SortDirective } from 'src/app/directive/sort.directive';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [SortDirective]
})
export class TableComponent {
  searchText?: any = '';
  @Input() result!: Book[]
}
