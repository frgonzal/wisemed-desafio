
function Header() {
  return (
    <header className="bg-[var(--primary)] text-white p-4 flex justify-between items-center px-12">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <span>Qx</span>
          <span className="text-green-400">Wise</span>
        </div>
      </div>
      <div className="flex items-cente gap-10">
        <p>Médico</p>
        <div className="flex items-center justify-center bg-green-300 rounded-full p-1 w-8">
          <p className="text-primary">MJ</p>
        </div>
      </div>
    </header>
  );
}

export default Header;