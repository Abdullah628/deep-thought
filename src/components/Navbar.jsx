import "./styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="navbar-left">
          <img
            src="/src/assets/logo.svg"
            alt="Deep Thought Logo"
            className="logo"
          />
        </div>
        <div className="navbar-right">
          <div className="nav-icons">
            <a className="icon" href="">
              <i className="fa-solid fa-house"></i>
            </a>
            <a className="icon" href="">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </a>
            <a className="icon" href="">
              <i className="fa-solid fa-bell"></i>
            </a>
            
          </div>
          <img
            src="/src/assets/profile.png"
            alt="Profile"
            className="profile-pic"
          />

            <a className="last-icon" href="">
            <i className="fa-solid fa-ellipsis-vertical"></i>
            </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
