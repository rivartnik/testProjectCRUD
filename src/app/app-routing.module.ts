import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BucketListComponent} from "./bucket-list/bucket-list.component";
import {BucketComponent} from "./bucket/bucket.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bucket-list'},
  {path: 'bucket-list', component: BucketListComponent},
  {path: 'bucket', component: BucketComponent}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
