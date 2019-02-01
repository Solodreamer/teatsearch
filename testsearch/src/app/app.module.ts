import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchHeaderComponent } from './search-header/search-header.component';
import { SearchBodyComponent } from './search-body/search-body.component';

import { DataService } from './data.service';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { TabViewModule} from 'primeng/components/tabview/tabview';
import { CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
import { DataViewModule} from 'primeng/components/dataview/dataview';
import { PanelModule} from 'primeng/components/panel/panel';
import { DialogModule} from 'primeng/components/dialog/dialog';






@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    SearchBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    TabViewModule,
    CodeHighlighterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    DialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
