import { Component } from '@angular/core';
import { HEADER_TOKEN } from '../../token/header-token';
import { Header, HeaderOneConfig } from '../../interface/header';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
  providers: [
    {
      provide: HEADER_TOKEN,
      useExisting: HeaderOneComponent,
    },
  ],
})
export class HeaderOneComponent extends Header<HeaderOneConfig> {
  searchText = '';
}
