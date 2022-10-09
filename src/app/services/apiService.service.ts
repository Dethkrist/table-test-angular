import { HttpClient, HttpParams } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import Book from "../interfaces/book.interface";

@Injectable()
export class ApiService {
  constructor (private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const URL: string = "https://fakerestapi.azurewebsites.net/api/v1/Books";
    return this.http.get<Book[]>(URL);
  }
}