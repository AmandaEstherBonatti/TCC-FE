import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingComponent } from './consulting.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

const routes: Routes = [
  {
      path: '',
      component: ConsultingComponent
  }
];

@NgModule({
  declarations: [ConsultingComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class ConsultingModule { }
