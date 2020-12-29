import { Routes } from '@angular/router';

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

import { AuthGuardService}from'../../auth-guard.service';
import { LanddetailComponent } from '../../landdetail/landdetail.component';
import { OwnerdetailComponent } from '../../ownerdetail/ownerdetail.component';

import { CivildetailComponent } from '../../civildetail/civildetail.component';
import { CivilownerdetailComponent } from '../../civilownerdetail/civilownerdetail.component';
import { UploadCivilDetailsComponent } from '../../upload-civil-details/upload-civil-details.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',               component: DashboardComponent },
    { path: 'my-document',             component: MyDocumentComponent },
    { path: 'land-record',             component: LandRecordComponent },
    { path: 'landdetail/:landId/:status',      component: LanddetailComponent },
    { path: 'ownerdetail/:ownerId',    component: OwnerdetailComponent },
    { path: 'civildetail/:certiId/:certifType/:status',    component: CivildetailComponent },
    { path: 'civilownerdetail/:civilownerId',    component: CivilownerdetailComponent },
    { path: 'upload-land-nfo',     component: UploadStudentInfoComponent },
    { path: 'upload-civil-nfo',     component: UploadCivilDetailsComponent },
    { path: 'civil-ownership-detail', component: CivilownerdetailComponent },

    { path: 'user-profile',   component: UserProfileComponent, },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
