import { useState,useEffect } from 'react'
import './App.css'
import type { Product } from './types/product'
import { ProductCard } from './components/ProductCard'

function App() {
    // products: an array of Product objects. Starts empty.
  const [products, setProducts] = useState<Product[]>([])

  const[isLoading,setIsLoading]=useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);

  const[selectedCategory,setSelectedCategory]=useState<string>("all")
  // get unique categories from product array
  const categories:string[]=["all",...new Set(products.map(p=>p.category))]

  // filter the products before mapping
  const filteredProducts=selectedCategory==="all"?products:products.filter(p=>p.category===selectedCategory)

  useEffect(()=>{
    setIsLoading(true)
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      if(!res.ok) throw new Error("Server returned an error: "+res.status)
        return res.json()
    }).then((data:Product[])=>{
        // 'data' is now an array of Product objects from the API
        setProducts(data)
    }).catch((err:Error)=>{setError(err.message)
    }).finally(()=>setIsLoading(false))
  },[])

    // CASE 1: Still waiting for the API response
if (isLoading) {
  return (
    <div className='loading-skeleton' style={{ padding: "24px" }}>
      <h1>Product Store</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "24px" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} style={{
            width: "220px", height: "320px",
            backgroundColor: "#E2E8F0",
            borderRadius: "8px",
          }} />
        ))}
      </div>
    </div>
  );
}

 
  // CASE 2: An error happened during the fetch
  if (error !== null) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial", color: "red" }}>
        <p>Something went wrong: {error}</p>
        <p>Check your internet connection and refresh the page.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px" }}>
 
      {/* Page heading */}
      <h1 style={{ marginBottom: "8px" }}>Product Store</h1>
      <p style={{ color: "#64748B", marginBottom: "24px" }}>
        {products.length} products loaded from fakestoreapi.com
      </p>
      {/* Category Filter */}
      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="category-select" style={{ marginRight:      "12px", fontWeight: "bold" }}>
          Filter by Category:
        </label>
        <select 
          id="category-select"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border:       "1px solid #CBD5E1" }}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      {/* Product grid — flexbox wrapping */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        alignItems:'flex-start'
      }}>
 
        {/* Loop through every product and create a ProductCard for each */}
        {filteredProducts.map((product: Product) => (
          <ProductCard
            key={product.id}      // React needs a unique key for each item
            product={product}     // pass the product as a prop to ProductCard
          />
        ))}
        </div>
        <div style={{ color: "#64748B", marginBottom: "24px" }}>
        Showing {filteredProducts.length} of {products.length}
        </div>
    </div>
  );
}

export default App
