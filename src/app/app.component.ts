import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-crm';

  isDark$: Observable<boolean> | null = null;

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer
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

  private processOverlayComponentTheme(darkMode: boolean) {
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    const themeWrapperClass = 'darkMode';
    if (darkMode) {
      overlayContainerElement.classList.add(themeWrapperClass);
    } else {
      overlayContainerElement.classList.remove(themeWrapperClass);
    }
  }
}
