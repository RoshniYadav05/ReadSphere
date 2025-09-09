import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignedIn } from "@clerk/nextjs"

export default function Dashboard() {
  return (
    <SignedIn>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Reading Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Books Read</CardTitle>
            <CardDescription>Your reading progress</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reading Goal</CardTitle>
            <CardDescription>Books to read this year</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">0 / 50</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Favorite Genre</CardTitle>
            <CardDescription>Based on your reading history</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">None</p>
          </CardContent>
        </Card>
      </div>
    </div>
    </SignedIn>
  )
}

