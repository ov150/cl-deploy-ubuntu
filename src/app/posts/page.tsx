// app/posts/page.tsx

import { prisma } from '@/lib/prisma'

interface Author{
    id:number;
    username:string | null;
    email:string;
}


interface Post{
    id: number;
    title:string;
    content:string | null;
    author: Author;
}

export default async function Posts() {
  const posts = await prisma.post.findMany({
    include: { author: true },
  })

  return (
    <div>
      <h1 className="text-2xl mb-4">Posts</h1>
      <div className="space-y-4">
        {posts.map((post:Post) => (
          <div key={post.id} className="border p-4">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>By: {post.author.username || post.author.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}