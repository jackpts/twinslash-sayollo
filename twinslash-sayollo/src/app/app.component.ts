import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobileView: boolean = false;  // https://blog.angular-university.io/angular-responsive-design/

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
