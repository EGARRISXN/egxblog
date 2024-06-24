import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl font-semibold pt-2">Page not found!</p>
      <br />
      <Link href="/">
        <button className="px-8 bg-blue-500 border-2 rounded-lg shadow-lg">
          Home
        </button>
      </Link>
    </div>
  );
}
