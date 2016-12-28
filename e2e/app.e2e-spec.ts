import { TestProject2Page } from './app.po';

describe('test-project2 App', function() {
  let page: TestProject2Page;

  beforeEach(() => {
    page = new TestProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
