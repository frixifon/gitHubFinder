class GitHub{
    constructor(){
        this.client_id = "e9707adbc50a5e23c8e8";
        this.client_secret="2783aafca6fd3cedfe2630127ca193cea6952e9a";
        this.repos_count=5;
        this.repos_="created: asc";
    }

    async getUser(user){
        const profilleResponse = await fetch(`https://api.github.com/users/${user}/client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profilleResponse.json();
        const repos = await repoResponse.json();

        return{
            profile,repos
        }
    }
}