"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Star , Loader } from "lucide-react"
import { SignedIn } from "@clerk/nextjs"

// const books = [
//   { id: 1, title: "The Midnight Library", author: "Matt Haig", cover: "/placeholder.svg" },
//   { id: 2, title: "Project Hail Mary", author: "Andy Weir", cover: "/placeholder.svg" },
//   { id: 3, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", cover: "/placeholder.svg" },
//   // Add more books as needed
// ]

interface Book {
  BOOK_TITLE: string;
  BOOK_AURTHOR: string;
  GENERE: string;
  A_RATINGS: number;
  F_PAGE: string;
  LINK: string;
}

export default function Recommendations() {


  const [books, setBooks] = useState<Book[]>([]); // State to store fetched books
  const [loading, setLoading] = useState(true); // Loading state
  const [error ] = useState(null); 
  
  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await fetch("https://Readsphere-ml-service.onrender.com/recommend/popularity");
        const data = await response.json();
        console.log(data)

        setBooks(data.popular_books); // Update state with fetched books
        setLoading(false);
      } catch (err) {
        console.error("Error fetching books:", err);
        setLoading(false);
      }
    };

    fetchPopularBooks();
  }, []); // Empty dependency array means this runs only once when component mounts

  if (loading) return <p className=" mt-10 text-3xl text-center text-white">loading Your Books...<Loader className="h-10 w-10 animate-spin inline-block" /></p>// Show loading message
  if (error) return <p className="text-center text-red-500">{error}</p>;
  return (
    <SignedIn>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recommended for You</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book.BOOK_TITLE}>
            <CardHeader>
              <Image
                src={book.F_PAGE || "/placeholder.svg"}
                alt={book.BOOK_TITLE}
                width={200}
                height={300}
                className="w-full h-full object-contain"
                priority={true}
                loading="eager"
              />
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-2">
              <CardTitle>{book.BOOK_TITLE}</CardTitle>
              <CardDescription>{book.BOOK_AURTHOR}</CardDescription>
              <CardDescription>{book.GENERE}</CardDescription>
              <CardDescription className="flex items-center gap-1">Rating: {book.A_RATINGS}<Star key={book.BOOK_TITLE} className="h-3 w-3 fill-yellow-500 text-yellow-500" /></CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={book.LINK}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </SignedIn>
  )
}

