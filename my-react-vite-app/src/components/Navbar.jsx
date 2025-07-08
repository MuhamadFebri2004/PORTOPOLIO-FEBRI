import { useState, useEffect } from "react"

const Navbar = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portofolio
        </h1>
      </div>

      {/* MENU */}
      <ul
        className={`
          flex items-center gap-4 text-base font-medium
          fixed top-0 left-1/2 -translate-x-1/2
          bg-white/10 backdrop-blur-md px-6 py-3 rounded-b-2xl shadow-md z-40
          transition-all duration-300
          ${active ? "opacity-100" : "opacity-90"}
          md:static md:top-auto md:left-auto md:translate-x-0
          md:bg-transparent md:shadow-none md:rounded-none
        `}
      >
        <li>
          <a href="#" className="hover:text-violet-400 transition">Beranda</a>
        </li>
        <li>
          <a href="#" className="hover:text-violet-400 transition">Tentang</a>
        </li>
        <li>
          <a href="#" className="hover:text-violet-400 transition">Proyek</a>
        </li>
        <li>
          <a href="#" className="hover:text-violet-400 transition">Kontak</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
