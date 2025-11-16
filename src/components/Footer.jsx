function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#282c34', color: 'white', marginTop: '20px' }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
