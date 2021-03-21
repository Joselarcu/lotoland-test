import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EuroJackpotResultComponent } from './containers/euro-jackpot-result/euro-jackpot-result.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CircleComponent } from './components/circle/circle.component';
import { TableComponent } from './components/table/table.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    EuroJackpotResultComponent,
    HeaderComponent,
    CircleComponent,
    TableComponent,
    LoadingComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
