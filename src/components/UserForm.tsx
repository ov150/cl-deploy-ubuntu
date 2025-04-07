// components/UserForm.tsx
'use client'

import { useActionState, useEffect } from 'react'
import { createUser } from '@/actions/userAction'
import { useRouter } from 'next/navigation'

export default function UserForm() {
  const [state, formAction] = useActionState(createUser, null)
  const router = useRouter()
  

  useEffect(()=>{
    if(state?.success == true){
      router.push("/posts/create");
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 w-full"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create User
      </button>
      {state?.message && <p>{state.message}</p>}
    </form>
  )
}