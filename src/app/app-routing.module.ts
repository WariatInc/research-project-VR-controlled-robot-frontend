import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/auth.guard';

const routes: Routes = [
  {
    path: 'device-list',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./devices/device-list/device-list.module').then(
        (m) => m.DeviceListModule,
      ),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./logout/logout.module').then((m) => m.LogoutModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'device',
    loadChildren: () =>
      import('./devices/device/device.module').then((m) => m.DeviceModule),
  },
  {
    path: 'add_device',
    loadChildren: () =>
      import('./devices/add-device/add-device.module').then(
        (m) => m.AddDeviceModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
