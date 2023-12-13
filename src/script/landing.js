const mySiema = new Siema({
    perPage: {
        768: 2,
        1024: 3,
        1440: 4,
        1800: 5,
        2500: 6,
        3000: 7,
    },
    loop: true,
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());