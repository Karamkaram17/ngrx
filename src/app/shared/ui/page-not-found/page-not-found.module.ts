import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundRoutingModule } from './page-not-found.routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule, PageNotFoundRoutingModule],
  bootstrap: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
