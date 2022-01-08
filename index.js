import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import mongoose from 'mongoose';

import {MONGODB} from './config.js';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers/index.js';


const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
})



mongoose.connect(MONGODB, {
    
}).then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
}).then(res => {
    console.log(`Server is running at ${res.url}`);
});