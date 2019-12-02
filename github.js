
class Github {
    constructor(){
        this.client_id = 'f3496735b2654c2074c0';
        this.client_secret = 'faa0745cb4d8160aeb191667c084dd096d213d22'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
             profile
        }
    }
}