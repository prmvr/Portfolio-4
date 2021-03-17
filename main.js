const repos = document.querySelector('#repos');
const following = document.querySelector('#following');
updateText();
async function updateText() {
    const resData = await fetch("https://api.github.com/users/prmvr").then(res => {
        return res.json()
    });
    repos.innerHTML = `${resData.public_repos}+`;
}
