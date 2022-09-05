import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twinslash-sayollo';
  isMobileView: boolean = false;

  constructor(private responsive: BreakpointObserver) {
  }

  ngOnInit(): void {

    this.responsive.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetLandscape,
    ])
      .subscribe(result => {

        if (result.matches) {
          this.isMobileView = true;
        }
      });
  }
}
