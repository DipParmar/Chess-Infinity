import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLogo() {
    return element(by.css('.navbar-brand')).getText() as Promise<string>;
  }
}
