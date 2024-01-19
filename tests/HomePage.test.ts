import { test, expect } from '@playwright/test';
import { DotaTestPage } from '../pages/dotaTestPage';

test('pressing the heroes tab should take you to the heroes page', async ({ page }) => {
  const dotaTest = new DotaTestPage(page);
  await dotaTest.goto();
  await dotaTest.heroesPageNav();
  await expect(dotaTest.heroesDescription).toContainText([
    `From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse.`
  ]);
});
