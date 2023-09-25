import { Button } from '@/components/ui/button'
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main>
      <Button>Oh boi</Button>
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}
