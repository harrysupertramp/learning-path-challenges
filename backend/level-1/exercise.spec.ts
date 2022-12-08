import { expect } from 'chai'

type Character = {
    name: string;
    health: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

const randomScore = (): number => {
    let smallest = 0
    let totalScore = 0
    for (let i = 0; i < 4; i++) {
      const score = Math.floor((Math.random() * (6)) + 1)
      if (i == 0) {
        smallest = score
      }
      if (score < smallest) {
        smallest = score
      }
      totalScore += score
    }
    return totalScore - smallest
  }
  
  const generateCharacter = (nameSet: string): Character => {
    const character: Character = {
      name: nameSet,
      health: 0,
      strength: randomScore(),
      dexterity: randomScore(),
      constitution: randomScore(),
      intelligence: randomScore(),
      wisdom: randomScore(),
      charisma: randomScore()
    }
    character.health = 10 - Math.floor((character.constitution - 10) / 2)
  
    return character
  }

describe('[Backend] Level 1', () => {
    it('Should create a character with correct stats', () => {
        const character = generateCharacter('ShadowyDnD')
        expect(character.name).eq('ShadowyDnD')
        expect(character.strength).greaterThan(0);
        expect(character.dexterity).greaterThan(0);
        expect(character.constitution).greaterThan(0);
        expect(character.intelligence).greaterThan(0);
        expect(character.wisdom).greaterThan(0);
        expect(character.charisma).greaterThan(0);
        expect(10 - Math.floor((character.constitution - 10)/2)).eq(character.health);
    })
})

