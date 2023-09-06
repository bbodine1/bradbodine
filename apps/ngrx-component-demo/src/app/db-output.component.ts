import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'ncd-db-output',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HttpClient],
  template: `
    <table id="user">
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr *ngFor="let user of users">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  `,
  styles: [],
})
export class DbOutputComponent implements OnInit {
  users: User[] = [];
  url = '/assets/db.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>(this.url).subscribe((res) => {
      this.users = res;
    });
  }
}
