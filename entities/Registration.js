// entities/Registration.js

export const Registration = {
  name: "Registration",
  type: "object",
  properties: {
    student_name: {
      type: "string",
      description: "Student's full name"
    },
    age: {
      type: "number",
      description: "Student's age"
    },
    grade: {
      type: "string",
      description: "Student's grade level"
    },
    parent_email: {
      type: "string",
      format: "email",
      description: "Parent/guardian email"
    },
    parent_name: {
      type: "string",
      description: "Parent/guardian name"
    },
    phone: {
      type: "string",
      description: "Contact phone number"
    },
    program_interest: {
      type: "string",
      description: "Program of interest"
    },
    event_id: {
      type: "string",
      description: "Specific event ID if registering for an event"
    },
    additional_notes: {
      type: "string",
      description: "Additional notes or questions"
    },
    status: {
      type: "string",
      enum: ["Pending", "Confirmed", "Waitlist", "Cancelled"],
      default: "Pending"
    }
  },
  required: [
    "student_name",
    "age",
    "grade",
    "parent_email",
    "parent_name",
    "program_interest"
  ],
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


