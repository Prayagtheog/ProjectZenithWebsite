import React, { useState, useEffect, useCallback } from "react";
import { Event } from "@/entities/Event";
import { Program } from "@/entities/Program";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter, AlertCircle, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterProgram, setFilterProgram] = useState("all");
  const [filterAge, setFilterAge] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const getProgramTitle = useCallback((programId) => {
    const program = programs.find(p => p.id === programId);
    return program ? program.title : "General Event";
  }, [programs]);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const [eventData, programData] = await Promise.all([
          Event.list("-date"),
          Program.list()
        ]);
        setEvents(eventData);
        setPrograms(programData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
      setIsLoading(false);
    }
    loadData();
  }, []);

  useEffect(() => {
    let filtered = events;
    if (filterProgram !== "all") {
      filtered = filtered.filter(event => event.program_id === filterProgram);
    }
    if (filterAge !== "all") {
      filtered = filtered.filter(event => event.age_range === filterAge);
    }
    setFilteredEvents(filtered);
  }, [events, filterProgram, filterAge]);

  const ageRanges = [...new Set(events.map(e => e.age_range))];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join our workshops, guest speaker sessions, and community events.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter Events:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Select value={filterProgram} onValueChange={setFilterProgram}>
                <SelectTrigger className="w-full sm:w-56">
                  <SelectValue placeholder="By Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  {programs.map(p => <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={filterAge} onValueChange={setFilterAge}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="By Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Age Groups</SelectItem>
                  {ageRanges.map(age => <SelectItem key={age} value={age}>Ages {age}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 text-navy animate-spin" />
            </div>
          ) : filteredEvents.length === 0 ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Events Found</AlertTitle>
              <AlertDescription>
                There are no events matching your filters. Try selecting different options or check back later for new events!
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="card-elevation border-0 overflow-hidden md:flex animate-slide-up">
                  <div className="md:w-1/4 bg-gold text-navy p-6 flex flex-col justify-center items-center text-center">
                    <div className="text-6xl font-bold">{format(new Date(event.date), 'dd')}</div>
                    <div className="text-xl font-semibold">{format(new Date(event.date), 'MMM yyyy')}</div>
                    <div className="text-md">{format(new Date(event.date), 'p')}</div>
                  </div>
                  <CardContent className="p-6 md:w-3/4 flex flex-col">
                    <div className="flex-1">
                      <Badge className="bg-navy text-white mb-2">{getProgramTitle(event.program_id)}</Badge>
                      <h3 className="text-2xl font-bold text-navy mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700">
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />{event.location}</div>
                        <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" />{event.duration} hours</div>
                        <div className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" />Ages {event.age_range}</div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-700">
                        {event.max_participants - (event.current_participants || 0)} spots left
                      </div>
                      <Link to={createPageUrl("Register")}>
                        <Button className="btn-primary">
                          Register Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
