import NavbarItems from "./NavbarItems"


const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-[#EBCB90] p-3 w-3/4 m-auto rounded-2xl border-2 border-white sticky top-4 shadow-md z-50 ">
      <NavbarItems icon="../images/house.png" click="HOME" to="/" />
      <NavbarItems icon="../images/social-media.png" click="Posts" to="/post" />
      <NavbarItems icon="../images/profil.png" click="Profile" to="/profile" />
      <NavbarItems icon="../images/pen.png" click="Login" to="/register" />
    </div>
  )
}

export default Navbar