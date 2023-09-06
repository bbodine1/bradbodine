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
    <div class="container">
      <header>
        <strong>Name</strong>
        <strong>Email</strong>
      </header>

      <div class="content">
        <ng-container *ngFor="let user of users">
          <span>{{ user.name }}</span>
          <span>{{ user.email }}</span>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: [`./db-output.component.scss`],
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
