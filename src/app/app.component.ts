import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NavService } from './services/nav.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  isDark$: Observable<boolean> | null = null;
  title = 'ngCenter';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer,
    private observer: BreakpointObserver,
    private navService: NavService
  ) {}

  ngOnInit(): void {
    this.isDark$ = this.themeService.isDarkTheme;

    this.themeService.isDarkTheme.subscribe(
      (value) => {
        this.processOverlayComponentTheme(value);
      },
      (error) => {
        console.log('error is ', error);
      },
      () => {
        console.log('get theme mode');
      }
    );
  }

  private processOverlayComponentTheme(darkMode: boolean): void {
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    const themeWrapperClass = 'darkMode';
    if (darkMode) {
      overlayContainerElement.classList.add(themeWrapperClass);
    } else {
      overlayContainerElement.classList.remove(themeWrapperClass);
    }
  }
  ngAfterViewInit() {
    this.navService.appDrawer = this.sidenav;
    this.observer.observe(['(max-width: 800px)']).pipe(delay(1)).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
