import { NextResponse, type NextRequest, userAgent } from "next/server";


export async function middleware(request: NextRequest) {
  // const response = NextResponse.next();
   console.log('middleware wwwwwwwwwwwww', request);
   console.log('middleware wwwwwwwwwwwww', request.nextUrl.pathname);
   console.log('middleware wwwwwwwwwwwww', request.nextUrl.pathname);
  // const theme = request.cookies.get('theme');
  const userAg = userAgent(request);
 
  // if (request.nextUrl.pathname === '/products'){

  //   return NextResponse.redirect(new URL("/dashboard", request.url))
  // }
  // response.cookies.set('theme', 'dark');
  // return response;
  // if (request.nextUrl.pathname === '/profile')
  // // return NextResponse.redirect(new URL("/hello", request.url))
  // return NextResponse.rewrite(new URL("/hello", request.url))
}
// export default function middle(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url))
// }

export const config = {
  matcher: "/",
}