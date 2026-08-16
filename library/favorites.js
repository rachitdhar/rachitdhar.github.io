document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "Literature": [
            "../resources/favorites/Animal_Farm__GeorgeOrwell.jpg",
            "../resources/favorites/Story_of_the_Eye__GeorgesBataille.jpg",
        ],
        "Non Fiction": [
            "../resources/favorites/The_God_Delusion__RichardDawkins.jpg",
            "../resources/favorites/Surely_Youre_Joking_Mr_Feynman__RichardFeynman.jpg",
            "../resources/favorites/A_Billion_Wicked_Thoughts__OgiOggas_SaiGaddam.jpg",
            "../resources/favorites/The_Righteous_Mind__JonathanHaidt.jpg",
            "../resources/favorites/The_Blank_Slate__StevenPinker.jpg",
            "../resources/favorites/The_User_Illusion__TorNorretranders.jpg",
            "../resources/favorites/Cynical_Theories__HelenPluckrose_JamesLindsay.jpg",
            "../resources/favorites/Sapiens__YuvalNoahHarari.jpg",
        ],
        "Academic": [
            "../resources/favorites/QED__RichardFeynman.jpg",
            "../resources/favorites/The_Republic__Plato.jpg",
            "../resources/favorites/The_Sacred_and_The_Profane__MirceaEliade.jpg",
        ],
        // "Other Good Books": [
        //     { author: "Jonathan Haidt, Greg Lukianoff", title: "The Coddling of the American Mind" },
        //     { author: "Sam Harris", title: "The Moral Landscape" },
        //     { author: "Viktor Frankl", title: "Man's Search for Meaning" },
        //     { author: "Jeff Hawkins", title: "A Thousand Brains" },
        //     { author: "Leonard Susskind, Art Friedman", title: "Quantum Mechanics" },
        //     { author: "Cat Bohannon", title: "Eve" },
        //     { author: "Kathleen Stock", title: "Material Girls" },
        //     { author: "Malcolm Gladwell", title: "Blink" },
        //     { author: "-", title: "The Epic of Gilgamesh" },
        //     { author: "Fyodor Dostoyevsky", title: "Notes from Underground" },
        //     { author: "Lewis Carroll", title: "Alice's Adventures in Wonderland" },
        // ]
    };

    const root = document.getElementById('favorites-root');
    if (!root) return;

    Object.entries(data).forEach(([category, items]) => {
        const section = document.createElement('div');
        section.className = 'favorites-category';

        const heading = document.createElement('h3');
        heading.textContent = category;
        section.appendChild(heading);

        const isStaticList = Array.isArray(items) && items.every(item => item && typeof item === 'object' && 'author' in item && 'title' in item);

        if (isStaticList) {
            const list = document.createElement('div');
            list.className = 'favorites-list';

            items.forEach(item => {
                const row = document.createElement('div');
                row.className = 'favorites-list-item';

                const author = document.createElement('span');
                author.className = 'favorites-list-author';
                author.textContent = item.author;

                const title = document.createElement('span');
                title.className = 'favorites-list-title';
                title.textContent = item.title;

                row.appendChild(author);
                row.appendChild(title);
                list.appendChild(row);
            });

            section.appendChild(list);
        } else {
            const grid = document.createElement('div');
            grid.className = 'favorites-grid';

            items.forEach(src => {
                const card = document.createElement('div');
                card.className = 'favorite-card';

                const img = document.createElement('img');
                img.src = src;
                img.alt = `${category} image`;

                card.appendChild(img);
                grid.appendChild(card);
            });

            section.appendChild(grid);
        }

        root.appendChild(section);
    });
});
