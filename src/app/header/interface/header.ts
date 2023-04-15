import { HeaderType } from '../enum/header-type.enum';

export abstract class Header<T> {
  config!: T;
}

interface BaseHeader {
  title: string;
}

export interface HeaderOneConfig extends BaseHeader {
  type: HeaderType.ONE;
  sayHello: () => void;
  onClickSearchButton: (text: any) => void;
}

export interface HeaderTwoConfig extends BaseHeader {
  type: HeaderType.TWO;
  sayHello: () => void;
  sayHi: () => void;
}

export type HeaderConfig = HeaderOneConfig | HeaderTwoConfig;
