import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardResolver } from './dashboard.resolver';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from 'app/dashboard/post/post.component';
import { CommonModule } from '@angular/common';
import {PostService} from './post/post.service';
import { PostCreateComponent } from './post/create/post-create.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DashboardComponent, PostComponent, PostCreateComponent],
  imports: [
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [],
  providers: [DashboardResolver, PostService]
})
export class DashboardModule {}
