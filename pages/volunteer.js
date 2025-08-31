import React from "react";
import VolunteerForm from "../components/volunteer/VolunteerForm";
import { Card, CardContent } from "@/components/ui/card";
import { HandHeart, Mic, Presentation, Wrench, Megaphone, Check } from 'lucide-react';

const opportunities = [
  { 
    title: "Lead Instructor", 
    description: "Guide students through our curriculum, teach coding concepts, and foster a love for technology.",
    icon: Presentation
  },
  { 
    title: "Teaching Assistant", 
    description: "Support lead instructors, provide one-on-one help to students, and help manage the classroom.",
    icon: HandHeart
  },
  { 
    title: "Marketing & Outreach", 
    description: "Spread the word about Project Zenith, manage social media, and connect with local communities.",
    icon: Megaphone
  },
  { 
    title: "Logistics & Operations", 
    description: "Help with the behind-the-scenes work, including event setup, tech support, and coordination.",
    icon: Wrench
  }
];

const testimonials = [
  {
    quote: "Volunteering with Project Zenith has been an incredibly rewarding experience. Seeing the students' eyes light up when they solve a tough problem is priceless.",
    name: "Alex Johnson",
    role: "Lead Python Instructor"
  },
  {
    quote: "I've not only helped students learn, but I've also sharpened my own communication and leadership skills. It's a win-win.",
    name: "Samantha Lee",
    role: "Marketing Volunteer"
  }
];

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Become a part of our mission to make technology education accessible to everyone. Your time and skills can change a student's future.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have a variety of roles to match your skills and interests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {opportunities.map((opp, index) => (
              <Card key={index} className="card-elevation border-0 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <opp.icon className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{opp.title}</h3>
                  <p className="text-gray-600">{opp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">Voices from Our Volunteers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <Card key={i} className="card-elevation border-0 bg-white">
                  <CardContent className="p-8">
                    <p className="text-gray-700 italic mb-6">"{t.quote}"</p>
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-sm text-gold">{t.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
}
