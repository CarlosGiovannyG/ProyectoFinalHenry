const routes = {
  home: "/",
  menu: "/Menu",
  account: "/account",
  product: (id) => id ? `/product/:${id}` : "/product/:id",
  checkIn: "/checkIn",
  bills: "/bills",
  billClient: (id) => id ? `/billClient/:${id}` : "/billClient/:id",
  bill: (id) => id ? `/bill/:${id}` :"/bill/:id",
};


export default routes;