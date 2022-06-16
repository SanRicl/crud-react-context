export default (state, action) => {
  switch (action.type) {
    case "CREATE_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "DELETE_PRODUCTS":
      return {
        ...state,
        products: state.products.filter(
          (products) => products.id !== action.payload
        ),
      };
    case "EDIT_PRODUCTS":
      const editingProduct = action.payload;
      const updatedProduct = state.products.map((products) => {
        if (products.id === editingProduct.id) {
          return editingProduct;
        }
        return products;
      });
      return {
        ...state,
        products: updatedProduct,
      };

    default:
      return state;
  }
};
