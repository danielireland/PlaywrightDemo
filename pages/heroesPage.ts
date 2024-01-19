import { expect, type Locator, type Page } from '@playwright/test';
import { text } from 'stream/consumers';

export class HeroesPage {

  readonly page: Page;
  readonly heroText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroText = page.locator(`[class="herogridpage_HeroName_3N-bh"]`);
  }

  async hoverHeroIcon(hero: string) {
    await this.page.locator(`[href="/hero/${hero}"]`).hover();
  }

  async heroNameShown(hero: string) {
    return await this.heroText.getByText(`${hero}`).isVisible();
  }

}
