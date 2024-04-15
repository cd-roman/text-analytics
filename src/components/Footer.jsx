export default function Footer() {
  return (
    <footer className="footer">
      <small>{getCurrentYear()} Text Analytics</small>
      <small>React demo app</small>
    </footer>
  );
}

function getCurrentYear() {
  return new Date().getFullYear();
}
