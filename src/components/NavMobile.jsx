export default function NavMobile({mobileMenuOpen, setMobileMenuOpen}) {

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <button className="m-2 pr-4" onClick={() => toggleMobileMenu()}>
        <div className="bg-black h-0.5 w-4"></div>
        <div className="bg-white h-0.5 w-4"></div>
        <div className="bg-black h-1 w-4"></div>
        <div className="bg-white h-0.5 w-4"></div>
        <div className="bg-black h-1 w-4"></div>
        <div className="bg-white h-0.5 w-4"></div>
        <div className="bg-black h-0.5 w-4"></div>
      </button>
    </>
  );
}
