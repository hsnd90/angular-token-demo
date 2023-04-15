import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from './types/header-one/header-one.component';
import { HeaderComponent } from './header.component';
import { HeaderTwoComponent } from './types/header-two/header-two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, HeaderOneComponent, HeaderTwoComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
