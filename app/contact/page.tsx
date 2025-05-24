"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // You would typically show a success message here
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const founders = [
    {
      name: "Sanidhya Shishodia",
      role: "Co-Founder & CEO",
      image: "/founders/sanidhya.jpg", // Replace with actual path
      bio: "Financial AI expert with background in quantitative finance and machine learning.",
      social: {
        linkedin: "https://www.linkedin.com/in/sanidhya-shishodia-a96a2b327/",
        twitter: "https://x.com/iisanidhya",
        github: "https://github.com/dev-sanidhya",
      },
    },
    {
      name: "Atharva Singh",
      role: "Co-Founder & CTO",
      image: "/founders/atharva.jpg", // Replace with actual path
      bio: "AI researcher specializing in multi-agent systems and natural language processing.",
      social: {
        linkedin: "https://www.linkedin.com/in/atharva-singh-481898325/",
        twitter: "https://x.com/wannabeaquant",
        github: "https://github.com/wannabeaquant",
      },
    },
    {
      name: "Sarthk Kharwal",
      role: "Co-Founder & COO",
      image: "/founders/sarthk.jpg", // Replace with actual path
      bio: "Product strategist with expertise in financial markets and user experience design.",
      social: {
        linkedin: "https://www.linkedin.com/in/sarthkkharwal/",
        twitter: "https://x.com/SarthkKharwal",
        github: "https://github.com/SarthkK",
      },
    },
  ];

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="relative bg-primary/5 border-b">
        <div className="container py-16">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="h-6 w-6 text-primary" />
            <h4 className="text-primary font-medium">Get in Touch</h4>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Have questions about FinSight? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@finsight.ai</p>
                    <p className="text-muted-foreground">support@finsight.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 99168 32074</p>
                    <p className="text-muted-foreground">
                      Mon-Fri, 9am-5pm IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">
                      Two Horizon Center, DLF Phase-5
                    </p>
                    <p className="text-muted-foreground">
                      GCR, Sector 43, Gurgoan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-muted">
                {/* Replace with an actual map component or image */}
                <div className="w-full h-full flex items-center justify-center bg-primary/5 text-muted-foreground">
                  Interactive Map
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[4/3] relative bg-primary/5">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl rounded-none">
                      {founder.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardHeader>
                  <CardTitle>{founder.name}</CardTitle>
                  <CardDescription>{founder.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{founder.bio}</p>
                  <div className="flex gap-4">
                    <a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href={founder.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href={founder.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
