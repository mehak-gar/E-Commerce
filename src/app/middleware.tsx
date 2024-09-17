import { NextRequest, NextResponse } from 'next/server'

function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export default middleware
