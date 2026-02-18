import { products } from '../utils/products';
import { ProductCard } from '../components/ProductCard';
import { useSortLogic, useCategoryFilter,useGetInStock} from '../components/Logic/Logic.js';
import { SortFilter } from '../components/Sort&Filter/SortFilter.jsx';
import { CategoryFilter } from '../components/Sort&Filter/CategoryFilter.jsx';
import { InOutStockFilter } from '../components/Sort&Filter/InOutStockFilter.jsx';
import { useState } from 'react';

export const Products=()=> {
  const [selectedCategory, setSelectedCategory, filteredProducts, categories] = useCategoryFilter(products);
  const [inStockOnly,setInStockOnly,inStockFilteredProducts]=useGetInStock(filteredProducts)
  const [sortBy,setSortBy,finalDisplayedProducts] = useSortLogic(inStockFilteredProducts)

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-commerce Product Catalog</h1>
      
      {/* for sorting logic and all */}
    <SortFilter sortBy={sortBy} setSortBy={setSortBy}/> 
    {/* for filter by category */}
    <CategoryFilter 
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
    categories={categories}/>

    <InOutStockFilter
    inStockOnly={inStockOnly}
    setInStockOnly={setInStockOnly}
    />
      {/* Product Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {finalDisplayedProducts
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
