import { AuthingPage } from './app.po';

describe('authing App', () => {
  let page: AuthingPage;

  beforeEach(() => {
    page = new AuthingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
