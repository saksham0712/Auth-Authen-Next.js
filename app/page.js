import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full h-[100vh] bg-gray-900 flex content-center items-center text-white">
      <div className="mx-auto w-80">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <h1 className="text-6xl">Welcome,</h1>
          <p>Authentication and Authorisation</p>
          <div className="flex gap-2">
            <Link
              className="py-1 text-center bg-blue-500 text-white rounded-md w-40"
              href="/signin"
            >
              SignIn
            </Link>
            <Link
              className="py-1 text-center bg-blue-500 text-white rounded-md w-40"
              href="/signup"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
