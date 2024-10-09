import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Route } from '@angular/router';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit, OnDestroy {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  private subscriptions: Subscription = new Subscription();

  constructor(private observer: BreakpointObserver, private router: Router) {}

  ngOnInit(): void {
    // Initialization logic
  }

  ngAfterViewInit() {
    const resizeSub = this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        this.sidenav.mode = res.matches ? 'over' : 'side';
        this.sidenav[res.matches ? 'close' : 'open']();
      });

    const routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });

    this.subscriptions.add(resizeSub);
    this.subscriptions.add(routerSub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); // Clean up subscriptions
  }
}
