let Model = {
    addUser: (id, nickname) => {
        const user = {
            id,
            nickname
        };

        window.sessionStorage.setItem('user', user);
    },
    getUser: () => {
        const user = window.sessionStorage.getItem('user');
        return user;
    }
}

export default Model;