import Team, {Character} from '../app';

test('test method add for Set update', () => {
  const person1 = new Character("gggg")
  const person2 = new Character("ffff")
  const team1  = new Team ()
  team1.add(person1)
  team1.add(person2)
  const targetSetSize = 2;
  const actualSetSize = team1.members.size;
  expect(actualSetSize).toEqual(targetSetSize);
})

test('test method add to throw Error when the same person is added', () => {
  const person1 = new Character("gggg")
  const team1  = new Team ()
  team1.add(person1)
  expect(() => {
    team1.add(person1)
  }).toThrow();
})

test('test method addAll for Set update', () => {
  const person1 = new Character("gggg")
  const person2 = new Character("ffff")
  const person3 = new Character("xxxx")
  const team1  = new Team ()
  team1.addAll(person1, person2, person3)
  const targetSetSize = 3;
  const actualSetSize = team1.members.size;
  expect(actualSetSize).toEqual(targetSetSize);
})

test('test method toArray for outcoming data type ', () => {
  const person1 = new Character("gggg")
  const person2 = new Character("ffff")
  const person3 = new Character("xxxx")
  const team1  = new Team ()
  team1.addAll(person1, person2, person3)
  const targetResult = true;
  const actualResult = Array.isArray(team1.toArray());
  expect(actualResult).toEqual(targetResult);
})