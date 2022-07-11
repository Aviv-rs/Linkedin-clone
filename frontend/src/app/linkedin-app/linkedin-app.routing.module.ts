import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [{ path: '', component: FeedPageComponent, pathMatch: 'full' }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
