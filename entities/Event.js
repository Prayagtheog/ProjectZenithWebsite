// entities/Event.js

export const Event = {
  name: "Event",
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "Event title"
    },
    description: {
      type: "string",
      description: "Event description"
    },
    date: {
      type: "string",
      format: "date-time",
      description: "Event date and time"
    },
    duration: {
      type: "number",
      description: "Duration in hours"
    },
    location: {
      type: "string",
      description: "Event location"
    },
    program_id: {
      type: "string",
      description: "Related program ID"
    },
    max_participants: {
      type: "number",
      description: "Maximum number of participants"
    },
    current_participants: {
      type: "number",
      default: 0,
      description: "Current number of registered participants"
    },
    age_range: {
      type: "string",
      description: "Target age range"
    },
    status: {
      type: "string",
      enum: ["Upcoming", "In Progress", "Completed", "Cancelled"],
      default: "Upcoming"
    }
  },
  required: ["title", "description", "date", "location", "age_range"],
  rls: {
    read: {
      user_condition: {
        role: "admin"
      }
    },
    write: {
      user_condition: {
        role: "admin"
      }
    }
  }
};


