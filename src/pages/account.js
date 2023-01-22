import Header from "@/components/Header"
import { useSession, signIn, signOut } from "next-auth/react"

export default function AccountPage() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <Header/>
      <div className="flex flex-col justify-center items-center h-screen text-lg">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      </>
    )
  }
  return (
    <>
      <Header/>
    <div className="flex flex-col justify-center items-center h-screen text-lg">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
    </>
  )
}