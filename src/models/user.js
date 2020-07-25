let Model = {
    addUser: (id, nickname) => {
        const user = {
            id: id,
            nickname: nickname
        };

        window.sessionStorage.setItem('user', JSON.stringify(user));
    },
    getUser: () => {
        const user = JSON.parse(window.sessionStorage.getItem('user'));
        return user;
    }
}

export default Model;