const routes = {
  home: "/",
  menu: "/Menu",
  account: "/account",
  checkIn: "/checkIn",
  bills: "/bills",
  billClient: (id) => id ? `/billClient/:${id}` : "/billClient/:id",
  bill: (id) => id ? `/bill/:${id}` : "/bill/:id",
  chickend: '/chickend',
};


export default routes;