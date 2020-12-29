import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { MyDocumentComponent } from '../../my-document/my-document.component';
import { LandRecordComponent } from '../../land-record/land-record.component';
import { UploadStudentInfoComponent } from '../../upload-student-info/upload-student-info.component';
import { CivilOwnershipDetailComponent } from '../../civil-ownership-detail/civil-ownership-detail.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LanddetailComponent } from '../../landdetail/landdetail.component';
import { OwnerdetailComponent } from '../../ownerdetail/ownerdetail.component';

import { CivildetailComponent } from '../../civildetail/civildetail.component';
import { CivilownerdetailComponent } from '../../civilownerdetail/civilownerdetail.component';
import { UploadCivilDetailsComponent } from '../../upload-civil-details/upload-civil-details.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    MyDocumentComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    LandRecordComponent,
    CivilOwnershipDetailComponent,
    // MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UploadStudentInfoComponent,
    LanddetailComponent,
    OwnerdetailComponent,
    CivildetailComponent,
    CivilownerdetailComponent,
    UploadCivilDetailsComponent
  ]
})

export class AdminLayoutModule {}
