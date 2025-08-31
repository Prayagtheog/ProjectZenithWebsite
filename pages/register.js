import React from "react";
import RegistrationForm from "../components/register/RegistrationForm";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Sparkles, Group } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert-Led Instruction",
    description: "Learn from passionate instructors with real-world experience in the tech industry."
  },
  {
    icon: Sparkles,
    title: "Hands-On Projects",
    description: "Build exciting projects from day one, turning complex concepts into practical skills."
  },
  {
    icon: Group,
    title: "Collaborative Community",
    description: "Join a supportive community of peers and mentors who share your passion for technology."
  }
];

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Register for a Session</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Take the first step on your journey into the world of computer science. Our programs are designed to be fun, engaging, and impactful.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <RegistrationForm />
            </div>

            <div className="space-y-8 animate-slide-up">
              <h2 className="text-2xl font-bold text-navy">Why Join Project Zenith?</h2>
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white border-0 card-elevation">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
