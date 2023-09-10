import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  host: {
    class: 'prose prose-slate',
  },
  template: ` <router-outlet /> `,
})
export default class BlogPage {}
