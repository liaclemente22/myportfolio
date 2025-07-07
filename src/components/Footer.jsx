const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Lia Almida Clemente. All rights reserved.</p>
        <small className="text-muted">Portfolio designed with React & Bootstrap</small>
      </div>
    </footer>
  );
};

export default Footer;
