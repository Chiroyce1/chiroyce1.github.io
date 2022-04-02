async function main() {
    const apiUrl = "https://api.github.com/users/Chiroyce1/repos";
    const repos = await (await fetch(apiUrl)).json();
    const exceptions = ['Chiroyce1', 'markdown']
    repos.forEach(repo => {
        if (!repo.fork && !repo.archived && !exceptions.includes(repo.name)) {
            let card = document.createElement('a');
            let img = document.createElement('img');
            let imgUrl = `https://github-readme-stats.vercel.app/api/pin/?username=Chiroyce1&repo=${repo.name}&show_owner=true&theme=github_dark`;
            img.src = imgUrl;
            img.classList.add('repo');
            card.href = repo.html_url;
            card.appendChild(img);
            document.querySelector('.repos').appendChild(card);
        }
    });
    document.querySelector('.loading').style.display = 'none';
}

main();
