class Github{
    
    constructor(client_id,client_secret){
        this.client_id = client_id;
        this.client_secret = client_secret;
    }

    async fetchUser(user){
       const userDataRequest = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       const userData = await userDataRequest.json();
       const repositoriesRequest = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       const reposData = await repositoriesRequest.json();
    //    console.log(userData);
       return {
        userData,
        reposData
       };
    }
}

module.exports = Github;