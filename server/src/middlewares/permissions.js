import { isLoggedIn } from '../helpers';

const permissions = {
    Query: {
        users: isLoggedIn,
        me: isLoggedIn,
    },
    Mutation: {
        createConversation: isLoggedIn,
        sendTextMessage: isLoggedIn,
    },
    Subscription: {
        text: isLoggedIn,
        user: isLoggedIn,
    },
    Conversation: {
        name: isLoggedIn,
    }
};

export default permissions;