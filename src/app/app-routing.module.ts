import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
