import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  host: {
    class: 'blog-page',
  },
  template: ` <router-outlet /> `,
})
export default class BlogPage {}
