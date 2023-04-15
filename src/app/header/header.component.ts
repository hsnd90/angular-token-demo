import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { HeaderType } from './enum/header-type.enum';
import { HEADER_TOKEN } from './token/header-token';
import { Header, HeaderConfig } from './interface/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

  @ViewChild(HEADER_TOKEN) header!: Header<HeaderConfig>;
  @Input() config!: HeaderConfig;
  headerTypeEnum = HeaderType;

  ngAfterViewInit(): void {
    if (this.config) this.header.config = this.config;
    this.cd.detectChanges();
  }
}
