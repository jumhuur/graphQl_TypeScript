import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// db
const Users = [
    {
        id: "1",
        Name: "Ahmed Ali",
        Courses: ["HTML Basics", "CSS Advanced"],
    },
    {
        id: "2",
        Name: "Fatima Mohamed",
        Courses: ["JavaScript Essentials"],
    },
    {
        id: "3",
        Name: "Hassan Yusuf",
        Courses: ["React Basics", "Node.js Advanced"],
    },
    {
        id: "4",
        Name: "Ayan Warsame",
        Courses: ["Python for Beginners"],
    },
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
        CourseAuthor: "5",
    },
    {
        id: "2",
        Title: "CSS Advanced",
        Students: 20,
        cat: "Web Design",
        Price: 75,
        Tags: ["CSS", "Styling", "Web"],
        Chapters: ["Selectors", "Grid", "Flexbox", "Animations"],
        CourseAuthor: "6",
    },
    {
        id: "3",
        Title: "JavaScript Essentials",
        Students: 25,
        cat: "Programming",
        Price: 100,
        Tags: ["JavaScript", "Frontend", "Logic"],
        Chapters: ["Basics", "ES6", "DOM Manipulation", "Events"],
        CourseAuthor: "4",
    },
    {
        id: "4",
        Title: "React Basics",
        Students: 18,
        cat: "Frontend Framework",
        Price: 120,
        Tags: ["React", "Components", "JSX"],
        Chapters: ["Introduction", "State", "Props", "Hooks"],
        CourseAuthor: "4",
    },
    {
        id: "5",
        Title: "Node.js Advanced",
        Students: 12,
        cat: "Backend Development",
        Price: 150,
        Tags: ["Node.js", "Backend", "APIs"],
        Chapters: ["Express", "Routing", "Middleware", "Deployment"],
        CourseAuthor: "3",
    },
    {
        id: "6",
        Title: "Python for Beginners",
        Students: 30,
        cat: "Programming",
        Price: 80,
        Tags: ["Python", "Coding", "Backend"],
        Chapters: ["Syntax", "Loops", "Functions", "Modules"],
        CourseAuthor: "1",
    },
];
const Reviews = [
    {
        id: "1",
        Message: "Great course! Very detailed.",
        Rating: 5,
        Author: "3",
        Course: "1",
    },
    {
        id: "2",
        Message: "Helpful but could use more examples.",
        Rating: 4,
        Author: "1",
        Course: "3",
    },
    {
        id: "3",
        Message: "Amazing instructor and content!",
        Rating: 5,
        Author: "4",
        Course: "5",
    },
    {
        id: "4",
        Message: "A bit rushed towards the end.",
        Rating: 3,
        Author: "6",
        Course: "5",
    },
    {
        id: "5",
        Message: "Clear and concise, loved it!",
        Rating: 5,
        Author: "2",
        Course: "2",
    },
    {
        id: "6",
        Message: "Not beginner-friendly.",
        Rating: 2,
        Author: "1",
        Course: "6",
    },
];
// types
const typeDefs = `#graphql
    type Users {
        id:ID!
        Name: String!
        Courses: [String!]!
        UserReviews:[Reviews!]
    }

    type Courses {
        id:ID!
        Title:String!
        Students:Int
        cat:String!
        Price:Int!
        CourseAuthor:String!
        Tags: [String]
        Chapters: [String!]!
        Author:Users
        CourseReviews:[Reviews!]
    }

    type Reviews {
        id:ID!
        Message: String!
        Rating:Int
        Author:String,
        Course:Courses!
        User:Users!
    }

    type Query {
        AllUser:[Users]
        User(id:ID!):Users
        AllCourses:[Courses]
        Course(id:ID!):Courses
        Reviews:[Reviews]
        Review(id:ID!):Reviews
    }

    type Mutation {
      DeleteCourse(id:ID!): [Courses]
      AddCourse (Course: CourseInput!): Courses
      UpdateCourse (id:ID!, Course: UpdateInput!): Courses
    }
    input CourseInput {
        id:ID!
        Title:String!
        Students:Int
        cat:String!
        Price:Int!
        CourseAuthor:String!
        Tags: [String]
        Chapters: [String!]!
    }

    input UpdateInput {
        Title:String
        Students:Int
        cat:String
        Price:Int
        CourseAuthor:String
        Tags: [String]
        Chapters: [String!]
    }
`;
// noocyad data-types ee graphql waa sidan hoose
/*
 . int == oo ah numbers aan wadan wax jajab ah
 . float = oo ah number wata jajab sida 90.99 oo kale
 . string = oo waxii qoraala
 . bolean = oo ah waxii true ama false ah run ama been !
 . ID = oo ah Id  gaar uu u yeelan doono xaqiiqo ahaan waaa iska string
 laakiin nidaamka graphql ayaa ah sidaas
*/
// samaynta resolvers
const resolvers = {
    Query: {
        AllUser() {
            return Users;
        },
        User(_, args) {
            return Users.find((User) => User.id === args.id);
        },
        AllCourses() {
            return Courses;
        },
        Course(_, args) {
            return Courses.find((Course) => Course.id === args.id);
        },
        Reviews() {
            return Reviews;
        },
        Review(_, args) {
            return Reviews.find((Review) => Review.id === args.id);
        },
    },
    // banaanka Query-ga ayaad ku samaynaysaa waxii ah  fetching nesting data
    // tusaale hadaan doonayo ka waran user-ka dhamaan waxa uu reviews qoray
    // sidan hoose ayad u samaynaysaaa
    Users: {
        UserReviews(parent) {
            return Reviews.filter((Review) => Review.Author === parent.id);
        },
    },
    Courses: {
        CourseReviews(parent) {
            return Reviews.filter((Review) => Review.Course === parent.id);
        },
        Author(parent) {
            return Users.find((User) => User.id === parent.CourseAuthor);
        },
    },
    Reviews: {
        User(parent) {
            return Users.find((User) => User.id === parent.Author);
        },
    },
    Mutation: {
        DeleteCourse(_, args) {
            Courses.filter((Course) => Course.id !== args.id);
            return Courses;
        },
        AddCourse(_, args) {
            let Course = {
                ...args.Course,
                id: "7",
            };
            Courses.push(Course);
            return Course;
        },
        UpdateCourse(_, args) {
            Courses.map((course) => {
                if (course.id === args.id) {
                    return { ...course, ...args };
                }
                return course;
            });
            return Courses.find((c) => c.id === args.id);
        },
    },
};
// samynta server-ka
const Myserver = new ApolloServer({
    /*
      functionkan gudihiisa waxaa ku jira object Qaadanaya
      1 = typedefs : oo ah qaabka nooca  data-daada
      2 = resolvers : oo ah  sida ama qabaka data-da
      laguugu soo bandhigayo marka aad u baahato
    */
    // typedefs
    typeDefs,
    // resolvers
    resolvers,
});
const { url } = await startStandaloneServer(Myserver, {
    listen: { port: 4000 },
});
console.log("server-ku waxa uu diyaar ku yahay port", url);
