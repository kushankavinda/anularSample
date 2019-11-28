import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PostAdd } from './post-add';
 // import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class PostAddServiceService {

  constructor( private httpclient: HttpClient) { }

  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  postAdd (postAdd: PostAdd): Observable <any> {

    const objectjson = JSON.stringify(postAdd);
    return this.httpclient.post('http://localhost:20000/api/addPost', objectjson, this.options);
      //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }

}
