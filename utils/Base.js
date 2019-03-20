import config from '../configs/app';
import {browser} from "protractor";

const EC = protractor.ExpectedConditions;

class Base {
  get baseUrl() { return browser.get(config.baseUrl); }

  /**
   * This class property enables use of specific functions 'isDisplayed' and 'waitUntilDisplayed'
   * @type {ElementFinder}
   */
  get selector() { return undefined; }
  get waitUntilDisplayedTimeout() { return 10000; }
  get waitUntilElementDisplayedTimeout() { return 10000; }

  get() {
    browser.get(this.url);
    return this.waitUntilDisplayed();
  }

  /**
   * @returns Function which resolves to boolean
   */
  isDisplayed() {
    this.checkSelectorExist();

    return EC.visibilityOf(this.selector)();
  }

  /**
   * Wait until this page is displayed.
   */
  waitUntilDisplayed() {
    this.checkSelectorExist();

    return browser.wait(
      () => this.isDisplayed(),
      this.waitUntilDisplayedTimeout,
      `Failed while waiting for "${this.selector.locator()}" of Page Object Class '${this.constructor.name}' to display.`,
    );
  }

  isElementDisplayed(el) {
    return EC.visibilityOf(el)();
  }

  waitUntilElementDisplayed(el) {
    return browser.wait(
      () => this.isElementDisplayed(el),
      this.waitUntilElementDisplayedTimeout,
      `Failed while waiting for "${el.locator()}" of Page Object Class '${this.constructor.name}' to display.`,
    );
  }


  isClickable(el) {
    return EC.elementToBeClickable(el);
  }

  hasText(el, text) {
    return EC.textToBePresentInElement(el, text);
  }

  titleIs(title) {
    return EC.titleIs(title);
  }

}

export default Base;
