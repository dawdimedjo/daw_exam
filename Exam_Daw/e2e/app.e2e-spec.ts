import { UjianSalomoPage } from './app.po';

describe('ujian-salomo App', () => {
  let page: UjianSalomoPage;

  beforeEach(() => {
    page = new UjianSalomoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
