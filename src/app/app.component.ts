import { Component } from '@angular/core';
import { HeaderType } from './header/enum/header-type.enum';
import { HeaderConfig } from './header/interface/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headerTypeEnum = HeaderType;

  config1: HeaderConfig = {
    type: HeaderType.ONE,
    title: HeaderType.ONE.toString(),
    sayHello() {
      console.log('Hello');
    },
  };

  // config1: HeaderConfig = {
  //   type: HeaderType.TWO,
  //   title: HeaderType.TWO.toString(),
  //   sayHello() {
  //     console.log('Hello');
  //   },
  //   sayHi() {
  //     console.log('Hi');
  //   },
  // };
}
