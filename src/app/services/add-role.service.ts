import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Privilege } from '../models/Privilege';

@Injectable({
  providedIn: 'root',
})
export class AddRoleService {
  constructor(private http: HttpClient) {
    // this.http
    //   .get<Privilege[]>('http://localhost:3000/privileges')
    //   .subscribe((p) => (this.privileges = p));
  }
  privileges: Privilege[] = [];

  getPrivilege() {
    return this.http.get<Privilege[]>('http://localhost:3000/privileges');
  }

  submit(data: any) {
    this.http
      .post('http://localhost:3000/role', data)
      .subscribe((r) => console.log('http response : ', data));
  }
}
