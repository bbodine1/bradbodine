import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf, NgFor, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import { BlogPost } from '../../models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, NgFor, AsyncPipe, DatePipe],
  template: `
    <div *ngIf="post$ | async as post">
      <!-- component -->
      <div class="max-w-screen-lg mx-auto">
        <main class="mt-10">
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="font-semibold leading-tight">
                {{ post.attributes.title }}
              </h2>

              <a
                *ngFor="let category of post.attributes.category"
                href="#"
                class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {{ category }}
              </a>
            </div>

            <img
              src="{{ post.attributes.image }}"
              class="w-full object-cover lg:rounded"
              style="height: 28em;"
            />
          </div>

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <div
              class="px-4 lg:px-0 mt-12 text-gray-300 text-lg leading-relaxed w-full lg:w-3/4"
            >
              <analog-markdown [content]="post.content"></analog-markdown>
            </div>

            <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div class="p-4 border-t border-b md:border md:rounded">
                <div class="flex py-2">
                  <img
                    src="{{ post.attributes.authorImage }}"
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />

                  <div>
                    <p class="font-semibold text-gray-400 text-sm">
                      {{ post.attributes.author }}
                    </p>

                    <p class="font-semibold text-gray-500 text-xs">
                      {{ post.attributes.date | date : 'mediumDate' }}
                    </p>
                  </div>
                </div>

                <p class="text-gray-400 py-3">
                  Brad writes about technology Yourself required no at thoughts
                  delicate landlord it be. Branched dashwood do is whatever it.
                </p>

                <button
                  class="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
                >
                  Follow
                  <i class="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
        <!-- main ends here -->
      </div>
    </div>
  `,
})
export default class BlogPostPage {
  post$ = injectContent<BlogPost>();
}
