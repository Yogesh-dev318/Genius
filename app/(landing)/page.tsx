import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignOutButton } from '@clerk/nextjs'
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      Landing Page
      <Link href="/sign-in">
        <Button>
            Sign-In
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button>
            Sign-Up
        </Button>
      </Link>
    </div>
  );
}
