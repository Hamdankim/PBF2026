import { NextResponse } from "next/server";
import withAuth from "./Middleware/withAuth";

const middleware = withAuth(() => NextResponse.next(), ["/profile"]);

export const config = {
	matcher: ["/profile/:path*"],
};

export default middleware;