import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookService } from './book.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { TestData } from './testdata';
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgModule,
   // BookService,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestData,
    InMemoryWebApiModule.forRoot(TestData),
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
