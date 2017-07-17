import { FeedAngularPage } from './app.po';

describe('feed-angular App', () => {
  let page: FeedAngularPage;

  beforeEach(() => {
    page = new FeedAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
