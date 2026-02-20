// Style 1: Type followed by []
const prices:number[]=[100.3,450,-9]
const names:string[]=['rohan','shoam']

// Style 2: Generic Array<Type> — same result, different look
const vol:Array<number>=[3000,2000,500]
prices.push(450)

const firstName=names[0]
firstName.toUpperCase()

// ─── TUPLES — FIXED LENGTH, FIXED TYPES ────────────────────
// A tuple is an array where each position has a specific type

const user:[string,number,number]=['Parth',21,401101]
const name=user[0] // TypeScript knows it is a string
const age=user[1] // TypeScript knows it is a number
const district=user[2] // TypeScript knows it is a number

// if put a number in place where a string is then error will be thrown

 
// ─── 2D ARRAYS ────────────────────────────────────────────
// Array of arrays
const orders:number[][]=[
    [1000,200],
    [230,344,56],
    [12,123,345,56],
]
