// An interface defines what properties an object must have
// it can ponly contain declarations nothing else
// A TypeScript interface is virtual; it only exists for the compiler to check your work and is completely deleted when the code is converted to JavaScript.

interface Stock {
  symbol: string;
  companyName: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  isGainer: boolean;
}
// Now use the interface as a type
const reliance: Stock = {
  symbol: "RELIANCE",
  companyName: "Reliance Industries Ltd",
  price: 2547.35,
  change: 23.50, // here if this is not defined then ERROR: Property 'change' is missing
  changePercent: 0.93,
  volume: 1250000,
  isGainer: true,
};

// ─── INTERFACE WITH OPTIONAL PROPERTIES ───────────────────
interface UserProfile {
  id: Number,
  email:string,
  phone?:Number
}
// export interface Greets{
//     name:string;
// }
// export function Greet({ name }: Greets) {
//     return <h1>Hello, {name}!</h1>;
// }

const userPro:UserProfile={
    id:12,
    email:'12@gmail.com'
}

// ─── EXTENDING INTERFACES ─────────────────────────────────
// Extend = inherit all properties + add more
 
interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
 
interface Order extends BaseEntity {
  // Gets id, createdAt, updatedAt automatically
  stockSymbol: string;
  quantity: number;
  price: number;
}

const myOrder: Order = {
  id: 1001,
  createdAt: new Date(),
  updatedAt: new Date(),
  stockSymbol: "INFY",
  quantity: 50,
  price: 1520.00,
};

