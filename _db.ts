const Users = [
  { id: "1", Name: "Ahmed Ali", Courses: ["HTML Basics", "CSS Advanced"] },
  { id: "2", Name: "Fatima Mohamed", Courses: ["JavaScript Essentials"] },
  {
    id: "3",
    Name: "Hassan Yusuf",
    Courses: ["React Basics", "Node.js Advanced"],
  },
  { id: "4", Name: "Ayan Warsame", Courses: ["Python for Beginners"] },
  {
    id: "5",
    Name: "Zahra Ahmed",
    Courses: ["Django Framework", "API Development"],
  },
  {
    id: "6",
    Name: "Khalid Hussein",
    Courses: ["UI/UX Design", "Graphic Design"],
  },
];

const Courses = [
  {
    id: "1",
    Title: "HTML Basics",
    Students: 15,
    cat: "Web Development",
    Price: 50,
    Tags: ["HTML", "Web", "Frontend"],
    Chapters: ["Introduction", "Elements", "Forms", "SEO Basics"],
  },
  {
    id: "2",
    Title: "CSS Advanced",
    Students: 20,
    cat: "Web Design",
    Price: 75,
    Tags: ["CSS", "Styling", "Web"],
    Chapters: ["Selectors", "Grid", "Flexbox", "Animations"],
  },
  {
    id: "3",
    Title: "JavaScript Essentials",
    Students: 25,
    cat: "Programming",
    Price: 100,
    Tags: ["JavaScript", "Frontend", "Logic"],
    Chapters: ["Basics", "ES6", "DOM Manipulation", "Events"],
  },
  {
    id: "4",
    Title: "React Basics",
    Students: 18,
    cat: "Frontend Framework",
    Price: 120,
    Tags: ["React", "Components", "JSX"],
    Chapters: ["Introduction", "State", "Props", "Hooks"],
  },
  {
    id: "5",
    Title: "Node.js Advanced",
    Students: 12,
    cat: "Backend Development",
    Price: 150,
    Tags: ["Node.js", "Backend", "APIs"],
    Chapters: ["Express", "Routing", "Middleware", "Deployment"],
  },
  {
    id: "6",
    Title: "Python for Beginners",
    Students: 30,
    cat: "Programming",
    Price: 80,
    Tags: ["Python", "Coding", "Backend"],
    Chapters: ["Syntax", "Loops", "Functions", "Modules"],
  },
];

const Reviews = [
  { id: "1", Message: "Great course! Very detailed.", Rating: 5 },
  { id: "2", Message: "Helpful but could use more examples.", Rating: 4 },
  { id: "3", Message: "Amazing instructor and content!", Rating: 5 },
  { id: "4", Message: "A bit rushed towards the end.", Rating: 3 },
  { id: "5", Message: "Clear and concise, loved it!", Rating: 5 },
  { id: "6", Message: "Not beginner-friendly.", Rating: 2 },
];

export default { Users, Courses, Reviews };
