const Model = {
    addUser: (id, nickname) => {
        const user = {
            id: id,
            nickname: nickname
        };
        window.sessionStorage.setItem('user', JSON.stringify(user));
        Model.saveUserinListUsers(user);
    },
    editUser: (nickname) => {
        let user = Model.getUser();
        user.nickname = nickname;
        let users = Model.getUsers().filter(e => e.id !== user.id);
        Model.updateListUsers(users);
        Model.addUser(user.id, user.nickname);
    },
    getUser: () => {
        const user = JSON.parse(window.sessionStorage.getItem('user'));
        return user;
    },
    getUsers: () => {
        const users = JSON.parse(localStorage.getItem('users'));
        return users;
    },
    saveUserinListUsers: (user) => {
        let users = (Model.getUsers()) ? Model.getUsers() : [];

        users.push(user);
        Model.updateListUsers(users);
        return true;
    },
    findUserinListUsers: (uuid) => {
        const users = (Model.getUsers()) ? Model.getUsers() : [];
        const resultado = users.find( user => user.id === uuid );

        return resultado;
    },
    updateListUsers: (users) => {
        window.localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
}

export default Model;