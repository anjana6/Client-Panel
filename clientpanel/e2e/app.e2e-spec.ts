import { ClientpanelPage } from './app.po';

describe('clientpanel App', function() {
  let page: ClientpanelPage;

  beforeEach(() => {
    page = new ClientpanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
