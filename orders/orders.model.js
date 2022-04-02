const orders = [
  {
    date: "2022-01-01",
    subtotal: 99,
    items: [
      {
        product: {
          id: "a1",
          price: 21,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
