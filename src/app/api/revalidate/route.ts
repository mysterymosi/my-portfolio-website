import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.SANITY_WEBHOOK_SECRET,
    )

    if (!isValidSignature) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 401 },
      )
    }

    if (!body?._type) {
      return NextResponse.json({ message: 'Bad Request' }, { status: 400 })
    }

    // Revalidate the project tag when any project is updated
    if (body._type === 'project') {
      revalidateTag('project')
      return NextResponse.json({
        status: 200,
        revalidated: true,
        now: Date.now(),
      })
    }

    return NextResponse.json({
      status: 200,
      revalidated: false,
      message: `No revalidation for type: ${body._type}`,
    })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ message: err.message }, { status: 500 })
  }
}
