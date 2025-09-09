import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
    "/sign-in",
    "/sign-up",
    "/",
    "/component",
    "/about",
    "/how-it-works",
    
]);

const isPublicApiRoute = createRouteMatcher([
    "/api/videos"
]);

export default clerkMiddleware(async(auth, req) => {
    const { userId , sessionClaims } = await auth();
    const currentUrl = new URL(req.url);
    const isApiRequest = currentUrl.pathname.startsWith("/api");
    const role = sessionClaims?.metadata?.role

    // 🔹 Allow access to all private routes if the user is logged in
    if (userId) {

        if (currentUrl.pathname === "/" && role === "admin") {
            return NextResponse.redirect(new URL("/admin", req.url));
        }  
        return NextResponse.next();  // ✅ Allow access to private pages
    }

    // 🔹 If the user is not logged in, redirect them accordingly
    if (!userId) {
        // If trying to access a private route, redirect to sign-in
        if (!isPublicRoute(req) && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }

        // If trying to access a private API route, redirect to sign-in
        if (isApiRequest && !isPublicApiRoute(req)) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }
        if (userId && (currentUrl.pathname === "/sign-in" || currentUrl.pathname === "/sign-up")) {
            return NextResponse.redirect(new URL("/", req.url));
        }
        
    }

    return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
