/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="app.ts" />
import {Component, View, Parent, bootstrap} from 'angular2/angular2';
import {AppShell} from './app';

  //Annotations
  @Component({
    selector: 'page'
  })
  @View({
    template: '<h1>Hello, {{ name }}</h1><button (click)="test()">Who Am I?</button>'
  })
  // Component controller
  export class Page {
    name: string;
    appShell: AppShell;

    constructor(appShell: AppShell) {
      this.name = 'Jenny';
      this.appShell = appShell;
    }

    test () {
      console.log(this);
      console.log(this.appShell);
    }
  }
