import image from 'next/image';
export default function Home() {
  return (
    <div>
      <div className="main-div">
        <header className="content">
        <h4 className="heading">Coffee</h4>
        <nav className="nav-links">
          <span>Home</span>
          <span>About</span>
          <span>Menu</span>
          <span>Testimonials</span>
          <span>Gallery</span>
          <span>Contact</span>
          </nav>
          </header>
        </div>
        <div className="description">
          <h4 className="search">Best Coffee</h4>
          <p className="me">Make your day great with our <br/> special coffee!</p>
          <p className="section">Welcome to our coffee paradise where every bean tells <br/> a story and every cup sparks joy.</p> 
        </div>
        <div className="install">
          <button className="my-button">Order Now</button>
          <button className="mine">Contact Us</button>
        </div>
        <div className="container">
          <img src="mypic.jpg" className="photos"/>
        </div>
      </div>
  );
}