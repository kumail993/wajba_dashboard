import  './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Your Website Name</p>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
