// components/PostForm.tsx
'use client'

import { useActionState } from 'react'
import { createPost } from '@/actions/postAction'

export default function PostForm() {
  const [state, formAction] = useActionState(createPost, null)

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <textarea
          name="content"
          placeholder="Content"
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Post
      </button>
      {state?.message && <p>{state.message}</p>}
    </form>
  )
}