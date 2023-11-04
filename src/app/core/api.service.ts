import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.httpClient.post('/api/auth/login', credentials);
  }

  // Other API calls
}
