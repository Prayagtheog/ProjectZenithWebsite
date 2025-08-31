import React, { useState, useEffect, useCallback } from "react";
import { Program } from "@/entities/Program";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Code, Shield, Palette, Brain, Gamepad2, Mic, Users, Clock, ArrowRight, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const iconMap = {
  Programming: Code,
  Cybersecurity: Shield,
  Creative: Palette,
  "AI Ethics": Brain,
  "Problem Solving": Gamepad2,
  "Guest Speakers": Mic
};

const colorMap = {
  Programming: "bg-blue-100 text-blue-700 border-blue-200",
  Cybersecurity: "bg-red-100 text-red-700 border-red-200",
  Creative: "bg-purple-100 text-purple-700 border-purple-200",
  "Digital Safety": "bg-green-100 text-green-700 border-green-200",
  "AI Ethics": "bg-indigo-100 text-indigo-700 border-indigo-200",
  "Problem Solving": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "Guest Speakers": "bg-pink-100 text-pink-700 border-pink-200"
};

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const filterPrograms = useCallback(() => {
    let filtered = programs;
    
    if (filterCategory !== "all") {
      filtered = filtered.filter(program => program.category === filterCategory);
    }
    
    if (filterStatus !== "all") {
      filtered = filtered.filter(program => program.status === filterStatus);
    }
    
    setFilteredPrograms(filtered);
  }, [programs, filterCategory, filterStatus]);

  useEffect(() => {
    loadPrograms();
  }, []);

  useEffect(() => {
    filterPrograms();
  }, [filterPrograms]);

  const loadPrograms = async () => {
    setIsLoading(true);
    try {
      const data = await Program.list();
      setPrograms(data);
    } catch (error) {
      console.error("Error loading programs:", error);
    }
    setIsLoading(false);
  };

  const categories = [...new Set(programs.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive technology education designed to inspire and empower the next generation of innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter Programs:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Coming Soon">Coming Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPrograms.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Programs Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more programs.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program) => {
                const IconComponent = iconMap[program.category] || Code;
                const colorClasses = colorMap[program.category] || "bg-gray-100 text-gray-700 border-gray-200";
                
                return (
                  <Card key={program.id} className="card-elevation border-0 h-full hover:scale-105 transition-transform duration-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 ${colorClasses} rounded-xl flex items-center justify-center border`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <Badge 
                          variant={program.status === "Active" ? "default" : "secondary"}
                          className={program.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}
                        >
                          {program.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-navy">{program.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>Ages {program.age_range}</span>
                          </div>
                          {program.duration && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{program.duration}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0 pb-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className={colorClasses}>
                          {program.category}
                        </Badge>
                        <Badge variant="outline">
                          {program.skill_level}
                        </Badge>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link to={createPageUrl("Register")} className="flex-1">
                          <Button 
                            className={`w-full ${program.status === "Active" ? "btn-primary" : ""}`}
                            disabled={program.status === "Coming Soon"}
                          >
                            {program.status === "Active" ? "Register Now" : "Coming Soon"}
                            {program.status === "Active" && <ArrowRight className="ml-2 h-4 w-4" />}
                          </Button>
                        </Link>
                        <Link to={createPageUrl("Events")}>
                          <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                            View Schedule
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-navy mb-8 max-w-2xl mx-auto">
            Join thousands of students already expanding their technology skills with Project Zenith.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={createPageUrl("Register")}>
              <Button className="bg-navy text-white hover:bg-light-navy px-8 py-3 text-lg">
                Register for Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to={createPageUrl("Events")}>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 text-lg">
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
