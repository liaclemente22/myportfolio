import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Lia Almida Clemente. All rights reserved.</p>
        <p>
          Built with <span>React</span> & <span>Bootstrap</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
