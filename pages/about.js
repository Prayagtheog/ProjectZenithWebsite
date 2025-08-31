import React from 'react';
import { Award, Target, Users, Zap, Library } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const founders = [
  { name: 'Prayag Patel', role: 'Co-Founder' },
  { name: 'Aadi Kadam', role: 'Co-Founder' },
  { name: 'Vishnu Somisetty', role: 'Co-Founder' }
];

const timeline = [
  { year: '2024', event: 'Project Zenith is founded with a mission to bridge the digital divide.' },
  { year: '2024', event: 'Partnership established with Piscataway Library to host free workshops.' },
  { year: 'First Year', event: 'Reached over 100 students through our initial programs and events.' },
  { year: 'Present', event: 'Expanding our curriculum and volunteer network to serve more communities.' }
];

export default function About() {
  return (
    <div className="bg-gray-50">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A student-led initiative to empower the next generation with the tools of technology.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <Card className="bg-gold text-navy p-8 border-0 card-elevation">
                <p className="text-xl font-medium">
                  "Project Zenith is a student-founded nonprofit bridging the digital divide by making advanced technology education accessible to underserved youth."
                </p>
              </Card>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2574&auto=format&fit=crop" alt="Team working together" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center w-full mb-8">
                <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-full md:w-2/3 p-6 card-elevation rounded-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <h3 className="text-lg font-bold text-gold">{item.year}</h3>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-navy border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Award className="h-10 w-10 text-gold mx-auto" />
              <h3 className="text-xl font-semibold text-navy">Excellence</h3>
              <p className="text-gray-600">We strive for the highest quality in our curriculum and teaching.</p>
            </div>
            <div className="space-y-4">
              <Target className="h-10 w-10 text-gold mx-auto" />
              <h3 className="text-xl font-semibold text-navy">Accessibility</h3>
              <p className="text-gray-600">We believe every student deserves the chance to learn and succeed.</p>
            </div>
            <div className="space-y-4">
              <Users className="h-10 w-10 text-gold mx-auto" />
              <h3 className="text-xl font-semibold text-navy">Community</h3>
              <p className="text-gray-600">We foster a supportive network of learners, mentors, and volunteers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Our Founders</h2>
          <p className="text-lg text-gray-600 mb-8">Founded in 2024 with a shared vision.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {founders.map(founder => (
              <div key={founder.name} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-navy mb-4 flex items-center justify-center text-white text-3xl font-bold">{founder.name.charAt(0)}</div>
                <h3 className="text-lg font-semibold text-navy">{founder.name}</h3>
                <p className="text-gold">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
