import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [TitleCasePipe],
  imports: [CommonModule],
  exports: [TitleCasePipe],
})
export class PipesModule {}
