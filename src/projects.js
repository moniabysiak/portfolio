const username = 'moniabysiak';
const repositoriesContainer = document.querySelector('.projects--js')

fetch(` https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(response => {
    for (let repository of response) {
        const {name, stargazers_count, html_url, description, topics } = repository;
    }
})
.catch((e) => {console.log(e)})

//     
//         const {name, html_url} = repository;
//         const element = `<li><a href="${html_url}">${name}</a></li>`
//         repositoriesContainer.insertAdjacentHTML('beforeend', element)
//     }
// })
