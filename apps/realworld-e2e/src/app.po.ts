import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<string> {
    return browser.get(browser.baseUrl) as Promise<string>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1.logo-font')).getText() as Promise<string>;
  }
}
