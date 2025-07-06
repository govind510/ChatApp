const facts = [
    'A day on Venus is longer than a year on Venus.',
    'Jupiter has 79 known moons.',
    'Mars has the tallest volcano in the solar system.',
    'Neutron stars can spin at a rate of 600 rotations per second.',
    'Saturn is the least dense planet in our solar system.'
];

document.getElementById('factBtn').addEventListener('click', () => {
    const index = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[index];
});

const planets = [
    {
        name: 'Mercury',
        description: 'Mercury is the closest planet to the Sun and the smallest in our solar system.'
    },
    {
        name: 'Venus',
        description: 'Venus has a thick atmosphere that traps heat, making it the hottest planet.'
    },
    {
        name: 'Earth',
        description: 'Earth is the only planet known to support life, with vast oceans and an atmosphere rich in oxygen.'
    },
    {
        name: 'Mars',
        description: 'Mars is known as the Red Planet and is home to the tallest volcano, Olympus Mons.'
    },
    {
        name: 'Jupiter',
        description: 'Jupiter is the largest planet and has a Great Red Spot, which is a giant storm.'
    },
    {
        name: 'Saturn',
        description: 'Saturn is famous for its bright rings composed of ice and rock.'
    },
    {
        name: 'Uranus',
        description: 'Uranus rotates on its side, which makes its seasons very extreme.'
    },
    {
        name: 'Neptune',
        description: 'Neptune is a windy planet with supersonic winds in its atmosphere.'
    }
];

const planetList = document.getElementById('planetList');
const planetInfo = document.getElementById('planetInfo');

planets.forEach(planet => {
    const li = document.createElement('li');
    li.textContent = planet.name;
    li.addEventListener('click', () => {
        planetInfo.textContent = planet.description;
    });
    planetList.appendChild(li);
});
