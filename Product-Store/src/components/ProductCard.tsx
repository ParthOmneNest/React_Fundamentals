import { useState } from "react";
import type { Product } from "../types/product";

//define the type of rpop this component accepts

interface ProductCardProps{
    product:Product
}

export const ProductCard=({product}:ProductCardProps)=>{

      const cardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "220px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: "#fff",
  };
 
  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "160px",
    objectFit: "contain",   // keeps the image proportions
  };
 
  const titleStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "bold",
    margin: 0,
    // Only show 2 lines — cut off the rest with ...
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
 
  const priceStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#15803D",  // green colour for price
    fontWeight: "bold",
    margin: 0,
  };
 
  const categoryStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#64748B",  // grey colour for category label
    textTransform: "capitalize",
    margin: 0,
  };
 
  const ratingStyle: React.CSSProperties = {
    fontSize: "13px",
    color: "#B45309",  // amber colour for rating
    margin: 0,
  };

  const [showDescription, setShowDescription] = useState<boolean>(false);
    return(
        <div style={cardStyle}>
            <img
              src={product.image}
              alt={product.title}
              style={imgStyle}
            />
 
              {/* Category label */}
              <p style={categoryStyle}>{product.category}</p>

              {/* Product title — TypeScript knows this is a string */}
              <p style={titleStyle}>{product.title}</p>

              {/* Price — TypeScript knows this is a number so .toFixed(2) works */}
              <p style={priceStyle}>${product.price.toFixed(2)}</p>

              {/* Rating — TypeScript knows rating.rate and rating.count are numbers */}
              <p style={ratingStyle}>
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </p>
            <button onClick={() => setShowDescription   (!showDescription)}>
                {showDescription ? "Hide Details" : "Show Details"}
            </button>

            {showDescription && <p style={{fontSize:'12px'}}>{product.description}</p>}
        </div>
    )
}