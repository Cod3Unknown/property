import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {IndexComponent} from './index/index.component';
import {AindexComponent} from './admin/aindex/aindex.component';
import {AmainComponent} from './admin/amain/amain.component';
import {AinfoComponent} from './admin/ainfo/ainfo.component';
import { UindexComponent } from './user/uindex/uindex.component';
import { UmainComponent } from './user/umain/umain.component';
import { UinfoComponent } from './user/uinfo/uinfo.component';
import { UrepairComponent } from './user/urepair/urepair.component';
import { AccusationComponent } from './user/uaccusation/accusation.component';
import { AroomComponent } from './admin/aroom/aroom.component';
import { ArepairComponent } from './admin/arepair/arepair.component';
import { AaccusationComponent } from './admin/aaccusation/aaccusation.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    AindexComponent,
    AmainComponent,
    AinfoComponent,
    UindexComponent,
    UmainComponent,
    UinfoComponent,
    UrepairComponent,
    AccusationComponent,
    AroomComponent,
    ArepairComponent,
    AaccusationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'index', component: IndexComponent},
      {
        path: 'aindex',
        component: AindexComponent,
        children: [{path: 'amain', component: AmainComponent},
                    {path: 'ainfo', component: AinfoComponent},
                    {path: 'aroom', component: AroomComponent},
                    {path: 'arepair', component: ArepairComponent},
                    {path: 'aaccusation', component: AaccusationComponent},]
      },
      {path: 'uindex', component: UindexComponent,
        children: [{path: 'umain', component: UmainComponent},
                    {path: 'uinfo', component: UinfoComponent},
                    {path: 'urepair', component: UrepairComponent},
                    {path: 'uaccusation', component: AccusationComponent}]},
      {path: '**', redirectTo: 'login'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
