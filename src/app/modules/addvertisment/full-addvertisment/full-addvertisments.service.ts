import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PostAdd } from '../../post-add/post-add';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullAddvertismentsService {
  constructor( private httpclient: HttpClient) { }

  options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  allAdd (): Observable <any> {

    return this.httpclient.get<any>('http://localhost:20000/api/addPost/allAdds',  this.options);
      //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  removeAdds (): Observable <any> {
    return this.httpclient.get<any>('http://localhost:20000/api/addPost/removeAdds',  this.options);
    //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  followAdds (): Observable <any> {
    return this.httpclient.get<any>('http://localhost:20001/api/addPost/saveFormTimeline',  this.options);
      //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  removeFormTimeline(id: any): Observable <any> {
    return this.httpclient.delete('http://localhost:20000/api/addPost/removeFromTimeline/' + id, this.options);
  }
  saveFormTimeline(addvertisment: any): Observable <any> {
    const objectjson = JSON.stringify(addvertisment);
    console.log(objectjson);
    return this.httpclient.post('http://localhost:20001/api/addPost/saveFormTimeline' , addvertisment, this.options);
  }
  handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);
  }
}
