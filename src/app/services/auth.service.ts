import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<User | undefined>(undefined);
    this.user.asObservable();
  }

  user: BehaviorSubject<User | undefined>;

  get currentUserValue(): User | undefined {
    return this.user.value;
  }

  login(username: string, password: string) {
    const rep = this.http.post<any>('http://localhost:3000/user', {
      username,
      password,
    });

    rep.subscribe((u) => {
      localStorage.setItem('user', JSON.stringify(u));
      this.user.next(u);
    });
  }
}
