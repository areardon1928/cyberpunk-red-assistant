export default interface Skill {
  name: string;
  skillLevel: number;
  modifier: number;
  parentSkill?: string;
}

export default interface SkillList {
  concentration?: Skill;
  concealRevealObject?: Skill;
  lipReading?: Skill;
  perception?: Skill;
  tracking?: Skill;
  athletics?: Skill;
  contortionist?: Skill;
  dance?: Skill;
  endurance?: Skill;
  resistTortureDrugs?: Skill;
  stealth?: Skill;
  driveLandVehicle?: Skill;
  pilotAirVehicle?: Skill;
  pilotSeaVehiclle?: Skill;
  riding?: Skill;
  accounting?: Skill;
  animalHandling?: Skill;
  bureaucracy?: Skill;
  business?: Skill;
  composition?: Skill;
  cryptography?: Skill;
  deduction?: Skill;
  education?: Skill;
  language?: Skill;
  librarySearch?: Skill;
  localExpert?: Skill;
  science?: Skill;
  tactics?: Skill;
  wildernessSurvival?: Skill;
  brawling?: Skill;
  evasion?: Skill;
  martialArts?: Skill;
  meleeWeapon?: Skill;

}