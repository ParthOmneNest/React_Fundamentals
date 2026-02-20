// type keyword creates a reusable name for any type

type names=string

const firstName:names='Parth'

// ─── UNION TYPES — value can be ONE of several types ──────
// it can contain numbers,strings,boolean tyoe
type option='BUY' | 'SELL'|1|0
let order:option='BUY'
order='SELL'
// order='pop' // error not in the union

// ─── INTERSECTION TYPES — combine multiple types ───────────
type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};
 
type StockInfo = {
  symbol: string;
  price: number;
};
 
// Intersection: must have ALL properties from BOTH
type StockRecord = StockInfo & Timestamps;

const stock:StockRecord={
    symbol: "TCS",
  price: 3810.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}

 
// ─── TYPE vs INTERFACE — When to Use Which ─────────────────
// Use interface for: object shapes, class contracts, extendable types
// Use type for:      unions, intersections, primitives, complex combinations
