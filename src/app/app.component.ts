import { Component, OnInit } from '@angular/core';
import Book from './interfaces/book.interface';
import { ApiService } from './services/apiService.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit{
  result!: Book[];
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getBooks();
  }


  getBooks() {
    this.loading = true;
    return this.apiService.getBooks()
      .subscribe(
        (data) => {
          this.result = data
          this.loading = false;
        }
      )
  }
}
