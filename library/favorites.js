document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "Literature": [
            "../resources/favorites/Animal_Farm__GeorgeOrwell.jpg",
            "../resources/favorites/Story_of_the_Eye__GeorgesBataille.jpg",
            "../resources/favorites/The_Epic_of_Gilgamesh.jpg",
        ],
        "Non Fiction": [
            "../resources/favorites/The_God_Delusion__RichardDawkins.jpg",
            "../resources/favorites/Surely_Youre_Joking_Mr_Feynman__RichardFeynman.jpg",
            "../resources/favorites/A_Billion_Wicked_Thoughts__OgiOggas_SaiGaddam.jpg",
            "../resources/favorites/The_Coddling_Of_The_American_Mind__GregLukianoff_JonathanHaidt.jpg",
            "../resources/favorites/The_Righteous_Mind__JonathanHaidt.jpg",
            "../resources/favorites/The_Blank_Slate__StevenPinker.jpg",
            "../resources/favorites/The_User_Illusion__TorNorretranders.jpg",
            "../resources/favorites/Cynical_Theories__HelenPluckrose_JamesLindsay.jpg",
            "../resources/favorites/The_Moral_Landscape__SamHarris.jpg",
            "../resources/favorites/Material_Girls__KathleenStock.jpg",
            "../resources/favorites/Sapiens__YuvalNoahHarari.jpg",
        ],
        "Academic": [
            "../resources/favorites/QED__RichardFeynman.jpg",
            "../resources/favorites/The_Republic__Plato.jpg",
            "../resources/favorites/Quantum_Mechanics__LeonardSusskind_ArtFriedman.jpg"
        ]
    };

    const root = document.getElementById('favorites-root');
    if (!root) return;

    Object.entries(data).forEach(([category, images]) => {
        const section = document.createElement('div');
        section.className = 'favorites-category';

        const heading = document.createElement('h3');
        heading.textContent = category;
        section.appendChild(heading);

        const grid = document.createElement('div');
        grid.className = 'favorites-grid';

        images.forEach(src => {
            const card = document.createElement('div');
            card.className = 'favorite-card';

            const img = document.createElement('img');
            img.src = src;
            img.alt = `${category} image`;

            card.appendChild(img);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        root.appendChild(section);
    });
});
