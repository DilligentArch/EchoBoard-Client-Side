const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-200 py-10max-w-screen-2xl mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-white">EchoBoard</h2>
            <p>
              EchoBoard is your go-to platform for sharing and discovering reliable service reviews. 
              Join us in building a community that values transparency and trust.
            </p>
            <p className="text-sm">&copy; {new Date().getFullYear()} EchoBoard. All rights reserved.</p>
          </div>
  
          {/* Useful Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary">Services</a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-primary">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Partners Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Our Partners</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  TrustPilot
                </a>
              </li>
              <li>
                <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  MongoDB
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Firebase
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Divider and Social Links */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="mb-4">Follow us on</p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  