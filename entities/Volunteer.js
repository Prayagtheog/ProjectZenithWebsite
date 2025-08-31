// entities/Volunteer.js

export const Volunteer = {
  name: "Volunteer",
  type: "object",
  properties: {
    full_name: {
      type: "string",
      description: "Volunteer's full name"
    },
    email: {
      type: "string",
      format: "email",
      description: "Email address"
    },
    phone: {
      type: "string",
      description: "Phone number"
    },
    age: {
      type: "number",
      description: "Volunteer's age"
    },
    school_or_organization: {
      type: "string",
      description: "School or organization"
    },
    experience_level: {
      type: "string",
      enum: ["Beginner", "Intermediate", "Advanced", "Professional"],
      description: "Technical experience level"
    },
    areas_of_interest: {
      type: "array",
      items: {
        type: "string",
        enum: ["Teaching", "Marketing", "Logistics", "Event Planning", "Content Creation", "Mentoring"]
      },
      description: "Areas where they want to help"
    },
    programming_skills: {
      type: "array",
      items: { type: "string" },
      description: "Programming languages and skills"
    },
    availability: {
      type: "string",
      description: "When they're available to volunteer"
    },
    motivation: {
      type: "string",
      description: "Why they want to volunteer"
    },
    status: {
      type: "string",
      enum: ["Applied", "Interviewed", "Approved", "Active", "Inactive"],
      default: "Applied"
    }
  },
  required: ["full_name", "email", "experience_level", "areas_of_interest", "motivation"],
  rls: {
    read: {
      $or: [
        { created_by: "{{user.email}}" },
        { user_condition: { role: "admin" } }
      ]
    },
    write: {
      user_condition: { role: "admin" }
    }
  }
};

