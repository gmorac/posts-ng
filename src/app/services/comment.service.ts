import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {

  private commentsURL = 'http://www.mocky.io/v2/5a663e0d2e0000002b323e0e';
  constructor(private http: HttpClient) { }

  getComments(): Observable <any[]> {
    return this.http.get<any[]>(this.commentsURL);

  }

}
