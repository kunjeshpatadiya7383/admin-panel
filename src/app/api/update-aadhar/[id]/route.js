import clientPromise from '../../../lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET (request, context) {
  try {
    const { id: mobileNumber } = await context.params // ✅ await params

    const client = await clientPromise
    const db = client.db('MUSoftware')
    const Users = db.collection('Users')

    const result = await Users.updateOne(
      { mobileNumber },
      { $set: { isAadharVerified: true } }
    )

    if (result.matchedCount === 0) {
      return Response.json({
        success: false,
        message: 'Phone Number Not found',
        modifiedCount: result.modifiedCount
      })
    }

    return Response.json({
      success: true,
      message: 'Updated successfully',
      modifiedCount: result.modifiedCount
    })
  } catch (error) {
    console.error('Error updating user:', error)
    return Response.json({ error: error.message }, { status: 500 })
  }
}
