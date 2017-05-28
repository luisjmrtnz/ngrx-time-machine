import { NgrxTimeMachinePage } from './app.po';

describe('ngrx-time-machine App', () => {
  let page: NgrxTimeMachinePage;

  beforeEach(() => {
    page = new NgrxTimeMachinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
