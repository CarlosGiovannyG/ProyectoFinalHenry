
import routes from './Routes'

const links = {

  notLogin : [
    { id: 1, title: 'HOME', path: routes.home },
    { id: 2, title: 'MENU', path: routes.menu },
    { id: 3, title: 'ABOUT US', path: routes.about },
    { id: 4, title: 'CONTACT', path: routes.contact },
    { id: 5, title: 'CHECK IN', path: routes.bills },
    { id: 6, title: 'KITCHEN', path: routes.kitchen },
    { id: 7, title: 'ACCOUNT', path: routes.account },
    { id: 8, title: 'SHOPPING', path: routes.UserMainPage },
  ],
  isLogin : [
    { id: 1, title: 'HOME', path: routes.home },
    { id: 2, title: 'MENU', path: routes.menu },
    { id: 3, title: 'SHOPPING', path: routes.cart },
    { id: 4, title: 'ACCOUNT', path: routes.account },
    { id: 5, title: 'ABOUT US', path: routes.about },
    { id: 6, title: 'CONTACT', path: routes.contact },
  ],
   iscashier : [
    { id: 1, title: 'MENU', path: routes.menu },
    { id: 2, title: 'ACCOUNT', path: routes.account },
    { id: 3, title: 'CHECK IN', path: routes.bills },
  ],
  iscook: [
    { id: 1, title: 'MENU', path: routes.menu },
    { id: 2, title: 'ACCOUNT', path: routes.account },
    { id: 3, title: 'KITCHEN', path: routes.kitchen },
  ],
  isAdmin: [
    { id: 1, title: 'HOME', path: routes.home },
    { id: 2, title: 'MENU', path: routes.menu },
    { id: 3, title: 'ACCOUNT', path: routes.account },
  ],

};

export default links;
