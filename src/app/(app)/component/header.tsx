'use client'
import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/app/(app)/component/mode-toggle"
import { SignInButton, SignOutButton , SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


export default function Header() { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            ReadSphere
          </Link>
          <div className="sm:hidden absolute right-12 ">
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="text-white relative ">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>


          {/* Mobile Menu Button */}
        <button
            className="sm:hidden text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4">
            <Input type="search" placeholder="Search books..." className="w-64 ml-5  text-[#050A1A]" />
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/dashboard" className="hover:text-secondary">Dashboard</Link>
                </li>
                <li>
                  <Link href="/recommendations" className="hover:text-secondary">Top Picks</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-secondary">About</Link>
                </li>
              </ul>
            </nav>
            <ModeToggle />
              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                  <Button variant="outline" className="text-[#050A1A]">Login</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
             </SignedIn>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-primary z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold">
                ReadSphere
              </Link>
              <button
                className="text-2xl focus:outline-none"
                onClick={toggleMobileMenu}
              >
                ✖
              </button>
            </div>
            
            <Input type="search" placeholder="Search books..." className="mb-6" />
            
            <nav className="flex-1">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/dashboard" 
                    className="block text-lg hover:text-secondary"
                    onClick={toggleMobileMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/recommendations" 
                    className="block text-lg hover:text-secondary"
                    onClick={toggleMobileMenu}
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="block text-lg hover:text-secondary"
                    onClick={toggleMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/how-it-works" 
                    className="block text-lg hover:text-secondary"
                    onClick={toggleMobileMenu}
                  >
                    How it works
                  </Link>
                </li>
              </ul>
            <div className="flex flex-col space-y-4">
              <ModeToggle />
            </div>
            <SignedIn>
            <SignOutButton>
                  <Button variant="outline" className="text-white" onClick={toggleMobileMenu}>log Out</Button>
            </SignOutButton>
            </SignedIn>
            </nav>
            
          </div>
        </div>
      </div>
    </header>
  )
}
