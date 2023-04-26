import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'content',
    loadChildren: () =>
      import('./content/content.module').then((m) => m.ContentModule),
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
