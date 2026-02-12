import { useState } from "react"

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Simple Validation checks
    if (name === "" || email === "" || password === "") {
      alert("All fields are required!");
    } else if (password !== confirm) {
      alert("Passwords do not match!");
    } else {
      alert("Account created for " + name);
    }
  };

  return (
    <form onSubmit={handleSignup} 
    style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '10px', 
        maxWidth: '200px', margin: 'auto' }}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)} />
      <button type="submit">Create Account</button>
    </form>
  )
}