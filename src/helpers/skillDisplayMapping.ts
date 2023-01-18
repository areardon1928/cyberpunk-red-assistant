class TwoWayMap {
  map: any;
  reverseMap: any;
  constructor(map:any) {
     this.map = map;
     this.reverseMap = {};
     for(const key in map) {
        const value = map[key];
        this.reverseMap[value] = key;   
     }
  }
  get(key: any) { return this.map[key]; }
  revGet(key: any) { return this.reverseMap[key]; }
}

export const skillDisplayMapping = new TwoWayMap({
  "concentration": "concentration",
  "concealRevealObject": "conceal/reveal_object",
  "lipReading": "lip_reading",
  "perception": "perception",
  "tracking": "tracking",
  "athletics": "athletics",
  "contortionist": "contortionist",
  "dance": "dance",
  "endurance": "endurance",
  "resistTortureDrugs": "resist_torture/drugs",
  "stealth": "stealth",
  "driveLandVehicle": "drive_land_vehicle",
  "pilotAirVehicle": "pilot_air_vehicle (x2)",
  "pilotSeaVehicle": "pilot_sea_vehicle",
  "riding": "riding",
  "accounting": "accounting",
  "animalHandling": "animal_handling",
  "bureaucracy": "bureaucracy",
  "business": "business",
  "composition": "composition",
  "criminology": "criminology",
  "cryptography": "cryptography",
  "deduction": "deduction",
  "education": "education",
  "gamble": "gamble",
  "language": "language",
  "librarySearch": "library_search",
  "localExpert": "local_expert",
  "science": "science",
  "tactics": "tactics",
  "wildernessSurvival": "wilderness_survival",
  "brawling": "brawling",
  "evasion": "evasion",
  "martialArts": "marital_arts (x2)",
  "meleeWeapon": "melee_weapon",
  "acting": "acting",
  "playInstrument": "play_instrument",
  "archery": "archery",
  "autofire": "autofire (x2)",
  "handgun": "handgun",
  "heavyWeapons": "heavy_weapons (x2)",
  "shoulderArms": "shoulder_arms",
  "bribery": "bribery",
  "conversation": "conversation",
  "humanPerception": "human_perception",
  "interrogation": "interrogation",
  "persuasion": "persuasion",
  "personalGrooming": "peronsal_grooming",
  "streetwise": "streetwise",
  "trading": "trading",
  "wardrobeAndStyle": "wardrobe_&_style",
  "airVehicleTech": "air_vehicle_tech",
  "basicTech": "basic_tech",
  "cybertech": "cybertech",
  "demolitions": "demolitions (x2)",
  "electronicsSecurityTech": "electronics/security_tech (x2)",
  "firstAid": "first_aid",
  "forgery": "forgery",
  "landVehicleTech": "land_vehicle_tech",
  "paintDrawSculpt": "paint/draw/sculpt",
  "paramedic": "paramedic (x2)",
  "photographyFilm": "photography/film",
  "pickLock": "pick_lock",
  "pickPocket": "pick_pocket",
  "seaVehicleTech": "sea_vehicle_tech",
  "weaponstech": "weaponstech"
})