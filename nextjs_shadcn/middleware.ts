import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);
  },
  {
    callbacks: {
      authorized: async ({ token }) => token?.role === "admin",
    },
  }
);

export const config = {
  matcher: ["api/auth/*", "(auth)/login"],
};
