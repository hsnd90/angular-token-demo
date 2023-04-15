import { Component, OnInit } from '@angular/core';
import { HeaderType } from './header/enum/header-type.enum';
import { HeaderConfig } from './header/interface/header';
import { Role } from './header/enum/role.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let roleRnd = Math.floor(Math.random() * 2);
    this.role = Object.values(this.roleEnum)[roleRnd];
    console.log('Role: ' + this.role);
    this.setConfig();
  }
  headerTypeEnum = HeaderType;
  roleEnum = Role;
  role = '';
  config!: HeaderConfig;

  setConfig() {
    if (this.role == this.roleEnum.User) {
      this.config = {
        type: HeaderType.TWO,
        title: 'Header Two',
        sayHello() {
          console.log('Hello');
        },
        sayHi() {
          console.log('Hi');
        },
      };
    } else if (this.role == this.roleEnum.Admin) {
      this.config = {
        type: HeaderType.ONE,
        title: 'Header One',
        sayHello() {
          console.log('said "Hello"');
        },
        onClickSearchButton(text) {
          console.log(text + ' is searched');
        },
      };
    }
  }
}
