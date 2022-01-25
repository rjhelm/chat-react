import MessageList from './MessageList.js';
import Avatar from './ui/Avatar.js';

export default class Conversation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    renderConversationHeader = () => {
        const { conversation } = this.props;

        return (
            <header className="h-16 border-b p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Avatar className="mr-4" initial={conversation.name} size="lg" />
                    <div className="font-bold">{conversation.name}</div>
                </div>
                <div className="flex">
                    {conversation.participants.map(participant => (
                        <Avatar 
                            key={participant.id}
                            initials={participant.username}
                            style={{ marginRight:  -7 }}
                        />
                    ))}
                </div>
            </header>
        );
    }

    renderConversationBody() {
        const { conversation } = this.props;

        return (
            <div className="flex-1 p-4 overflow-y-scroll scrolling-touch">
                <MessageList messages={conversation.texts} />
            </div>
        )
    }
}