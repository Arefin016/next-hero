import { NextResponse } from "next/server"

const user = true
const coo = "next-superhero"

export const middleware = (request) => {
  const cookies = request.cookies.get("token")
  if (!cookies || cookies !== coo) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: ["/about", "/services"],
}

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
