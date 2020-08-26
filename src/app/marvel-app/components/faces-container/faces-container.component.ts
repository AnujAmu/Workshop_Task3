import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export interface snaps {
  title: string;
}

@Component({
  selector: 'app-faces-container',
  templateUrl: './faces-container.component.html',
  styleUrls: ['./faces-container.component.scss']
})
export class FacesContainerComponent implements OnInit {

  tiles: snaps[] = [
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '4' },
    { title: '5' },
    { title: '6' },
    { title: '7' },
    { title: '8' },
    { title: '9' },
    { title: '10' },
    { title: '11' },
    { title: '12' },
    { title: '13' },
    { title: '14' },
    { title: '15' },
    { title: '16' },
  ];

  public cols: Observable<number>;
  public colspan: number;
  public rowspan: number;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cols = this.getColsByBreakpoint();
    this.colspan = 1;
    this.rowspan = 1;
  };

  ngOnInit(): void {
  }

  private getColsByBreakpoint() {
    return this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).pipe(
      map((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) { return 4; }
        if (result.breakpoints[Breakpoints.Small]) { return 4; }
        if (result.breakpoints[Breakpoints.Medium]) { return 6; }
        if (result.breakpoints[Breakpoints.Large]) { return 8; }
        if (result.breakpoints[Breakpoints.XLarge]) { return 8; }
      })
    );
  }
}