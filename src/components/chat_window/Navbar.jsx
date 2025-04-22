const Navbar = ({ username }) => (
  <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
    <h3>{username}</h3>
    <button className="text-white" onClick={() => window.history.back()}>
      Back
    </button>
  </div>
);

export default Navbar;
