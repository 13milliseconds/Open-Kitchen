import Head from "next/head"
import LoginButton from "../LoginButton/LoginButton"
import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "../LogoutButton/LogoutButton"
import Link from "next/link"

const menuItems = [
  {name: "Profile", url: "/profile"},
  {name: "Recipes", url: "/recipes"}
]

export default function Header () {
    const { isAuthenticated} = useAuth0()
    return <header className="flex p-4 justify-between">
        <Head>
            <title>Open Kitchen</title>
        </Head>
        <Link href="/">
        <h1 className='text-3xl font-bold'>Open Kitchen V1</h1>
      </Link>
      <ul className="flex">
        { menuItems.map((item) => <li className="pr-2" key={item.name}><Link href={item.url} className="hover:text-blue-500">{item.name}</Link></li>)}
      </ul>
      {isAuthenticated 
        ?  <LogoutButton /> 
        : <LoginButton />
      }
    </header>
}