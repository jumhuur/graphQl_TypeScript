export const typeDefs = `#graphql
    type Users {
        id:ID!,
        Name: String!, 
        Courses: [String!]!
    }

    type Courses {
        id:ID!,
        Title:String!,
        Students:Int,
        cat:String!,
        Price:Int!,
        Tags: [String]
        Chapters: [String!]!
    }

    type Reviews {
        id:ID!,
        Message: String!, 
        Rating:Int
    }

    type Query {
        AllUser:[Users],
        AllCourses:[Courses],
        Reviews:[Reviews]
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
