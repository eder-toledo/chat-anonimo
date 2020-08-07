let Model = {
    addUser: (id, nickname) => {
        const user = {
            id: id,
            nickname: nickname
        };

        window.sessionStorage.setItem('user', JSON.stringify(user));
        Model.saveUserinListUsers(user);
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
    updateListUsers: (users) => {
        window.localStorage.setItem('users', JSON.stringify(users));
        return true;
    }
}

export default Model;