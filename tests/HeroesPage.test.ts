import { test, expect } from '@playwright/test';
import { HeroesPage } from '../pages/heroesPage';
import { DotaTestPage } from '../pages/dotaTestPage'


const heroHoverData = [
  "chen",
  "clockwerk",
  "lich",
  "gyrocopter"
]

heroHoverData.forEach( data => {

  test(`hovering over ${data}`, async ({ page }) => {
    const dotaTest = new DotaTestPage(page);
    await dotaTest.goto();
    await dotaTest.heroesPageNav();
    const heroesTest = new HeroesPage(page);
    await heroesTest.hoverHeroIcon(data);
    expect(await heroesTest.heroNameShown(data)).toBe(true);
  });
  
})
