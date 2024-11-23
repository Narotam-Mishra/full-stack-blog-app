
const Navbar = () => {
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" alt="Logo_image" />
        <span>mylog</span>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">M</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">D</div>
    </div>
  );
}

export default Navbar