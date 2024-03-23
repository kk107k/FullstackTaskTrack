import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export const meta: MetaFunction = () => {
  return [{ title: "Fullstack Remix App" }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  })
  return { user }
}

export default function Index() {
  return (
    <div>
      <h1 className="text-red-600">Hello</h1>
    </div>
  );
}