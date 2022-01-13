const routes = {
  home: "/",
  menu: "/Menu",
  account: "/account",
  checkIn: "/checkIn",
  bills: "/bills",
  kitchen: '/kitchen',
  billClient: (id) => id ? `/billClient/:${id}` : "/billClient/:id",
  bill: (id) => id ? `/bill/:${id}` : "/bill/:id",
  UserMainPage: '/UserMainPage',
};


export default routes;