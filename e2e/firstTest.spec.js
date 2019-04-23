describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await device.launchApp({delete: true});

  });

  it('detox has worked', async () => {
    await element(by.id('for-detox')).tap();
    await expect(element(by.id('for-detox'))).toHaveText('ForDetoxTest 19999');
  });


});

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await device.launchApp({delete: true});

  });

  it('detox has worked', async () => {
    await element(by.id('for-detox')).tap();
    await expect(element(by.id('for-detox'))).toHaveText('ForDetoxTest 19999');
  });



});