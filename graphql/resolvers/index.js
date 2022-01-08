import postsResolver from "./posts.js";
import userResolvers from "./users.js";

const resolvers = {
    Query: {
        ...postsResolver.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postsResolver.Mutation
    }
};

export default resolvers;