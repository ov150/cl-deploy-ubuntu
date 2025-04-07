"use server";
import { prisma } from "@/lib/prisma"
import { cookies } from "next/headers"

export async function createPost(prevState: any, formData: FormData) {
  try {
    // Retrieve the authorId from the cookie
    const cookieStore = cookies()
    const authorId = (await cookieStore).get('userId')?.value

    if (!authorId) {
      throw new Error("User not authenticated")
    }

    const title = formData.get('title') as string
    const content = formData.get('content') as string

    // Create the post with the authorId
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: parseInt(authorId), // Ensure the authorId is a number
      },
    })

    return { success: true, message: 'Post created successfully', post }
  } catch (error) {
    return { success: false, message: 'Error creating post', error }
  }
}
