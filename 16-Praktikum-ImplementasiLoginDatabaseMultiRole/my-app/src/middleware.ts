import { NextResponse } from "next/server";
import withAuth from "./Middleware/withAuth";

const middleware = withAuth(() => NextResponse.next(), ["/profile", "/admin"]);

export const config = {
	matcher: ["/profile/:path*", "/admin/:path*"],
};

export default middleware;