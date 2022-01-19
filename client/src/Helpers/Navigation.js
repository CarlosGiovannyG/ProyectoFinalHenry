
import routes from './Routes'

const links = {

  notLogin: [
    { id: 1, title: 'HOME', path: routes.home },
    { id: 2, title: 'MENU', path: routes.menu },
    { id: 3, title: 'ABOUT US', path: routes.about },
    { id: 4, title: 'CONTACT', path: routes.contact },

  ],
  isLogin: [
    { id: 1, title: 'HOME', path: routes.home },
    { id: 2, title: 'ORDER', path: routes.UserMainPage },
    { id: 3, title: 'ACCOUNT', path: routes.account },
    { id: 4, title: 'ABOUT US', path: routes.about },
    { id: 5, title: 'CONTACT', path: routes.contact },

    // 
    // { id: 7, title: 'CHECK IN', path: routes.bills },
    // { id: 8, title: 'KITCHEN', path: routes.kitchen },
  ],
  iscashier: [
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
    { id: 4, title: 'ADMIN PAGE', path: routes.AdminMainPage },
  ],

};

export default links;
