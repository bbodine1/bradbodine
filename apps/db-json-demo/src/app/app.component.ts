import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DbOutputComponent } from './components/db-output/db-output.component';

@Component({
  standalone: true,
  imports: [DbOutputComponent, RouterModule],
  selector: 'ncd-root',
  template: `
    <h2>This Data is Derived from <code>db.json</code></h2>
    <p>Located in the <code>/assets</code> folder</p>
    <ncd-db-output></ncd-db-output>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: grid;
        padding: 1rem;
        height: 100dvh;
        place-content: center;
        align-content: center;
        background: linear-gradient(to bottom, #007bff, #87cefa);
      }

      h2,
      p {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'db-json-demo';
}
