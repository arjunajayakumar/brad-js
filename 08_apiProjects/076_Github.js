class Github {
    constructor() {
        this.client_id = '160d44ef945495d9c2bc';
        this.client_secret = '7a13ea54b32c54e8a1dcbe5575b4bbdd06e7263'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()

        return {
            profile
        }
    }
}

