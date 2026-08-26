import React, { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

function App() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(form);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  }

  function handleRememberMeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      rememberMe: e.target.checked,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <label htmlFor="rememberMe">Remember Me: </label>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          checked={form.rememberMe}
          onChange={handleRememberMeChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default App;
