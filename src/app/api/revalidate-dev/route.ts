import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

// DEV ONLY: Simple revalidation endpoint without authentication
// Remove this file in production or add proper authentication

export async function GET() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { message: 'This endpoint is only available in development' },
      { status: 403 },
    )
  }

  try {
    revalidateTag('project')
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Projects cache cleared successfully!',
    })
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 })
  }
}
