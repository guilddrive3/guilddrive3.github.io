

export function askPassword(ok, fail, password) {
    if (password == "rockstar") {
        return ok();
    } else {
        return fail();
    }
}

export let user = {
    name: 'John',

    loginOk() {
        return `${this.name} logged in`;
    },

    loginFail() {
        return `${this.name} failed to log in`;
    },

};


export function askPassword2(ok, fail, password) {

}

export let user2 = {

};




