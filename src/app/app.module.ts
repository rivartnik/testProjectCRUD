import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BucketListComponent} from './bucket-list/bucket-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService} from './shared/services/api.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BucketComponent } from './bucket/bucket.component';
import { BucketFilesComponent } from './bucket/bucket-files/bucket-files.component';
import { BucketDetailsComponent } from './bucket/bucket-details/bucket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    BucketComponent,
    BucketFilesComponent,
    BucketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
