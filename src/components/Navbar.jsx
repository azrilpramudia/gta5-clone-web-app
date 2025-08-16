const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold font-family-poppins">
          GTA 5 Clone
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6 font-family-poppins font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Overview</li>
          <li className="hover:text-yellow-400 cursor-pointer">GTA Online</li>
          <li className="hover:text-yellow-400 cursor-pointer">Story</li>
          <li className="hover:text-yellow-400 cursor-pointer">GTA+</li>
          <li className="hover:text-yellow-400 cursor-pointer">Community</li>
          <li className="hover:text-yellow-400 cursor-pointer">Support</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
