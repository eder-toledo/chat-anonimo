import uuid from 'react-uuid';
import ChatModel from './chat';

let Model = {
    addMessageToChat: (uuidChat, message, nickname) => {
        const tmpmessage = {
            id: uuid(),
            text: message,
            date: new Date().toISOString(),
            user: nickname
        };

        let chat = ChatModel.getChat(uuidChat);
        if (chat) {
            let messages = chat.messages;
            messages.push(tmpmessage);
            chat.messages = messages;
            ChatModel.updateChat(chat);
        }

        return tmpmessage;
    },
    ocultMessage: (uuidMessage) => {

    }
};

export default Model;