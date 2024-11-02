'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function ContactUsForm () {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        // Basic validation
        if (!phoneNumber || !name) {
            setError('Please fill in all fields.')
            return
        }

        // Here you would typically send the data to your backend
        console.log('Form submitted:', { phoneNumber, name })

        // Simulate successful submission
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            (<Card className="w-full max-w-md mx-auto">
                <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                        <CardTitle>Thank you!</CardTitle>
                        <CardDescription>We&apos;ll be in touch soon about your demo.</CardDescription>
                    </div>
                </CardContent>
            </Card>)
        );
    }

    return (
        (<Card className="w-full max-w-md mx-auto">
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            type="tel"
                            placeholder="+998901234567"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required />
                    </div>

                    {error && (
                        <div className="flex items-center space-x-2 text-red-500">
                            <AlertCircle className="w-4 h-4" />
                            <span className="">{error}</span>
                        </div>
                    )}
                    <Button type="submit" className="w-full">Sign Up for Demo</Button>
                </form>
            </CardContent>
        </Card>)
    );
}