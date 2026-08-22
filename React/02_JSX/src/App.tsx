function App() {
  const name = "Shehram";
  const isLoggedIn = true;

  // JSX must have one parent
  // return (<h1>Hello, React!</h1>
  // <p>I am learning React</p>);

  // return (
  //   <div>
  //     <h1>Hello, React!</h1>
  //     <p>I am learning React</p>
  //   </div>
  // );

  // We can also use React fragment to avoid unnecessary html element
  return (
    <>
      {/* Mixing JSX and JS/TS Expressions  */}
      <h1>Hello, {name}!</h1>
      <p>{isLoggedIn ? "Welcome Back" : "Welcome"}</p>

      {/* JS Statements are not allowed in JSX */}
      {/* <p>{if(true){"Yes"}}</p> */}

      {/* JSX attributes */}
      <img src="" alt="" />
      
      {/* class attributes is not allowed */}
      <div className="hero"></div>

      {/* for attributes is replaced with htmlFor */}
      <label htmlFor=""></label>
    </>
  );
}

export default App;
