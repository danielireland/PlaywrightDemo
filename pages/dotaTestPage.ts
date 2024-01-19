import { expect, type Locator, type Page } from '@playwright/test';
import config from '../config.json';


export class DotaTestPage {
  
  readonly page: Page;
  readonly heroesLink: Locator;
  readonly heroesHeader: Locator;
  readonly heroesDescription: Locator;


  constructor(page: Page) {
    this.page = page;
    this.heroesLink = page.locator('[class="microheader_NavLink_15Uwp"]', { hasText: 'Heroes' });
    this.heroesHeader = page.locator('[class="herogridpage_TitleText_2sbq3"]');
    this.heroesDescription = page.locator('[class="herogridpage_SubtitleText_Q3COY"]');
  }

  async envSetup(){

    var envBaseUrl: string;

    switch(config.env){
      case "QA": {
        envBaseUrl = 'https://www.dota2.com/home';
        break;
      }
      default:
        envBaseUrl = 'https://www.google.com';
    }
    return envBaseUrl;
  }

  async goto() {
    console.log(await this.envSetup());
    await this.page.goto(await this.envSetup());
  }

  async heroesPageNav() {
    await this.heroesLink.click();
    await expect(this.heroesHeader).toBeVisible();
  }

}