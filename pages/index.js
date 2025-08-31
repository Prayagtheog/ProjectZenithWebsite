
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, Award, Code, Shield, Palette, Brain, Gamepad2, Mic } from "lucide-react";

export default function Home() {
  const programs = [
    { 
      title: "Python Programming", 
      ages: "12-16", 
      icon: Code,
      description: "Learn the fundamentals of Python programming",
      color: "bg-blue-100 text-blue-700"
    },
    { 
      title: "Java Programming", 
      ages: "13-16", 
      icon: Code,
      description: "Object-oriented programming with Java",
      color: "bg-orange-100 text-orange-700"
    },
    { 
      title: "Cybersecurity Basics", 
      ages: "12-16", 
      icon: Shield,
      description: "Digital security and ethical hacking",
      color: "bg-red-100 text-red-700"
    },
    { 
      title: "Creative Coding with Scratch", 
      ages: "8-12", 
      icon: Palette,
      description: "Visual programming for young creators",
      color: "bg-purple-100 text-purple-700"
    },
    { 
      title: "AI & Ethics", 
      ages: "12-16", 
      icon: Brain,
      description: "Explore AI technology and ethics",
      color: "bg-green-100 text-green-700"
    },
    { 
      title: "Logic & Problem Solving", 
      ages: "8-16", 
      icon: Gamepad2,
      description: "Critical thinking through games",
      color: "bg-yellow-100 text-yellow-700"
    }
  ];

  const stats = [
    { number: "100+", label: "Students Reached" },
    { number: "6", label: "Active Programs" },
    { number: "2024", label: "Founded" },
    { number: "3", label: "Founding Members" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-light-navy to-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2fde54240_file_000000004b1461f7aa6a599062fec400.png" 
              alt="Project Zenith" 
              className="h-32 w-32 mx-auto mb-8 drop-shadow-2xl"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expanding Access to
              <span className="block text-gold">Computer Science Education</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Empowering underserved youth with cutting-edge technology skills through hands-on learning and mentorship.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link to={createPageUrl("Register")}>
                <Button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
                  Join a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to={createPageUrl("Volunteer")}>
                <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-lg">
                  Volunteer With Us
                </Button>
              </Link>
              
              <Link to={createPageUrl("Events")}>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg font-semibold rounded-lg">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology education tailored for different age groups and skill levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className="card-elevation border-0 h-full animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                    <program.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-navy mb-2">{program.title}</h3>
                  <p className="text-sm text-gold font-medium mb-3">Ages {program.ages}</p>
                  <p className="text-gray-600 flex-1">{program.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link to={createPageUrl("Programs")}>
                      <Button variant="ghost" className="text-gold hover:text-light-gold p-0">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to={createPageUrl("Programs")}>
              <Button className="btn-primary px-8 py-3 text-lg">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-light-navy"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              "Project Zenith is a student-founded nonprofit bridging the digital divide by making advanced technology education accessible to underserved youth."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student-Founded</h3>
              <p className="text-gray-300">Created by students who understand the challenges of learning technology</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessible Education</h3>
              <p className="text-gray-300">Breaking down barriers to quality computer science education for all</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p className="text-gray-300">Partnered with libraries and schools to reach students where they are</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gold to-light-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-navy mb-8 max-w-2xl mx-auto">
            Join our community of young learners and experienced volunteers making a difference in technology education.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to={createPageUrl("Register")}>
              <Button className="bg-navy text-white hover:bg-light-navy px-8 py-3 text-lg font-semibold rounded-lg">
                Register for Classes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to={createPageUrl("Contact")}>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 text-lg font-semibold rounded-lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}