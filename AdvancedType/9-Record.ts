{
  /*
  타입들을 묶고싶을 때, 키와 밸류로 삼고싶을 때 사용한다.
  type Record<K extends keyof any, T> = {
    [P in K]: T;
};
   */
  type Page = 'home' | 'about' | 'contact'

  type PageInfo = {
    title: string;
  }

  const nav: Record<Page, PageInfo> = { // Page 를 키로, PageInfo 를 밸류로 삼는다.
    home: {title: 'Home!'},
    about: {title: 'About!'},
    contact: {title: 'Contact!'}
  }
}