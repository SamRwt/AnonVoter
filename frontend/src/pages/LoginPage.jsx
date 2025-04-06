import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>Welcome to AnonVoter</h1>
      <form >
        <input
          type= "text"
          placeholder= "Enter Voter ID"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;