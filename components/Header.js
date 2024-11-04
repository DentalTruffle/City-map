import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="bg-zinc-50 w-full shadow-lg py-5">
    <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between">
      <NavbarBrand>
        <p className="font-bold dark:border-gray-500 text-1xl mt-5 justify-start">NOMAD TRAVEL</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10 text-xl font-bold text-lime-500 justify-center flex-grow">
        <NavbarItem>
          <Link color="foreground" href="/homepage">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/country-page" aria-current="page">
            Destinations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/favourites">
            Favourites
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="text-1xl font-bold dark:border-gray-500 gap-5 ml-20">
        <NavbarItem className="hidden lg:flex underline decoration-solid">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="underline decoration-solid">
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </div>
  </Navbar>
  )}