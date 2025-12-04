export const projects = [
  {
    title: "EasyKart - Frontend",
    description:
      "Frontend of a complete e-commerce application with authentication, product catalog, shopping cart, and Stripe-based payments.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Supabase"],
    live: "https://ayushverma.netlify.app/",
    github: "https://github.com/AyushVerma87654/EasyKart-Frontend",
    image: "/easykart.png",
  },
  {
    title: "EasyKart - Backend",
    description:
      "Backend of the e-commerce app using AdonisJs with JWT auth, PostgreSQL database, and Stripe payment integration.",
    tech: ["AdonisJs", "PostgreSQL", "Supabase", "Stripe"],
    github: "https://github.com/AyushVerma87654/EasyKart-Backend",
    image: "/backendplaceholder.svg",
  },
  {
    title: "Online Learning Platform - Frontend",
    description:
      "Frontend of a full-stack e-learning system with role-based access, course creation, quizzes, subscription payments, and admin dashboard.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Supabase"],
    live: "https://online-learning-platform-frontend.netlify.app/",
    github: "https://github.com/AyushVerma87654/Online-Learning-Frontend",
    image: "/online-learning.png",
  },
  {
    title: "Online Learning Platform - Backend",
    description:
      "Backend of the e-learning platform using Express.js and Supabase for authentication, database management, and payment handling.",
    tech: ["Express.js", "Supabase", "Stripe", "PostgreSQL"],
    github: "https://github.com/AyushVerma87654/Online-Learning-Backend",
    image: "/backendplaceholder.svg",
  },
  {
    title: "Knowledge Vault - Frontend",
    description:
      "Frontend of an AI-powered document search system with semantic search, file uploads, and responsive React UI.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Supabase"],
    live: "https://knowledge-vault-frontend.netlify.app/",
    github: "https://github.com/AyushVerma87654/Knowledge-Vault-Frontend",
    image: "/knowledge-vault.png",
  },
  {
    title: "Knowledge Vault - Backend",
    description:
      "Backend using AdonisJs for text extraction, AI embeddings, and vector-based search stored in PostgreSQL.",
    tech: ["AdonisJs", "PostgreSQL Vector DB", "Supabase", "AI Embeddings"],
    github: "https://github.com/AyushVerma87654/Knowledge-Vault-Backend",
    image: "/backendplaceholder.svg",
  },
  {
    title: "Ludo Game",
    description: "Interactive multiplayer Ludo supporting 2–4 players.",
    tech: ["React.js"],
    live: "https://ludobyayush.netlify.app",
    github: "https://github.com/AyushVerma87654/ludo",
    image: "/ludo.png",
  },
  {
    title: "Show Finder",
    description: "Search and display TV show details via external API.",
    tech: ["React.js", "REST APIs"],
    live: "https://showfinderbyayush.netlify.app",
    github: "https://github.com/AyushVerma87654/Show-Finder",
    image: "/showfinder.png",
  },
  {
    title: "Todo App",
    description: "Simple and interactive task management application.",
    tech: ["React.js", "Tailwind CSS"],
    live: "https://ayushvermatodoapp.netlify.app/",
    github: "https://github.com/AyushVerma87654/To-Do-App",
    image: "/todo.png",
  },
  {
    title: "Stopwatch",
    description:
      "A digital stopwatch with start, pause, and reset functionality.",
    tech: ["React.js", "Tailwind CSS"],
    live: "https://stopwatchbyayush.netlify.app/",
    github: "https://github.com/AyushVerma87654/Stopwatch",
    image: "/stopwatch.png",
  },
  {
    title: "On Screen Calculator",
    description:
      "Calculator app with basic arithmetic operations and a clean UI.",
    tech: ["React.js", "Tailwind CSS"],
    live: "https://calculatorbyayush.netlify.app/",
    github: "https://github.com/AyushVerma87654/Calculator-with--paranthesis",
    image: "/calculator.png",
  },
  {
    title: "Slide Puzzle Game",
    description: "Classic sliding puzzle game with interactive tiles.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    live: "https://puzzlebyayush.netlify.app/",
    github: "https://github.com/AyushVerma87654/Slide-PuzzleGame",
    image: "/slidepuzzle.png",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Two-player Tic Tac Toe game with a simple and responsive interface.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    live: "https://tictacayush.netlify.app/game",
    github: "https://github.com/AyushVerma87654/Tic-Tac-Toe",
    image: "/tictactoe.png",
  },
];

export const skills: {
  name: string;
  type: string;
  info: string;
}[] = [
  // Languages
  {
    name: "JavaScript",
    type: "language",
    info: "ES6+, DOM, OOP",
  },
  {
    name: "TypeScript",
    type: "language",
    info: "Typed JS, TSConfig",
  },

  // Frontend
  {
    name: "React.js",
    type: "frontend",
    info: "Hooks, Components, Router",
  },
  {
    name: "Next.js",
    type: "frontend",
    info: "SSR, Routing, API Routes",
  },
  {
    name: "Redux Toolkit",
    type: "frontend",
    info: "State Management, Slices",
  },
  {
    name: "Redux Saga",
    type: "frontend",
    info: "Async State Management",
  },
  {
    name: "Tailwind CSS",
    type: "frontend",
    info: "Responsive Design, Utilities",
  },

  // Backend
  {
    name: "Node.js",
    type: "backend",
    info: "REST APIs, Server Logic",
  },
  {
    name: "AdonisJs",
    type: "backend",
    info: "MVC, Auth, API",
  },
  {
    name: "REST APIs",
    type: "backend",
    info: "CRUD, Authentication",
  },

  // Databases
  {
    name: "PostgreSQL",
    type: "backend",
    info: "Schemas, Queries, pgAdmin",
  },
];

export const fullIntroText =
  "Hi, I’m Ayush Verma, a full-stack web developer skilled in React.js, Next.js, Tailwind CSS, Node.js (AdonisJS), and PostgreSQL. I enjoy building scalable, user-friendly applications and solving real-world problems through clean, efficient code. My favorite project, EasyKart, is a full-featured e-commerce platform I built from scratch with both frontend and backend. I'm always eager to learn new technologies and take on meaningful challenges.";
export const compactIntroText =
  "Hi, I’m Ayush Verma, a full-stack web developer skilled in React.js, Next.js, Tailwind CSS, Node.js (AdonisJS), and PostgreSQL. I enjoy building scalable, user-friendly applications and solving real-world problems. I'm always eager to learn new technologies and take on meaningful challenges.";
