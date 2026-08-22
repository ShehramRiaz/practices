function Logo() {
  return <h1>App Logo</h1>;
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <Logo />
      <Navbar />
    </header>
  );
}

function Product() {
  return (
    <div>
      <h3>Product Name</h3>
      <p>Product Description</p>
      <p>$55.6</p>
    </div>
  );
}

function Main() {
  return (
    <main>
      <h2>Products</h2>
      <Product />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; Copyright 2026</p>
    </footer>
  );
}

// function smallcase() {
//   return <p>Small Case</p>;
// }

function App() {
  return (
    <>
      <Header />
      {/* Error - First letter must be capitalized */}
      {/* <smallcase></smallcase>  */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
