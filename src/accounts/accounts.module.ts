import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDesignModule } from 'src/material-design/material-design.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AccountsListComponent
  ],
  imports: [CommonModule,
     MaterialDesignModule,
      AccountsRoutingModule,
      MatCardModule,
      MatFormFieldModule,
    MatIconModule,
   MatTableModule,
   MatPaginatorModule
  ],
})
export class AccountsModule {}