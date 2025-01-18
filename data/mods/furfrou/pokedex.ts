export const Pokedex: { [k: string]: ModdedSpeciesData } = {
	vaporeon: {
		inherit: true,
		otherFormes: ["Vaporeon-Arcane"],
		formeOrder: ["Vaporeon", "Vaporeon-Arcane"],
	},
	vaporeonarcane: {
		num: 134,
		name: "Vaporeon-Arcane",
		baseSpecies: "Vaporeon",
		forme: "Arcane",
		types: ["Water", "Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65},
		abilities: {0: "Multiscale", H: "Water Absorb"},
		heightm: 1,
		weightkg: 29,
		creator: "antyytna",
	},
	jolteon: {
		inherit: true,
		otherFormes: ["Jolteon-Arcane"],
		formeOrder: ["Jolteon", "Jolteon-Arcane"],
	},
	jolteonarcane: {
		num: 135,
		name: "Jolteon-Arcane",
		baseSpecies: "Jolteon",
		forme: "Arcane",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130},
		abilities: {0: "Intimidate", H: "Volt Absorb"},
		heightm: 0.8,
		weightkg: 24.5,
		creator: "antyytna",
	},
	flareon: {
		inherit: true,
		otherFormes: ["Flareon-Arcane"],
		formeOrder: ["Flareon", "Flareon-Arcane"],
	},
	flareonarcane: {
		num: 136,
		name: "Flareon-Arcane",
		baseSpecies: "Flareon",
		forme: "Arcane",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65},
		abilities: {0: "Strong Jaw", H: "Flash Fire"},
		heightm: 0.9,
		weightkg: 25,
		creator: "antyytna",
	},
	espeon: {
		inherit: true,
		otherFormes: ["Espeon-Mystic"],
		formeOrder: ["Espeon", "Espeon-Mystic"],
	},
	espeonmystic: {
		num: 196,
		name: "Espeon-Mystic",
		baseSpecies: "Espeon",
		forme: "Mystic",
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110},
		types: ["Psychic", "Ghost"],
		abilities: {0: "Prankster", H: "Magic Bounce"},
		heightm: 0.9,
		weightkg: 26.5,
		creator: "antyytna",
	},
	umbreon: {
		inherit: true,
		otherFormes: ["Umbreon-Mystic"],
		formeOrder: ["Umbreon", "Umbreon-Mystic"],
	},
	umbreonmystic: {
		num: 197,
		name: "Umbreon-Mystic",
		copyData: "Umbreon",
		baseSpecies: "Umbreon",
		forme: "Mystic",
		types: ["Dark", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65},
		abilities: {0: "Prankster", H: "Inner Focus"},
		heightm: 1,
		weightkg: 27,
		creator: "antyytna",
	},
	leafeon: {
		inherit: true,
		otherFormes: ["Leafeon-Proto"],
		formeOrder: ["Leafeon", "Leafeon-Proto"],
	},
	leafeonproto: {
		num: 470,
		name: "Leafeon-Proto",
		copyData: "Leafeon",
		baseSpecies: "Leafeon",
		forme: "Proto",
		types: ["Grass", "Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95},
		abilities: {0: "Stamina", H: "Chlorophyll"},
		heightm: 1,
		weightkg: 25.5,
		creator: "antyytna",
	},
	glaceon: {
		inherit: true,
		otherFormes: ["Glaceon-Proto"],
		formeOrder: ["Glaceon", "Glaceon-Proto"],
	},
	glaceonproto: {
		num: 471,
		name: "Glaceon-Proto",
		copyData: "Glaceon",
		baseSpecies: "Glaceon",
		forme: "Proto",
		types: ["Ice", "Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65},
		abilities: {0: "Quick Feet", H: "Ice Body"},
		heightm: 0.8,
		weightkg: 25.9,
		creator: "antyytna",
	},
	sylveon: {
		inherit: true,
		otherFormes: ["Sylveon-Compound"],
		formeOrder: ["Sylveon", "Sylveon-Compound"],
	},
	sylveoncompound: {
		num: 700,
		name: "Sylveon-Compound",
		copyData: "Sylveon",
		baseSpecies: "Sylveon",
		forme: "Compound",
		types: ["Fairy", "Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60},
		abilities: {0: "Tinted Lens", H: "Pixilate"},
		heightm: 1,
		weightkg: 23.5,
		creator: "antyytna",
	},
	leavanny: {
		inherit: true,
		baseStats: {hp: 75, atk: 113, def: 80, spa: 70, spd: 80, spe: 112},
		abilities: {0: "Swarm", 1: "Chlorophyll", H: "Technician"},
	},
	brionneviolet: {
		num: 729,
		name: "Brionne-Violet",
		baseSpecies: "Brionne",
		forme: "Violet",
		types: ["Water", "Fairy"],
		baseStats: {hp: 105, atk: 75, def: 57, spa: 105, spd: 60, spe: 123},
		abilities: {0: "Torrent", 1: "Regenerator", H: "Liquid Voice"},
		heightm: 1.8,
		weightkg: 44,
		creator: "Violet",
	},
	brionnevioletswimming: {
		num: 729,
		name: "Brionne-Violet-Swimming",
		baseSpecies: "Brionne",	
		forme: "Violet-Swimming",
		types: ["Water", "Fairy"],
		baseStats: {hp: 105, atk: 40, def: 80, spa: 137, spd: 109, spe: 54},
		abilities: {0: "Torrent", 1: "Regenerator", H: "Liquid Voice"},
		heightm: 1.8,
		weightkg: 44,
		creator: "Violet",
	},
	gardevoiramelia: {
		num: 282,
		name: "Gardevoir-Amelia",
		baseSpecies: "Gardevoir",
		forme: "Amelia",
		baseStats: {hp: 75, atk: 50, def: 70, spa: 145, spd: 120, spe: 103},
		gender: "F",
		abilities: {0: "Pixilate"},
		types: ["Ghost", "Fairy"],
		requiredItem: "Time Gear",
		creator: "antyytna",
	},
	mawilemegakorra: {
		num: 303,
		name: "Mawile-Mega-Korra",
		baseSpecies: "Mawile",
		forme: "Mega-Korra",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 50, atk: 115, def: 135, spa: 25, spd: 115, spe: 40},
		gender: "N",
		abilities: {0: "Huge Power"},
		heightm: 0.6,
		weightkg: 11.5,
		requiredItem: "Korra's Shades",
		creator: "viivian",
	},
	fluttermaneaster: {
		num: 987,
		name: "Flutter Mane-Aster",
		types: ["Ghost", "Dragon"],
		abilities: {0: "Protosynthesis"},
		baseStats: {hp: 65, atk: 95, def: 65, spa: 135, spd: 95, spe: 125},
		gender: "N",
		heightm: 1.4,
		weightkg: 4.0,
		creator: "viivian",
	},
	
	// Pure customs //
	
	albatross: {
		num: 2000,
		name: "Albatross",
		types: ["Water", "Steel"],
		baseStats: {hp: 125, atk: 80, def: 100, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Iron Barbs"},
		heightm: 1.3,
		weightkg: 13.0,
		creator: "Albatross",
	},
	fovospartion: {
		num: 2001,
		name: "Fovospartion",
		types: ["Electric", "Ghost"],
		gender: "M",
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Run Away", H: "Wonder Guard"},
		heightm: 0.1,
		weightkg: 0.1,
		otherFormes: ["Fovospartion-Tyke"],
		formeOrder: ["Fovospartion", "Fovospartion-Tyke"],
		creator: "ausma",
	},
	fovospartiontyke: {
		num: 2001,
		name: "Fovospartion-Tyke",
		baseForme: "Fovospartion",
		forme: "Tyke",
		types: ["Electric", "Ghost"],
		gender: "M",
		baseStats: {hp: 5, atk: 25, def: 1, spa: 25, spd: 1, spe: 193},
		abilities: {0: "Flicker"},
		heightm: 1.3,
		weightkg: 0.1,
		changesFrom: "Fovospartion",
		creator: "ausma",
	},
	calico: {
		num: 2008,
		name: "Calico",
		types: ["Water", "Normal"],
		baseStats: {hp: 140, atk: 70, def: 34, spa: 80, spd: 84, spe: 112},
		abilities: {0: "Minus", 1: "Weak Armor", H: "Innards Out"},
		gender: "F",
		heightm: 1.0,
		weightkg: 9.0,
		creator: "uppa",
	},
	hope: {
		num: 2009,
		name: "Hope",
		types: ["Fighting", "Normal"],
		baseStats: {hp: 112, atk: 84, def: 140, spa: 70, spd: 80, spe: 34},
		abilities: {0: "Plus", 1: "Gluttony", H: "Stamina"},
		gender: "F",
		heightm: 1.0,
		weightkg: 9.0,
		creator: "uppa",
	},
	wickesicott: {
		num: 547,
		name: "Wickesicott",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 71, atk: 103, def: 37, spa: 103, spd: 133, spe: 133},
		abilities: {0: "Prankster", 1: "Fluffy", H: "Cute Charm"},
		heightm: 0.7,
		weightkg: 6.6,
		gender: "F",
		creator: "Maddy",
	},
	deterraven: {
		num: 2003, 
		name: "Deterraven",
		types: ["Dark", "Fire"],
		abilities: {0: "Levitate", 1: "Bulletproof", H: "Aftermath"},
		baseStats: {hp: 90, atk: 85, def: 65, spa: 105, spd: 85, spe: 125},
		heightm: 0.5,
		weightkg: 27.3,
		creator: "Jumpheart",
	},
	ausma: {
		num: 2004,
		name: "Ausma",
		types: ["Electric", "Psychic"],
		abilities: {0: "Electric Surge", H: "Regenerator"},
		baseStats: {hp: 50, atk: 85, def: 110, spa: 125, spd: 75, spe: 55},
		gender: "F",
		heightm: 1.0,
		weightkg: 14.5,
		creator: "ausma",
	},
	foton: {
		num: 2005,
		name: "Foton",
		types: ["Fighting", "Psychic"],
		abilities: {0: "Neuroforce", H: "Technician"},
		baseStats: {hp: 50, atk: 95, def: 90, spa: 60, spd: 90, spe: 115},
		gender: "M",
		heightm: 1.1,
		weightkg: 3.5,
		creator: "ausma",
	},
	fotonknight: {
		num: 2005,
		name: "Foton-Knight",
		baseSpecies: "Foton",
		forme: "Knight",
		requiredItem: "Neca Sabre",
		types: ["Fighting", "Psychic"],
		abilities: {0: "Speed Boost", H: "Sharpness"},
		baseStats: {hp: 50, atk: 135, def: 100, spa: 60, spd: 90, spe: 65},
		gender: "M",
		heightm: 1.1,
		weightkg: 3.5,
		creator: "ausma",
	},
	meowmity: {
		num: 2006,
		name: "Meowmity",
		types: ["Poison", "Ghost"],
		abilities: {0: "Moxie", H: "Technician"},
		baseStats: {hp: 95, atk: 115, def: 40, spa: 90, spd: 50, spe: 130},
		gender: "F",
		heightm: 0.5,
		weightkg: 5,
		creator: "Amity",
	},
	
	// Kit changes //
	fennekin: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"},
	},
	braixen: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"},
	},
	delphox: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"},
	},
};
