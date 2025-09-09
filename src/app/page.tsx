"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Coffee, Heart, Lightbulb, Star, Zap  } from "lucide-react"
import Image from "next/image"
import { WarpBackground } from "@/components/magicui/warp-background"
import React, { useState } from "react"
import {toast , ToastContainer} from "react-toastify"
import ReviewMarquee from "@/components/marquee"
import FeedbackDialog from "@/components/FeedbackDialog"

type Review = {
  name: string;
  username: string;
  body: string;
  img: string;
  rating: string;
};


export default function Home() {

  const BooksFrontpage = [
    {id:1,title:"Maharaj BioGrahy",img:"maharaj.jpg"},
    {id:2,title:"Rich Dad Poor Dad",img:"rich_dad_poor_dad.png"},
    {id:3,title:"One Indian Girl",img:"one_indian_girl.png"},
    {id:4,title:"Praying to get Results",img:"praying.png"},
    {id:5,title:"100 Ways to Motivate yourself",img:"motivate.png"},
    {id:6,title:"Waiting And Daiting",img:"waiting.png"},
  ]

  const [reviews, setReviews] = useState([
    { 
      name: "Rohit S.", 
      username: "@rohit", 
      body: "Readsphere is a game-changer! The recommendations are spot-on, making book discovery effortless. Highly recommended!", 
      img: "/roh.jpg", 
      rating: "⭐⭐⭐⭐⭐" 
    },
  
    { 
        name: "Chinmai P.", 
        username: "@chinmai", 
        body: "I was stuck in a reading slump, but Readsphere brought back my love for books. Every recommendation is a gem!", 
        img: "/chi.jpg", 
        rating: "⭐⭐⭐⭐⭐" 
    },
    { 
      name: "Jenny", 
      username: "@jenny", 
      body: "Amazing experience! Readsphere makes discovering books effortless and fun.", 
      img: "/p2.jpg", 
      rating: "⭐⭐⭐⭐" 
    },
    { 
        name: "Pratish B.", 
        username: "@pratish", 
        body: "The community aspect makes Readsphere amazing! Real people, real recommendations—feels like a book club!", 
        img: "/pra.jpg", 
        rating: "⭐⭐⭐" 
    },
    {
      name: "Ananya M.",
      username: "@ananya_reads",
      body: "Absolutely love Readsphere! It’s like it knows exactly what I want to read next. Found so many hidden gems!",
      img: "/p3.jpg",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "jacqline D.",
      username: "@karand_books",
      body: "The personalized recommendations are seriously impressive. Readsphere makes book hunting fun again!",
      img: "/p4.jpg",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Meera T.",
      username: "@meera_tales",
      body: "Readsphere has transformed how I find books. It’s intuitive, fast, and super accurate. A must for every book lover!",
      img: "/p1.png",
      rating: "⭐⭐⭐⭐⭐"
    },

  ]);

  const addReview = (newReview: Review) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const newsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    toast.success("Subscribed successfully!")
  }

  return (
    <div className="min-h-screen bg-[#050A1A] text-white overflow-hidden">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      {/* Header/Navigation */}
      {/* <header className="border-b border-gray-800 bg-[#0A0F25]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Readsphere
          </Link>

          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search books..."
                className="w-full pl-10 bg-[#0D1326] border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/recommendations" className="text-gray-300 hover:text-white transition-colors">
              Recommendations
            </Link>
            <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="sr-only">Profile</span>
            </div>
            <Button className="bg-[#111827] hover:bg-[#1D2739] text-white">Sign In</Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section with Grid Background */}
      <WarpBackground
        className="h-screen"
        beamsPerSide={5}
        beamSize={5}
        beamDelayMax={3}
        beamDelayMin={0}
        beamDuration={3}
        perspective={100}>
      
      <section className="relative py-20 md:py-32">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"  
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(5, 10, 26, 0.8), rgba(5, 10, 26, 0.95)), url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='%23113' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
              backgroundSize: "cover",
            }}
          />
        </div>

        {/* Colorful Light Beams */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[300px] rotate-12 bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-transparent"
          animate={{
            x: ["-10%", "10%", "-10%"],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-0 w-full h-[200px] -rotate-12 bg-gradient-to-l from-teal-500/20 via-teal-400/10 to-transparent"
          animate={{
            x: ["10%", "-10%", "10%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-2/3 left-0 w-full h-[150px] rotate-[5deg] bg-gradient-to-r from-green-500/20 via-green-400/10 to-transparent"
          animate={{
            x: ["-5%", "5%", "-5%"],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-full h-[250px] -rotate-[8deg] bg-gradient-to-l from-orange-500/20 via-orange-400/10 to-transparent"
          animate={{
            x: ["5%", "-5%", "5%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Content */} 
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl pr-5 text-center  ">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 ">
                  Readsphere
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10">
                Discover your next favorite book with personalized recommendations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-[#050A1A] hover:bg-white/10 px-8 py-6 text-lg">
                  <Link href="/requirements">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-[#050A1A] hover:bg-white/10 px-8 py-6 text-lg"
                >
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </WarpBackground>

      {/* About Readsphere Section */}

      {/* Featured Books Section */}
      <section className="py-16 bg-[#080D20] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trending This Week</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the books that are captivating our community right now
            </p>
          </div>

          
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {BooksFrontpage.map((book) => (
        <motion.div
          key={book.id} // Use a unique key
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="group"
        >
          <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/${book.img}`} // Use fetched image link
              alt={book.title
              }
              width={200}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-3">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-medium">{book.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  



          <div className="mt-12 text-center">
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-400 hover:text-slate-900 hover:border-slate-950">
              View All Trending Books
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050A1A] opacity-90 z-0"></div>

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/30 blur-sm z-0"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Readsphere Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform analyzes thousands of books to find your perfect match
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#0A1128] p-8 rounded-xl border border-gray-800 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="pt-6 text-center">
                <div className="bg-purple-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Share Your Preferences</h3>
                <p className="text-gray-400">
                  Tell us about your reading history, favorite genres, and what you are looking for in your next book.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0A1128] p-8 rounded-xl border border-gray-800 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="pt-6 text-center">
                <div className="bg-teal-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Analysis</h3>
                <p className="text-gray-400">
                  Our advanced algorithm analyzes thousands of books, reviews, and reading patterns to find your
                  matches.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#0A1128] p-8 rounded-xl border border-gray-800 relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="pt-6 text-center">
                <div className="bg-green-500/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Discover & Enjoy</h3>
                <p className="text-gray-400">
                  Get personalized recommendations and discover books you will love, with new suggestions as you read
                  more.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages of Book Reading Section */}
      <section className="py-16 bg-[#070C1F] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Reading Changes Lives</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the transformative power of books and how they can enhance your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-[#0A1128] border-gray-800 overflow-hidden">
                <div className="absolute right-0 w-32 h-32 bg-purple-500/10 rounded-full  -mt-16"></div>
                <CardHeader>
                  <div className="bg-purple-500/10 p-3 rounded-full w-fit mb-4">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Cognitive Enhancement</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>
                    Reading regularly improves vocabulary, comprehension, and critical thinking skills while reducing
                    cognitive decline.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-[#0A1128] border-gray-800 overflow-hidden">
                <div className="absolute  right-0 w-32 h-32 bg-teal-500/10 rounded-full  -mt-16"></div>
                <CardHeader>
                  <div className="bg-teal-500/10 p-3 rounded-full w-fit mb-4">
                    <Heart className="h-6 w-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-white">Stress Reduction</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>
                    Immersing yourself in a good book can lower heart rate and ease tension in muscles, reducing stress
                    by up to 68%.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-[#0A1128] border-gray-800 overflow-hidden">
                <div className="absolute  right-0 w-32 h-32 bg-green-500/10 rounded-full  -mt-16"></div>
                <CardHeader>
                  <div className="bg-green-500/10 p-3 rounded-full w-fit mb-4">
                    <Coffee className="h-6 w-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Better Sleep Quality</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>
                    Reading before bed signals to your body that it is time to relax and helps establish a regular sleep
                    pattern for more restful nights.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-[#0A1128] border-gray-800 overflow-hidden">
                <div className="absolute right-0 w-32 h-32 bg-orange-500/10 rounded-full  -mt-16"></div>
                <CardHeader>
                  <div className="bg-orange-500/10 p-3 rounded-full w-fit mb-4">
                    <Zap className="h-6 w-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-white">Increased Empathy</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>
                    Fiction readers show improved ability to understand others mental states and emotions, enhancing
                    social connections and relationships.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D20] to-[#0A1128]"></div>

        {/* Animated Light Beams */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[200px] rotate-[5deg] bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-transparent"
          animate={{
            x: ["-10%", "10%", "-10%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-[#0C1330] rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.15)] overflow-hidden border border-gray-800">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Join Our Reading Community</h2>
                <p className="text-gray-400 mb-6">
                  Subscribe to our newsletter for weekly book recommendations, reading tips, and exclusive content.
                </p>
              </div>

              <form className="space-y-4" onSubmit={newsletterSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="bg-[#0D1326] border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="bg-[#0D1326] border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-[#0D1326] border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                >
                  Subscribe Now
                </Button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="flex -space-x-2">
                  {BooksFrontpage.map((value) => (
                    <div key={value.id} className="w-8 h-8 rounded-full border-2 border-[#0C1330] bg-gray-800">
                      <Image
                        src={`/${value.img}`}
                        alt="Sarah J."
                        height={20}
                        width={30}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Join 10,000+ book lovers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-[#060B1D] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Readers Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover how Readsphere has transformed reading experiences for our community
            </p>
          </div>

          <ReviewMarquee reviews={reviews}  />

          {/* ✅ Button and Dialog are handled inside this */}
          <div className="text-center">
            <FeedbackDialog onAddReview={addReview} />
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30"></div>

        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 50 0 L 0 0 0 50' fill='none' stroke='%23fff' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
              backgroundSize: "cover",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Favorite Book?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Join thousands of readers who have discovered their perfect literary matches with Readsphere.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-[#050A1A] hover:bg-gray-200 px-8">
                  <Link href="/requirements">Get Started Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  <Link href="/about">Learn How It Works</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

