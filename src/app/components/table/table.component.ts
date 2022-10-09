import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService.service';
import Book from "src/app/interfaces/book.interface"; 
import { SortDirective } from 'src/app/directive/sort.directive';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [ApiService, SortDirective]
})
export class TableComponent implements OnInit {
  result!: Book[];
  searchText: string = "";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getBooks();
  }


  getBooks() {
    return this.apiService.getBooks()
      .subscribe(
        (data) => {
          this.result = data
        }
      )
  }

}
