import { CliJknIIIPage } from './app.po';

describe('cli-jkn-iii App', () => {
  let page: CliJknIIIPage;

  beforeEach(() => {
    page = new CliJknIIIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
