import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'c5f38d13-05c4-4090-8665-6f9265b5cbc1', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{height: '100%'}}/>
    </div>
    )
}
export default ChatsPage