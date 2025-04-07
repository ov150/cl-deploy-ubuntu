// app/posts/create/page.tsx
import PostForm from '@/components/PostForm'
import { prisma } from '@/lib/prisma'

export default async function CreatePost() {
  // For demo, we'll use first user. In production, you'd use auth
  const user = await prisma.user.findFirst()
  
  if (!user) {
    return <div>Please create a user first</div>
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Create Post</h1>
      <PostForm/>
    </div>
  )
}