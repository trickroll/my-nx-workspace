export function animal(): string {
  return 'animal';
}

export interface Animal {
  name: string;
  sound: string;
}

const animals: Animal[] = [
  { name: 'cow', sound: 'moo' },
  { name: 'dog', sound: 'woof' },
  { name: 'pig', sound: 'oink' },
];

export function getRandomAnimal(): Animal {
  return animals[Math.floor(Math.random() * animals.length)];
}
