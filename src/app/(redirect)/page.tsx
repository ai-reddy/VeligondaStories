import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  if (process.env.GITHUB_PAGES === "true") {
    return (
      <main className="grid min-h-screen place-items-center bg-paper px-6 text-center text-ink">
        <div>
          <meta httpEquiv="refresh" content="0;url=/VeligondaStories/te/" />
          <p className="text-lg font-bold">వెలిగొండ స్టోరీస్ తెరుస్తోంది…</p>
          <p className="mt-3 text-sm text-muted">
            <Link href="/te/" className="text-river underline">Open VeligondaStories</Link>
          </p>
        </div>
      </main>
    );
  }

  redirect("/te");
}