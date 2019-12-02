
class Mic {
    constructor()
    {
        this.client_id = 'f3496735b2654c2074c0';
        this.client_secret = 'faa0745cb4d8160aeb191667c084dd096d213d22';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
        &sort=${this.repos_sort}
        client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
             profile,
             repos
        }
    }
}
