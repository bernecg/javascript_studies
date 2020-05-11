import api from "./github_api";

class App {
    constructor() {
        this.repositories = [];
        this.formElem = document.getElementById("repo-form");
        this.inputElem = document.querySelector("input[name=repository]");
        this.uListElem = document.getElementById("repo-list");
        this.registerHandlers();
    }

    registerHandlers() {
        this.formElem.onclick = (event) => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEle = document.createElement("span");
            loadingEle.appendChild(document.createTextNode("Loading..."));
            loadingEle.setAttribute("id", "loading");

            this.formElem.appendChild(loadingEle);
        } else {
            document.getElementById("loading").remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();
        let repoName = this.inputElem.value;

        if (repoName.length === 0) {
            return;
        }

        this.setLoading();

        try {
            const responseRepo = await api.get(`/repos/${repoName}`);

            const { name, description, html_url, owner: { avatar_url } } = responseRepo.data;

            this.repositories.push({ name, description, avatar_url, html_url });

            this.inputElem.value = "";

            this.renderRepos();
        }
        catch (err) {
            alert(`Repo ${repoName} does not exists...`);
        }

        this.setLoading(false);
    }

    renderRepos() {
        this.uListElem.innerHTML = "";
        this.repositories.forEach(repo => {
            let imgEle = document.createElement("img");
            imgEle.setAttribute("src", repo.avatar_url);
            let aImgEle = document.createElement("a");
            aImgEle.setAttribute("target", "_blanket");
            aImgEle.setAttribute("href", repo.html_url);
            aImgEle.appendChild(imgEle);

            let strongEle = document.createElement("strong");
            strongEle.appendChild(document.createTextNode(repo.name));

            let pEle = document.createElement("p");
            pEle.appendChild(document.createTextNode(repo.description));

            let aEle = document.createElement("a");
            aEle.setAttribute("target", "_blanket");
            aEle.setAttribute("href", repo.html_url);
            aEle.appendChild(document.createTextNode("Access"));

            let liEle = document.createElement("li");
            liEle.appendChild(aImgEle);
            liEle.appendChild(strongEle);
            liEle.appendChild(pEle);
            liEle.appendChild(aEle);

            this.uListElem.appendChild(liEle);
        });
    }
}

new App();
console.log("App loaded...");
