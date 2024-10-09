import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, LoginComponent, ReportComponent, HeaderComponent, SideNavComponent, MainComponent, SalesByMonthComponent, TopWidgetsComponent, SalesByCategoryComponent, LastFewTransactionsComponent, TopThreeProductsComponent],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    ChartModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
