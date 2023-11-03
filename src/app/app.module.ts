import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import {HttpClientModule} from '@angular/common/http';
import { ReportsComponent } from './reports/reports.component';
import { PreviewComponent } from './preview/preview.component';
import { FinalReportComponent } from './final-report/final-report.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

const appRoutes: Routes=[
  { path:'', component: HomeComponent },
  { path:'#home', component: HomeComponent },
  { path:'#preview', component: PreviewComponent },
  { path:'avatars', component: AvatarsComponent },
  { path:'questions', component: QuestionsComponent },
  { path:'questions/:id', component: QuestionsComponent},
  { path:'reports', component: ReportsComponent },
  { path:'reports/:avatarChosen/:id', component: ReportsComponent },
  { path:'finalReport', component: FinalReportComponent },
  { path:'finalReport/:reportId', component: FinalReportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvatarsComponent,
    QuestionsComponent,
    ReportsComponent,
    PreviewComponent,
    FinalReportComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
