import { Product } from "@/types";

export const contentUtils = {
  processProductData: function (
    data: Product[],
    selectedCategories: String[],
    search: string,
    sortType: string,
    selectedPrice: number[]
  ): Product[] {
    let products = [...data];
    products = this.filterSelectedCategories(products, selectedCategories);
    products = this.searchByProducts(products, search);
    products = this.sortingProducts(products, sortType);
    products = this.sortByAvailable(products);
    products = this.filterSelectedPrice(products, selectedPrice);
    return products;
  },

  filterSelectedCategories: (products: Product[], categories: String[]) => {
    if (categories.length === 0) {
      return products;
    } else {
      return products.filter((product) =>
        categories.includes(product.category)
      );
    }
  },

  filterSelectedPrice: (products: Product[], selectedPrice: number[]) => {
    if (selectedPrice[0] === 0 && selectedPrice[1] === 0) {
      return products;
    } else {
      return products.filter(
        (product) =>
          product.price >= selectedPrice[0] && product.price <= selectedPrice[1]
      );
    }
  },

  searchByProducts: (data: Product[], input: string) => {
    const searchedProducts = data.filter((product) =>
      product.name.trim().toLowerCase().includes(input.trim().toLowerCase())
    );
    return searchedProducts;
  },

  sortingProducts: (products: Product[], sortType: string) => {
    const sortedProducts = [...products];
    const sortTypes = {
      cheap: (a: Product, b: Product) => a.price - b.price,
      expensive: (a: Product, b: Product) => b.price - a.price,
      title: (a: Product, b: Product) =>
        a.name.trim().toLowerCase().localeCompare(b.name.trim().toLowerCase()),
    };
    return sortedProducts.sort(sortTypes[sortType as keyof typeof sortTypes]);
  },

  paginateProducts: (
    products: Product[],
    productsOnPage: number,
    currentPage: number
  ) => {
    const startIndex = (currentPage - 1) * productsOnPage;
    const endIndex = startIndex + productsOnPage;
    return products.slice(startIndex, endIndex);
  },

  sortByAvailable: (data: Product[]) => {
    const availableProducts = data.filter((product) => !!product.sizes.length);
    const notAvailableProducts = data.filter(
      (product) => !product.sizes.length
    );
    return [...availableProducts, ...notAvailableProducts];
  },
};
