function Header() {
  return (
    <header className="bg-brand-dark px-6 py-8 md:px-12">
      <p className="text-brand-label text-sm font-medium uppercase tracking-wider">OUR MENU</p>
      <h1 className="text-white text-3xl font-semibold tracking-tight my-1">Bean & Leaf Cafe</h1>
      <div className="flex items-center gap-2 text-sm text-brand-text/80">
        <span>Open daily - 7:00 AM - 9:00 PM</span>
        <span>.</span>
        <span>Phnom Penh, Cambodia</span>
      </div>
    </header>
  );
}

export default Header;
