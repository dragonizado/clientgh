class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${user.name}/${user.login}(</h3>
                    <a href="${user.html_url}" class="btn btn-primary btn-blog" target="_blank">View Profile</a>
                    <span class="badge badge-success">Followers ${user.followers}</span>
                    <span class="badge badge-primary">Following ${user.following}</span>
                    <span class="badge badge-warning">Company ${user.company}</span>
                    <span class="badge badge-info d-block">Blog: ${user.blog}</span>
                </div>
            </div>
        `;
        this.clearMessege();
    }

    showMessege(messege,cssClass){
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(messege));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div,profile);
        this.clearUserData();

    }

    clearMessege(){
        const alertFound = document.querySelector(".alert");
        if(alertFound){
            alertFound.remove();
        }
    }

    clearUserData(){
        const userCard = document.getElementById("profile");
        const userRepositories = document.getElementById("repositories");
        if(userCard){
            userCard.innerHTML = '';
        }
        if(userRepositories){
            userRepositories.innerHTML = '';
        }
    }

    showRepositories(repositories){
        let template = '';
        repositories.forEach(repo => {
            template += `
            <div class="card card-body mt-2 animated bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6"></div>
                </div>
            </div>
        `;
        });
        document.getElementById('repositories').innerHTML = template;
    }
}

module.exports = UI;