export default class Team {
  constructor() {
      this.members = new Set();
  }

  add(person) {
    const isPersonInTeam = () => this.members.has(person);
    if (!isPersonInTeam()) {
      this.members.add(person);
    }
    else {
      throw new Error ('Person is already in the team')
    }
  }

  addAll(...persons) {
   for (const person of persons) {
    this.members.add(person);
   }
  }
  
  toArray() {
    return Array.from(this.members)
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}