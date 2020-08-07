import uuid from 'react-uuid';

let Model = {
    addChat: (tipo, category = null) => {
        const chat = {
            id: uuid(),
            users : [],
            messages: [],
            tipo,
            category
        };
        window.localStorage.setItem(chat.id, JSON.stringify(chat));
        Model.saveChatinListChat(chat.id);

        return chat.id;
    },
    getChat: (uuid) => {
        const chat = JSON.parse(window.localStorage.getItem(uuid));
        return chat;
    },
    getChats: () => {
        const chats = JSON.parse(window.localStorage.getItem('chats'));
        return chats;
    },
    saveChatinListChat: (uuid) => {
        let chats = (Model.getChats()) ? Model.getChats() : [];

        chats.push(uuid);
        Model.updateListChats(chats);
        return true;
    },
    updateListChats: (chats) => {
        window.localStorage.setItem('chats', JSON.stringify(chats));
        return true;
    },
    updateChat: (chat) => {
        window.localStorage.setItem(chat.id, JSON.stringify(chat));
        return true;
    },
    addUserToChat: (uuidChat, uuidUser) => {
        let chat = JSON.parse(window.localStorage.getItem(uuidChat));
        let usersChat = chat.users;
        usersChat.push(uuidUser);
        chat.users = usersChat;
        Model.updateChat(chat);
    },
    findUserInChat: (idChat, idUser) => {
        const chat = Model.getChat(idChat);

        if(chat.users.find(user => user === idUser)){
            return true;
        }

        return null;
    },
    findChat: (idFriend, idUser) =>{
        const chats = Model.getChats();
        let chatID;

        if(!chats){
            return null;
        }
        chats.forEach(element => {
            const chat = Model.getChat(element);

            if(chat.tipo === 'unoauno' && chat.users.find(user => user === idFriend) && chat.users.find(user => user === idUser)){
                chatID = chat.id;
            }
            
        });
        return chatID;
    },
    findChatsOfUser: (idUser, tipo = 'unoauno') => {
        const chats = Model.getChats();

        let tmpchats = [];
        if(!chats){
            return null;
        }

        chats.forEach(element => {
            const chat = Model.getChat(element);

            if(chat.tipo === tipo && chat.users.find(user => user === idUser)){
                tmpchats.push(chat);
            }
            
        });
        return tmpchats;
    },
    findAllGroupChats: () => {
        const chats = Model.getChats();

        let tmpchats = [];
        if(!chats){
            return null;
        }

        chats.forEach(element => {
            const chat = Model.getChat(element);
            if(chat.tipo === 'grupal'){
                tmpchats.push(chat);
            }
            
        });
        return tmpchats;
    }
};

export default Model;