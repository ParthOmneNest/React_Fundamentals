// 1. Basic function with types
function add(a: number, b: number): number {
  return a + b;
}
add(10,20)
add(23.4,45.6)

// 2. Function returning a string
function formatPrice(price: number, currency: string): string {
  return `${currency} ${price.toFixed(2)}`;
}
 
formatPrice(2547.5, "₹");  // Returns "₹ 2547.50"

// 3. Void return — function doesn't return a value
function logTrade(symbol: string, qty: number): void {
  console.log(`Traded ${qty} shares of ${symbol}`);
}
 
// 4. Optional parameters using ?
function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

greetUser("Ravi");             // "Hello, Ravi!"
greetUser("Kumar", "Mr.");     // "Hello, Mr. Kumar!"

// 5 Default params
export function calc(a:number,b:number=10):number{
    return a+b
}
calc(10,20) // calc=10+20
calc(20) // take default val of b=10

// 6 Arrow functions
export const mul=(a:number,b:number):number=>a*b

// 7 Function type as a variable
type MathOperation=(a:number,b:number)=>number

export const add1:MathOperation=(a,b)=>a+b
export const sub:MathOperation=(a,b)=>a-b