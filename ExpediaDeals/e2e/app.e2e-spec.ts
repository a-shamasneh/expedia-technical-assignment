import { ExpediaDealsPage } from './app.po';

describe('expedia-deals App', () => {
  let page: ExpediaDealsPage;

  beforeEach(() => {
    page = new ExpediaDealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
