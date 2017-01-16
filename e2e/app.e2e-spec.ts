import { OpenposwebPage } from './app.po';

describe('openposweb App', function() {
  let page: OpenposwebPage;

  beforeEach(() => {
    page = new OpenposwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
