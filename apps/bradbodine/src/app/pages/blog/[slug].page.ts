import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BlogPost } from '../../models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <div *ngIf="post$ | async as post">
      <!-- component -->
      <div
        class="h-96 text-white text-center grid bg-cover bg-[url('https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')]"
      >
        <div
          class="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"
        ></div>
        <div class="col-start-1 row-start-1 mx-auto my-auto">
          <h1 class="font-bold text-2xl">Blog Post</h1>
          <p>{{ post.attributes.thing }}</p>
        </div>
      </div>

      <div
        class="grid text-center text-black place-content-center min-h-[500px] relative isolate  after:absolute after:z-[-1] after:inset-0 after:bg-pink-700 after:opacity-90 after:bg-[url('https://images.unsplash.com/photo-1604050170221-aed634784f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80')] after:bg-top after:bg-cover "
      >
        <h1 class="font-semibold text-4xl tracking-wide">
          {{ post.attributes.title }}
        </h1>
        <p class="text-xs text-center leading-tight">
          <analog-markdown [content]="post.content" />
        </p>
      </div>
    </div>
  `,
})
export default class BlogPostPage {
  post$ = injectContent<BlogPost>();
}
