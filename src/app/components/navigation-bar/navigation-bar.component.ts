import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  isDarkTheme$: Observable<boolean> | null = null;
  userName: string = 'Mike';

  isDark: boolean = false;
  darkToolTip: string = 'Switch to dark mode';

  siteLanguage = 'English';
  siteLocale = 'en';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  constructor(private themeService: ThemeService) {}

  toggleDarkTheme(): void {
    this.isDark = !this.isDark;
   this.darkToolTip = this.isDark ? 'Switch to light mode' : 'Switch to dark mode';
    this.themeService.setDarkTheme(this.isDark);
  }

  ngOnInit(): void {
    // TODO: 正式发布到firebase上之后才能使用。开发环境不行
    // this.siteLocale = window.location.pathname.split('/')[1];
    // this.siteLanguage =
    //   this.languageList.find((lang) => lang.code === this.siteLocale)?.label ||
    //   'English';
  }
  // onClick(siteLang: string): void {
  //   console.log('language is ', siteLang);
  //   this.siteLocale = window.location.pathname.split('/')[1];
  //   window.location.reload();
  // }
}
