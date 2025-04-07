// app/page.tsx
import UserForm from '@/components/UserForm'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl mb-4">Create User</h1>
      <UserForm />
    </div>
  )
}