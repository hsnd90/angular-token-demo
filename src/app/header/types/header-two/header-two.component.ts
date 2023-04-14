import { Component } from '@angular/core';
import { HEADER_TOKEN } from '../../token/header-token';
import { Header, HeaderTwoConfig } from 'src/app/header/interface/header';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
  providers: [
    {
      provide: HEADER_TOKEN,
      useExisting: HeaderTwoComponent,
    },
  ],
})
export class HeaderTwoComponent extends Header<HeaderTwoConfig> {}
