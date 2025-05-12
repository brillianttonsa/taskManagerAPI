import { CheckCircle, Clock, Users, Calendar } from "lucide-react"

const Descriptions = [
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      title: "Task Management",
      description:
        "Create, organize, and prioritize tasks with ease. Set deadlines, add descriptions, and track progress.",
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600" />,
      title: "Time Tracking",
      description:
        "Track time spent on tasks and projects. Generate reports to analyze productivity and improve efficiency.",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Team Collaboration",
      description:
        "Collaborate with team members in real-time. Assign tasks, share files, and communicate effectively.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-emerald-600" />,
      title: "Project Planning",
      description:
        "Plan projects with interactive Gantt charts. Set milestones, dependencies, and visualize project timelines.",
    }
    
  ]

  export default Descriptions