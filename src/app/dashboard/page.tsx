import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CreateNoteDialog from "@/components/CreateNoteDialog";
 
export default function Home() {
  return (
    <div className="grainy min-h-screen">
      <div className="max-w-7xl flex justify-center mx-auto p-10">
        <div className="flex justify-between items-center md:flex-row flex-col"></div>
          <div className="flex items-center gap-10">
            <Link className="flex" href="/">
              <Button className="bg-green-600">
                  <ArrowLeft className="w-6 h-6 pr-2" strokeWidth={3} />
                  Back
              </Button>
            </Link>
          <h1 className="text-green-600 text-3xl font-bold">My notes</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <Separator />
      <div className="mt-8 text-center">
        <h2 className="text-xl text-gray-500">You've no notes right now</h2>
      </div>
      <div className="m-10 grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
        <CreateNoteDialog />
      </div>
    </div >
  )
}