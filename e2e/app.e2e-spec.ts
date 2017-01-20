import { GoldenPage } from './app.po';

describe('golden App', function() {
  let page: GoldenPage;

  beforeEach(() => {
    page = new GoldenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
