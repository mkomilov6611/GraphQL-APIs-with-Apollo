const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addProduct,
  addProductReview,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, { min, max }) => {
      return getProductsByPrice(min, max);
    },
    productById: (_, { id }) => {
      return getProductById(id);
    },
  },
  Mutation: {
    addProduct: (_, { id, description, price }) => {
      return addProduct(id, description, price);
    },
    addProductReview: (_, { id, rating, comment }) => {
      return addProductReview(id, rating, comment);
    },
  },
};
