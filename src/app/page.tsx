import { SignedIn,SignedOut,SignInButton,UserButton,SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const authuser = await currentUser();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {authuser ? <CreatePost/>: null}
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        WhoToFollow

      </div>
      

    </div>
  );
}
