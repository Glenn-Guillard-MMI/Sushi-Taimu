import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAPIService {
  constructor(private http: HttpClient) {}

  public getAPIService(): Observable<any> {
    return this.http.get(
      'https://raw.githubusercontent.com/xtraide/testjson/main/test'
    );
  }
}
