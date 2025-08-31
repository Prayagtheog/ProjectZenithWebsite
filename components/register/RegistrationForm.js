import React, { useState, useEffect } from "react";
import { Program } from "@/entities/Program";
import { Registration } from "@/entities/Registration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    student_name: "",
    age: "",
    grade: "",
    parent_name: "",
    parent_email: "",
    phone: "",
    program_interest: "",
    additional_notes: ""
  });
  const [programs, setPrograms] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const programList = await Program.filter({ status: "Active" });
        setPrograms(programList);
      } catch (err) {
        console.error("Failed to fetch programs", err);
      }
    }
    fetchPrograms();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSelectChange = (id, value) => {
     setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      await Registration.create(formData);
      setStatus("success");
    } catch (err) {
      setError("An error occurred. Please check your information and try again.");
      setStatus("error");
      console.error(err);
    }
  };

  if (status === "success") {
    return (
      <Alert className="bg-green-50 border-green-200">
        <CheckCircle2 className="h-4 w-4 text-green-700" />
        <AlertTitle className="text-green-800">Registration Complete!</AlertTitle>
        <AlertDescription className="text-green-700">
          Thank you for registering! We've received your information and will send a confirmation email to {formData.parent_email} with the next steps.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card className="card-elevation border-0">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-navy flex items-center gap-3">
          <FileText className="h-8 w-8 text-gold" />
          Session Sign-Up Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-navy">Student Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="student_name">Student's Full Name</Label>
                <Input id="student_name" value={formData.student_name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" value={formData.age} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade Level</Label>
                <Input id="grade" value={formData.grade} onChange={handleInputChange} required />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-navy">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parent_name">Parent's Full Name</Label>
                <Input id="parent_name" value={formData.parent_name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parent_email">Parent's Email</Label>
                <Input id="parent_email" type="email" value={formData.parent_email} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-navy">Program Selection</h3>
             <div className="space-y-2">
                <Label htmlFor="program_interest">Program of Interest</Label>
                <Select onValueChange={(value) => handleSelectChange('program_interest', value)} required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                        {programs.length > 0 ? (
                          programs.map(program => (
                            <SelectItem key={program.id} value={program.title}>
                              {program.title} (Ages {program.age_range})
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="loading" disabled>Loading programs...</SelectItem>
                        )}
                    </SelectContent>
                </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional_notes">Questions or Additional Notes</Label>
            <Textarea id="additional_notes" value={formData.additional_notes} onChange={handleInputChange} placeholder="Let us know if you have any questions or special requirements." />
          </div>
          
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex justify-end">
            <Button type="submit" className="btn-primary px-8 py-3 text-lg" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : "Register for Session"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
