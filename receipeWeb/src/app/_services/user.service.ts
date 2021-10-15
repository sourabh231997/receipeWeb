import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class UserService {
    backendUrl: any;
    headers: any;
    options: any;
    constructor(private httpClient: HttpClient) {
        this.backendUrl = environment.url;
    }

    getHeaders() {
        let headers = new HttpHeaders().set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
        return { headers: headers }
      }

    getReceipeData() {
    return this.httpClient.get(`${this.backendUrl}/getApi`, this.getHeaders())
    }   
}