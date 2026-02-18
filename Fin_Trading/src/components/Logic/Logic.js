import { useState } from "react";

export const useCategoryFilter = (products) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getFilteredProducts=(items)=>{
     if (selectedCategory === 'all') return items;
    return items.filter(product => product.category === selectedCategory);
  }

  const filteredProducts = getFilteredProducts(products)

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return [selectedCategory, setSelectedCategory, filteredProducts, categories];
};

export const useGetInStock=(products)=>{
  const [inStockOnly,setInStockOnly]=useState(true);
  
  const getInStockProducts=(items)=>{
    if (!inStockOnly) return items;
    return items.filter(product=>product.inStock==true)
  }
  const inStockFilteredProducts=getInStockProducts(products)

  return [inStockOnly,setInStockOnly,inStockFilteredProducts];
}
export const useSortLogic=(products)=>{
    const [sortBy, setSortBy] = useState('default');

    const getSortedProducts = (items) => {

    // Always spread to avoid mutating the original array
    const copy = [...items];

    if (sortBy === 'price-low-high') {
      return copy.sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'price-high-low') {
      return copy.sort((a, b) => b.price - a.price);
    }

    if (sortBy === 'name-az') {
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === 'rating') {
      return copy.sort((a, b) => b.rating - a.rating);
    }

    return copy; // default — original order
  };

  const sortedProducts=getSortedProducts(products)
    // Default: return original order
    return [
        sortBy,
        setSortBy,
        sortedProducts
    ];

}