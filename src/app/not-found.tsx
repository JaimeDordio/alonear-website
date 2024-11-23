import { redirect } from "next/navigation";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

// Redirect to the home page

export default function GlobalNotFound() {
  return redirect("/");
}
