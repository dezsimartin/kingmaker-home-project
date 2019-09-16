import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KingmakerService {

  constructor(private httpClient : HttpClient) { }

  public getData() : Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/");
  }

}
