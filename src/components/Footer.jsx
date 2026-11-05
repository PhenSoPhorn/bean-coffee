function Footer({ items }) {
  return (
    <footer className=" px-6 py-8 md:px-12 bg-gray-900">
      <h3 className="text-footer-text">Bean & Leaf Cafe</h3>
      <div className="flex  justify-between items-center">
        <div className="text-footer-subtle">Open daily . 7:00 AM - 9:00 PM</div>
        <p className="border rounded-2xl px-1.5 pl-0.5 pr-0.5 text-footer-subtle text-xs">
          {items.length} items on the menu
        </p>
      </div>
      <div className="border border-footer-line mt-2 mb-2"></div>
      <p className="text-l text-footer-subtle">2026 Bean & leaf Cafe - Built with React</p>
    </footer>
  );
}

export default Footer;
