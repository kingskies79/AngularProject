import { SkylinePage } from './app.po';

describe('skyline App', () => {
  let page: SkylinePage;

  beforeEach(() => {
    page = new SkylinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
