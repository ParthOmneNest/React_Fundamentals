// inline object type annotation
const user:{name:string,age:number,isActive:boolean}={
    name:'Parth',age:21.00,isActive:true
}

 
// Access — TypeScript knows the type of each property
console.log(user.name.toUpperCase()); // ✅ string method
console.log(user.age.toFixed(2));     // ✅ number method
console.log(user.isActive);             // ✅ boolean
// if tried to access wrong property type then typescript catches and will give error

// ─── OPTIONAL PROPERTIES using ? ──────────────────────────
const user2:{name2:string,phone?:number}={name2:'Soham'}
//phone is not required here TS will not say anything

// ─── READONLY PROPERTIES ──────────────────────────────────
const config: {
  readonly apiUrl: string;   // ← cannot be changed after creation
  timeout: number;
} = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

config.timeout=3400 // Allowed
// config.apiUrl='https://' // Not Allowed as it's a read-only property