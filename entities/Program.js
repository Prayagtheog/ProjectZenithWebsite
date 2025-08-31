// entities/Program.js

export const Program = {
  name: "Program",
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "Program title"
    },
    description: {
      type: "string",
      description: "Program description"
    },
    age_range: {
      type: "string",
      description: "Target age range"
    },
    status: {
      type: "string",
      enum: ["Active", "Coming Soon"],
      default: "Active"
    },
    category: {
      type: "string",
      enum: [
        "Programming",
        "Cybersecurity",
        "Creative",
        "Digital Safety",
        "AI Ethics",
        "Problem Solving",
        "Guest Speakers"
      ],
      description: "Program category"
    },
    skill_level: {
      type: "string",
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner"
    },
    duration: {
      type: "string",
      description: "Session duration"
    }
  },
  required: ["title", "description", "age_range", "status", "category"],
  rls: {
    read: {
      user_condition: {
        full_name: "PrayagkumarPatel26"
      }
    },
    write: {
      user_condition: {
        full_name: "PrayagkumarPatel26"
      }
    }
  }
};


