/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="page.ts" />
import {Component, View, RouteConfig, bootstrap} from 'angular2/angular2';
import {Page} from './page';

//Annotations
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello, {{ name }}</h1><button (click)="test()">Who Am I?</button><router-outlet></router-outlet>',
  directives: [Page]
})
// Component controller
export class AppShell {
  name: string;

  constructor(router: RouteConfig ) {
    this.router = router;
    // Here we configure, for each route, which component should be added and its alias for URL linking
    router
      .config('/', Page, 'page');

    this.name = 'James';
  }

  test() {
    console.log(this);
  }
}

bootstrap(AppShell);
