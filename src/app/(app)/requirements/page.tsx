"use client";

import Image from "next/image"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectItem ,SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Star , Loader } from "lucide-react"
import { SignedIn } from "@clerk/nextjs";

interface BookPreferencesFormProps {
    selectedGenres: string[];
    handleGenreChange: (genre: string, checked: boolean) => void;
}

const BookPreferencesForm: React.FC<BookPreferencesFormProps> = ({ selectedGenres, handleGenreChange }) => {

    const genres = ["Fiction", "AutoBioGraphy", "BioGraphy", "Poetry", "Comedy", "Personal_Growth","Relationship", "Religion", "Technology"];
    

    return (
        <div className="space-y-4">
            {/* Genre Selection */}
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            {selectedGenres.length > 0 ? selectedGenres.join(", ") : "Select Genres"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {genres.map((genre) => (
                            <DropdownMenuCheckboxItem
                                key={genre}
                                checked={selectedGenres.includes(genre)}
                                onCheckedChange={(checked) => handleGenreChange(genre, checked)}  // Pass both genre and checked
                            >
                                {genre}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default function Page() {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [authors, setAuthors] = useState("");
    const [minRating, setMinRating] = useState("");
    const [recommendations, setRecommendations] = useState<{ BOOK_TITLE: string; BOOK_AURTHOR: string; GENERE: string; A_RATINGS: number ; F_PAGE: string ; LINK: string }[]>([]);
    const [loading , setLoading] = useState(false);

    const languages = ["English", "Spanish", "French", "German", "Japanese"];
    const bookLengths = ["Short (<200 pages)", "Medium (200-400 pages)", "Long (400+ pages)"];
    const formats = ["Physical", "eBook", "Audiobook"];
    const timeToRead = ["Quick Reads (<5 Hours)", "Medium (5-15 Hours)", "Long Reads (15+ Hours)"];

    // Handle Genre Selection
    const handleGenreChange = (genre: string, checked: boolean) => {
        setSelectedGenres((prev) =>
            checked ? [...prev, genre] : prev.filter((g) => g !== genre)
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const userPreferences = {
            genre: selectedGenres.join(", "),
            author: authors,
            min_rating: minRating,
        };

        try {
            const response = await fetch("https://Readsphere-ml-service.onrender.com/recommend/personalized", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userPreferences),
            });

            if (!response.ok) throw new Error("Failed to fetch recommendations");
            const data = await response.json();
            setRecommendations(data.recommended_books);
            console.log(data.recommended_books);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
        <SignedIn>
            <div className="flex flex-col items-center gap-8 p-8">
                <h1 className="font-bold text-3xl text-center max-w-3xl">
                    Find Your Next Perfect Read Tell Us What You Love, and We will Recommend the Best Books for You!
                </h1>

                <div className="w-full max-w-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Genre Selection */}
                        <div className="space-y-2">
                            <label className="block font-medium">Book Preferences</label>
                            <BookPreferencesForm selectedGenres={selectedGenres} handleGenreChange={handleGenreChange} />
                        </div>

                        {/* Favorite Author */}
                        <div className="space-y-2">
                            <label className="block font-medium">Favorite Author</label>
                            <Input
                                type="text"
                                value={authors}
                                onChange={(e) => setAuthors(e.target.value)}
                                placeholder="e.g. J.K. Rowling, Stephen King"
                            />
                        </div>

                        {/* Book Length */}
                       

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">Preferred Book Length</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a book length" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {bookLengths.map((length) => (
                                            <SelectItem key={length} value={length}>
                                                {length}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">Language Preference</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {languages.map((language) => (
                                            <SelectItem key={language} value={language}>
                                                {language}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">Format Preference</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a format" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {formats.map((format) => (
                                            <SelectItem key={format} value={format}>
                                                {format}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">Time to Read</h3>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select time to read" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {timeToRead.map((time) => (
                                            <SelectItem key={time} value={time}>
                                                {time}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>



                        {/* Minimum Rating */}
                        <div className="space-y-2">
                            <label className="block font-medium">Minimum Rating</label>
                            <input type="number" placeholder="   Choose minimum rating out of 10" className="text-sm font-arial w-full bg-slate-950 border-2 h-10 rounded-sm" value={minRating} 
                            onChange={(e) => setMinRating(e.target.value)} />
                        </div>
                        {/* language preference */}
                        

                        <Button 
                            type="submit" 
                            className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading && <Loader className="h-5 w-5 animate-spin inline-block" />}
                            {loading ? "Loading..." : "Get Recommendations"}
                        </Button>
                    </form>
                </div>

                {/* Display Recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {recommendations.map((book) => (
                    <Card key={book.BOOK_TITLE}>
                        <CardHeader>
                            <Image
                                priority={true}
                                loading="eager"
                                src={book.F_PAGE}
                                alt={book.BOOK_TITLE}
                                width={200}
                                height={300}
                                className="w-full h-full object-contain"
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
        </>
    );
}
