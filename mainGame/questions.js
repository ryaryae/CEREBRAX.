const questionSets = [
    // Chemistry
    {
        question: 'Which of the following particles has no charge?',
        choices: ['Proton','Electron','Neutron','Ion'],
        answer: 'Neutron'
    },
    {
        question: 'Which of the following elements is a liquid at room temperature?',
        choices: ['Oxygen','Mercury','Iron','Nitrogen'],
        answer: 'Mercury'
    },
    {
        question: 'What is the chemical symbol for gold?',
        choices: ['Au','Ag','G','Go'],
        answer: 'Au'
    },
    {
        question: 'Which of the following has a positive charge?',
        choices: ['electron','ion','neutron','proton'],
        answer: 'proton'
    },
    {
        question: 'What is the atomic number of carbon?',
        choices: ['6','8','12','4'],
        answer: '6'
    },
    {
        question: 'Which element has the symbol of "Na"?',
        choices: ['Neon','Sodium','Nickel','Potassium'],
        answer: 'Sodium'
    },
    {
        question: 'How many valence electron does oxygen have?',
        choices: ['2','4','6','8'],
        answer: '6'
    },
    // Calculus
    {
        question: 'What is the indefinite integral of 0 with respect to x?',
        choices: ['0','C','1','x'],
        answer: 'C'
    },
    {
        question: 'What is the derivative of 2x?',
        choices: ['x','0','1','2'],
        answer: '2'
    },
    {
        question: 'What is the indefinite integral of cos(x) with respect to x?',
        choices: ['cos(x)','sin(x)','-cos(x)','-sin(x)'],
        answer: 'sin(x)'
    },
    {
        question: 'What is the definite integral of 0 with respect to x?',
        choices: ['x','1','C','0'],
        answer: '0'
    },
    {
        question: 'What is the indefinite integral of cosh(x) with respect to x?',
        choices: ['cosh(x)','sinh(x)','tanh(x)','coth(x)'],
        answer: 'sinh(x)'
    },
    {
        question: 'What is the derivative of 1?',
        choices: ['x','C','0','1'],
        answer: '0'
    },
    // Computer Science
    {
        question: "Who is widely considered the world's first computer programmer?",
        choices: ['Albert Einstein','Charles Darwin','Charles Babbage','Ada Lovelace'],
        answer: 'Ada Lovelace'
    },
    {
        question: 'Who is widely considered the father of computer?',
        choices: ['Charles Babbage','Ada Lovelace','Nikola Tesla','Charles Darwin'],
        answer: 'Charles Babbage'
    },
    // Number System
    {
        question: 'Convert from binary to decimal: 10011.',
        choices: ['19','35','20','11'],
        answer: '19'
    },
    {
        question: 'Convert from binary to decimal: 10110.',
        choices: ['19','20','21','22'],
        answer: '22'
    },
    // General Math
    {
        question: 'Find the value of x in the equation: 2x - 3 = 1.',
        choices: ['1','2','3','0'],
        answer: '2'
    },
    {
        question: 'Find the value of x in the equation: 2x - 6 = 3.',
        choices: ['3/2','5/2','1/2','9/2'],
        answer: '9/2'
    },
    // Probability
    {
        question: 'A card is drawn from a standard deck of 52 cards. What is the probability of drawing a king?',
        choices: ['1 in 4','1 in 13','1 in 26','1 in 52'],
        answer: '1 in 13'
    },
    {
        question: 'What is the probability of rolling an even number on a six-sided die?',
        choices: ['1 in 2','1 in 6','1 in 3','1 in 12'],
        answer: '1 in 2'
    },
    {
        question: 'What is the probability of drawing a red card in a standard deck of 52 playing cards?',
        choices: ['1 in 4','1 in 2','1 in 26','1 in 52'],
        answer: '1 in 2'
    },
    // Combination and Permutation
    {
        question: 'You have 12 shirts and 6 pants. How many different outfits can you make?',
        choices: ['2','6','72','18'],
        answer: '72'
    },
    // Physics
    {
        question: 'What is the acceleration due to gravity on Earth?',
        choices: ['9.8 m/s^2','9.8 N','9.8 m/s','9.8 kg'],
        answer: '9.8 m/s^2'
    },
    {
        question: 'A runner increases her velocity from 2 m/s to 10 m/s in 4 seconds. What is her acceleration?',
        choices: ['8 m/s^2','2 m/s^2','4 m/s^2','10 m/s^2'],
        answer: '2 m/s^2'
    },
    {
        question: 'A car travels 6 m in 3 seconds. What is its speed?',
        choices: ['2 m/s','18 m/s','3 m/s','9 m/s'],
        answer: '2 m/s'
    },
    {
        question: 'A 5 kg object is accelerating at 2 m/s^2. What is the net force acting on it?',
        choices: ['20 N','10 N','2 N','29 N'],
        answer: '10 N'
    },
    {
        question: 'What is the gravitational potential energy of a 2 kg object held 5 meters above the ground?',
        choices: ['10 J','98 J','9.8 J','49 J'],
        answer: '98 J'
    },
    {
        question: 'If a force of 50 N causes an object to accelerate at 5 m/s^2, what is its mass?',
        choices: ['10 kg','55 kg','45 kg','5 kg'],
        answer: '10 kg'
    },
    // Geometry
    {
        question: 'A rectangle has a length of 4 m and a width of 10 m. What is its area?',
        choices: ['20 m^2','40 m^2','14 m^2','6 m^2'],
        answer: '40 m^2'
    },
    {
        question: 'A rectanglular prism has a length of 2 m, a width of 6 m, and a height of 3 m. What is its volume?',
        choices: ['11 m^3','32 m^3','36 m^3','40 m^3'],
        answer: '36 m^3'
    },
    {
        question: 'What is the sum of the interior angles of a triangle?',
        choices: ['90 degrees','360 degrees','180 degrees','270 degrees'],
        answer: '180 degrees'
    },
    {
        question: 'What is the volume of a cube with a side of 3 cm?',
        choices: ['9 cm^3','27 cm^3','3 cm^3','18 cm^3'],
        answer: '27 cm^3'
    },
    {
        question: 'A triangle has a base of 20 m and a height of 5 m. What is its area?',
        choices: ['100 m^2','50 m^2','25 m^2','4 m^2'],
        answer: '50 m^2'
    },
]