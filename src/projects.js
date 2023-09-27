import smallStar from './images/star-01 1.png'
import vector from './images/Vector.png'
import github from './images/github.png'

const username = 'moniabysiak';
const repositoriesContainer = document.querySelector('.projects--js')

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(response => {
        for (let repository of response) {
            const { name, stargazers_count, html_url, description, topics, homepage } = repository;
            let tags = ``;

            for ( let tag of topics) {
                tags += `<li class="text-white font-bold text-sm px-2 py-1 bg-gray/10 rounded"> ${tag} </li>`
            }
            const element = `<article
                class="rounded-lg md:rounded-xl overflow-clip bg-gradient-to-br from-white/10 to-white/5 flex flex-col h-full">
                <div
                    class="h-11 bg-gradient-to-br p-4 from-white/10 to-white/5 shadow-inner-light ring-1 ring-inset ring-page rounded-t-lg flex gap-1.5 justify-start items-center">
                    <span class="w-3 h-3 block rounded-full bg-page opacity-50""></span>
                    <span class="w-3 h-3 block rounded-full bg-page opacity-50""></span>
                    <span class="w-3 h-3 block rounded-full bg-page opacity-50""></span>
                </div>
                <div
                    class="h-auto p-5 md:p-6 lg:p-10ring-1 ring-page ring-inset rounded-b-xl flex flex-col grow justify-between">
                    <header class="flex gap-4 items-center mb-4">
                        <h3 class="text-white font-bold text-2xl"> ${name} </h3>
                        <p class="px-2 py-1 gap-1 flex items-center bg-gray/10 text-gray rounded"> <img
                                class="w-4 h-4" src="${smallStar}"> ${stargazers_count} </p>
                    </header>
                    <p class="text-gray mb-4 text-xl"> ${description} </p>
                    <ul class="flex gap-2 flex-wrap mb-10">
                        ${tags}
                    </ul>
                    <div class="flex flex-row flex-wrap gap-4 justify-start">
                        <a href= "${homepage}" target="_blank" target="noreferrer nofollow"
                            class="text-pink bg-page py-4 px-5 font-bold text-base md:text-xl rounded-2xl flex gap-3 items-center border-gray-800 border-2 transition-color duration-500 hover:border-pink border-zinc-500">
                            <img src="${vector}" alt> View demo </a>
                        <a href= "${html_url}" target="_blank" target="noreferrer nofollow"
                            class="text-pink bg-page py-4 px-5 font-bold text-base md:text-xl rounded-2xl flex gap-3 items-center border-gray-800 border-2 transition-color duration-500 hover:border-pink border-zinc-500">
                            <img src="${github}" alt> Source code </a>
                    </div>
                </div>
            </article>`
            if (description !== null) repositoriesContainer.insertAdjacentHTML('beforeend', element)

        }
    })
    .catch((e) => { console.log(e) })

