const routes = {
  home: "/",
  menu: "/Menu",
  account: "/account",
  logout: "/logout",
  cart: "/cart",
  about: "/about",
  contact: "/contact",
  bills: "/bills",
  kitchen: '/kitchen',


  billClient: (id) => id ? `/billClient/:${id}` : "/billClient/:id",
  bill: (id) => id ? `/bill/:${id}` : "/bill/:id",
  UserMainPage: '/UserMainPage',
  cart: '/Cart',
  AdminMainPage: '/AdminMainPage'
};


export default routes;