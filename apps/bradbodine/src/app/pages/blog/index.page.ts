import { Component } from '@angular/core';
import { AsyncPipe, NgFor, DatePipe } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';

import { BlogPost } from '../../models/post';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe, DatePipe],
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
          <h1
            class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
          >
            From the blog
          </h1>

          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            {{ blogAbout }}
          </p>
        </div>

        <div
          class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
        >
          <div *ngFor="let post of posts">
            <div class="relative">
              <img
                [routerLink]="['/blog', post.slug]"
                class="object-cover object-center w-full h-64 rounded-lg lg:h-80 cursor-pointer"
                src="{{ post.attributes.image }}"
                alt=""
              />

              <div
                class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 "
              >
                <img
                  class="object-cover object-center w-10 h-10 rounded-full"
                  src="{{ post.attributes.authorImage }}"
                  alt=""
                />

                <div class="mx-4">
                  <h1 class="text-sm text-gray-700 dark:text-gray-200">
                    {{ post.attributes.author }}
                  </h1>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ post.attributes.date | date : 'mediumDate' }}
                  </p>
                </div>
              </div>
            </div>

            <h1
              class="mt-6 text-xl font-semibold text-gray-800 dark:text-white"
            >
              <a [routerLink]="['/blog', post.slug]">{{
                post.attributes.title
              }}</a>
            </h1>

            <hr class="w-32 my-6 text-blue-500" />

            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ post.attributes.description }}
            </p>

            <a
              [routerLink]="['/blog', post.slug]"
              class="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
              >Read more</a
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [``],
})
export default class IndexPage {
  posts = injectContentFiles<BlogPost>();

  blogAbout =
    'Anim dolor nulla ut cillum. Adipisicing elit laboris nostrud laborum. Nisi tempor sunt commodo occaecat deserunt aliqua do veniam eiusmod anim proident sit velit tempor culpa.';
}
