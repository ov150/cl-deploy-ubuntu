"use server";

import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

export async function createUser(prevState: any, formData: FormData) {
  try {
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    // Create user in the database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password, // Remember to hash passwords in production
      },
    })

    // Set the userId in a cookie
    const cookieStore = cookies()
    ;(await cookieStore).set('userId', user.id.toString(), {
      httpOnly: true, // Make sure it's only accessible server-side
      path: '/', // Accessible across the entire app
      maxAge: 60 * 60 * 24 * 30, // Set expiration (30 days in this example)
    })

    return { success: true, message: 'User created successfully', user }
  } catch (error) {
    return { success: false, message: 'Error creating user', error }
  }
}
