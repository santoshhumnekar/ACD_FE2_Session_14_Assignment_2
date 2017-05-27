import { HttpAPIPage } from './app.po';

describe('http-api App', function() {
  let page: HttpAPIPage;

  beforeEach(() => {
    page = new HttpAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
