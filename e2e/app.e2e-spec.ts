import { LbsOmmWebappPage } from './app.po';

describe('lbs-omm-webapp App', () => {
  let page: LbsOmmWebappPage;

  beforeEach(() => {
    page = new LbsOmmWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
