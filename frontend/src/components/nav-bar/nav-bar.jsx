import "./nav-bar.css";
function NavBar() {
  return (
    <>
      <div className="navbar-wrapper">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Artworks</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
