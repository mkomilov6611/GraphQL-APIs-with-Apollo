const products = [
  {
    id: "a1",
    description: "Just a red shoe",
    price: 22.9,
    reviews: [],
  },
  {
    id: "b1",
    description: "Just a blue jeans",
    price: 32.9,
    reviews: [
      {
        rating: 5,
        comment: "OMG, havent seen this quality before",
      },
    ],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);

  return newProduct;
}

function addProductReview(id, rating, comment) {
  products.forEach((product) => {
    if (product.id === id) {
      product.reviews.push({ rating, comment });
    }
  });

  return { rating, comment };
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addProduct,
  addProductReview,
};
