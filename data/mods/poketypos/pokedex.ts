export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	soaperior: {
		num: 1,
	   name: "Soaperior",
	  	types: ["Water", "Fairy"],
	  	baseStats: {hp: 75, atk: 70, def: 100, spa: 70, spd: 100, spe: 113},
	  	abilities: {0: "Water Veil", H: "Water Bubble"},
	  	weightkg: 41,
	},
	starizard: {
		num: 2,
		name: "Starizard",
		types: ["Psychic", "Dragon"],
		baseStats: {hp: 78, atk: 64, def: 78, spa: 109, spd: 105, spe: 100},
		abilities: {0: "Telepathy", H: "Analytic"},
		weightkg: 75.5,
	},
	smoninja: {
		num: 3,
		name: "Smoninja",
		types: ["Flying", "Ghost"],
		baseStats: {hp: 71, atk: 85, def: 72, spa: 108, spd: 72, spe: 122},
		abilities: {0: "Cursed Body", 1: "White Smoke", H: "Magic Guard"},
		weightkg: 19.5,
	},
	sapras: {
		num: 4,
		name: "Sapras",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 120, atk: 85, def: 80, spa: 95, spd: 95, spe: 60},
		abilities: {0: "Sap Sipper", 1: "Battle Armor", H: "Natural Cure"},
		weightkg: 250,
	},
	furant: {
		num: 5,
		name: "Furant",
		types: ["Dragon", "Fighting"],
		baseStats: {hp: 68, atk: 119, def: 58, spa: 48, spd: 123, spe: 59},
		abilities: {0: "Fur Coat", H: "Fluffy"},
		weightkg: 4.1,
	},
	urthwyrm: {
		num: 6,
		name: "Urthwyrm",
		types: ["Ground", "Dragon"],
		baseStats: {hp: 90, atk: 105, def: 85, spa: 40, spd: 115, spe: 45},
		abilities: {0: "Earth Eater", H: "Shed Skin"},
		weightkg: 57,
	},
	mud: {
		num: 7,
		name: "Mud",
		types: ["Ground", "Water"],
		baseStats: {hp: 105, atk: 65, def: 75, spa: 105, spd: 100, spe: 50},
		abilities: {0: "Damp", 1: "Water Absorb", H: "Gooey"},
		weightkg: 30,
	},
	fweezing: {
		num: 8,
		name: "Fweezing",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 65, atk: 120, def: 85, spa: 50, spd: 70, spe: 100},
		abilities: {0: "Levitate", 1: "Slush Rush", H: "Thermal Exchange"},
		weightkg: 9.5,
	},
	arcamine: {
		num: 9,
		name: "Arcamine",
		types: ["Ground", "Rock"],
		baseStats: {hp: 90, atk: 125, def: 80, spa: 75, spd: 80, spe: 105},
		abilities: {0: "Guard Dog", 1: "Solid Rock", H: "Sand Rush"},
		weightkg: 159,
	},
	aurodactyl: {
		num: 10,
		name: "Aurodactyl",
		types: ["Steel", "Flying"],
		baseStats: {hp: 80, atk: 45, def: 80, spa: 105, spd: 110, spe: 85},
		abilities: {0: "Heatproof", H: "Clear Body"},
		weightkg: 59,
	},
	eelix: {
		num: 11,
		name: "Eelix",
		types: ["Water", "Electric"],
		baseStats: {hp: 75, atk: 75, def: 105, spa: 75, spd: 150, spe: 30},
		abilities: {0: "Water Veil", 1: "Volt Absorb", H: "Static"},
		weightkg: 179,
	},
	appleton: {
		num: 12,
		name: "Appleton",
		types: ["Grass", "Steel"],
		baseStats: {hp: 110, atk: 80, def: 75, spa: 105, spd: 110, spe: 30},
		abilities: {0: "Heavy Metal", 1: "Gluttony", H: "Thick Fat"},
		weightkg: 400,
	},
	crowhat: {
		num: 13,
		name: "Crowhat",
		types: ["Grass", "Dark"],
		baseStats: {hp: 95, atk: 105, def: 80, spa: 60, spd: 80, spe: 115},
		abilities: {0: "Wind Rider", 1: "Unnerve", H: "Intimidate"},
		weightkg: 28,
	},
	beavor: {
		num: 14,
		name: "Beavor",
		types: ["Normal", "Water"],
		baseStats: {hp: 70, atk: 130, def: 75, spa: 45, spd: 95, spe: 85},
		abilities: {0: "Cheek Pouch", 1: "Sharpness", H: "Carpenter"},
		weightkg: 59,
	},
	judowoodo: {
		num: 15,
		name: "Judowoodo",
		types: ["Fighting"],
		baseStats: {hp: 70, atk: 55, def: 115, spa: 30, spd: 55, spe: 85},
		abilities: {0: "Sturdy", 1: "Iron Fist", H: "Pure Power"},
		weightkg: 38,
	},
	roseroast: {
		num: 16,
		name: "Roseroast",
		types: ["Grass", "Fire"],
		baseStats: {hp: 70, atk: 60, def: 65, spa: 125, spd: 90, spe: 105},
		abilities: {0: "White Smoke", 1: "Infiltrator", H: "Flame Body"},
		weightkg: 14.5,
	},
	taranitar: {
		num: 17,
		name: "Taranitar",
		types: ["Bug", "Fire"],
		baseStats: {hp: 110, atk: 75, def: 100, spa: 134, spd: 100, spe: 81},
		abilities: {0: "Gooey", 1: "Flash Fire", H: "Flame Body"},
	},
	throg: {
		num: 18,
		name: "Throg",
		types: ["Water"],
		baseStats: {hp: 120, atk: 100, def: 85, spa: 30, spd: 85, spe: 45},
		abilities: {0: "Poison Heal", 1: "Steadfast", H: "Mold Breaker"},
		weightkg: 30,
	},
	kazuumarill: {
		num: 19,
		name: "Kazuumarill",
		types: ["Fire", "Steel"],
		baseStats: {hp: 100, atk: 20, def: 70, spa: 100, spd: 80, spe: 50},
		abilities: {0: "Punk Rock", 1: "Soundproof", H: "Klutz"},
		weightkg: 28.5,
	},
	glimmaurora: {
		num: 20,
		name: "Glimmaurora",
		types: ["Ice", "Fire"],
		baseStats: {hp: 83, atk: 90, def: 55, spa: 81, spd: 86, spe: 130},
		abilities: {0: "Levitate", H: "Magic Guard"},
		weightkg: 15,
	},
	witherwing: {
		num: 21,
		name: "Wither Wing",
		types: ["Dark", "Electric"],
		baseStats: {hp: 85, atk: 117, def: 71, spa: 95, spd: 101, spe: 101},
		abilities: {0: "Reckless"},
	   weightkg: 108,
	},
	bullibot: {
		num: 22,
		name: "Bullibot",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 109, atk: 123, def: 91, spa: 44, spd: 83, spe: 45},
		abilities: {0: "Volt Absorb", 1: "Iron Fist", H: "Long Reach"},
		weightkg: 280,
	},
	zarune: {
		num: 23,
		name: "Zarune",
		types: ["Ground", "Psychic"],
		baseStats: {hp: 105, atk: 120, def: 105, spa: 70, spd: 105, spe: 95},
		abilities: {0: "Mold Breaker"},
		weightkg: 110,
	},
	fetagross: {
		num: 24,
		name: "Fetagross",
		types: ["Fairy"],
		baseStats: {hp: 90, atk: 120, def: 130, spa: 95, spd: 95, spe: 70},
		abilities: {0: "Stench", 1: "Lingering Aroma", H: "Aroma Veil"},
		weightkg: 550,
	},
	ironthreads: {
		num: 25,
		name: "Iron Threads",
		types: ["Poison", "Ghost"],
		baseStats: {hp: 120, atk: 128, def: 86, spa: 70, spd: 108, spe: 58},
		abilities: {0: "Quark Drive", H: "Filter"},
		weightkg: 28,
	},
	toedscruel: {
		num: 26,
		name: "Toedscruel",
		types: ["Ground", "Grass"],
		baseStats: {hp: 80, atk: 70, def: 75, spa: 90, spd: 120, spe: 80},
		abilities: {0: "Mycelium Might", H: "Dancer"},
		weightkg: 58,
	},
	wugtrio: {
		num: 27,
		name: "Wugtrio",
		types: ["Water", "Poison"],
		baseStats: {hp: 40, atk: 110, def: 50, spa: 20, spd: 82, spe: 123},
		abilities: {0: "Technician", 1: "Rattled", H: "Swift Swim"},
		weightkg: 5.4,
	},
	nabscar: {
		num: 28,
		name: "Nabscar",
		types: ["Steel", "Dark"],
		baseStats: {hp: 70, atk: 115, def: 100, spa: 50, spd: 85, spe: 45},
		abilities: {0: "White Smoke", H: "Screen Cleaner"},
		weightkg: 350,
	},
	kabluxie: {
		num: 29,
		name: "Kabluxie",
		types: ["Fire", "Fighting"],
		baseStats: {hp: 95, atk: 115, def: 120, spa: 65, spd: 120, spe: 65},
		abilities: {0: "Levitate"},
	},
	deoxin: {
		num: 30,
		name: "Deoxin",
		types: ["Poison"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Poison Touch"},
	},
	mirroar: {
		num: 31,
		name: "Mirroar",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 56, atk: 58, def: 136, spa: 109, spd: 112, spe: 36},
		abilities: {0: "Mirror Armor", 1: "Unnerve", H: "Magic Bounce"},
	},
	sparkeops: {
		num: 32,
		name: "Sparkeops",
		types: ["Flying", "Electric"],
		baseStats: {hp: 90, atk: 115, def: 90, spa: 102, spd: 75, spe: 95},
		abilities: {0: "Volt Absorb", H: "Rocky Payload"},
	   weightkg: 11,
	},
	mielmetal: {
		num: 33,
		name: "Mielmetal",
		types: ["Bug", "Steel"],
		baseStats: {hp: 105, atk: 115, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Honey Gather", H: "Honey Fists"},
	},
	abomarang: {
		num: 34,
		name: "Abomarang",
		types: ["Normal", "Ground"],
		baseStats: {hp: 95, atk: 112, def: 85, spa: 67, spd: 75, spe: 60},
		abilities: {0: "Technician", H: "Sand Stream"},
	},
	zapoark: {
		num: 35,
		name: "Zapoark",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 85, atk: 50, def: 70, spa: 120, spd: 95, spe: 90},
		abilities: {0: "Electric Surge"},
	},
	graceon: {
		num: 36,
		name: "Graceon",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 75, atk: 65, def: 60, spa: 120, spd: 120, spe: 85},
		abilities: {0: "Natural Cure", H: "Serene Grace"},
	},
	dragsire: {
		num: 37,
		name: "Dragsire",
		types: ["Dragon"],
		baseStats: {hp: 95, atk: 25, def: 80, spa: 105, spd: 95, spe: 25},
		abilities: {0: "Rough Skin", 1: "Regenerator", H: "Unaware"},
	},
	rotox: {
		num: 38,
		name: "Rotox",
		types: ["Poison", "Dark"],
		baseStats: {hp: 50, atk: 125, def: 92, spa: 55, spd: 92, spe: 106},
		abilities: {0: "Unburden", H: "Moxie"},
	    weightkg: 102.5,
	},
	condorus: {
		num: 39,
		name: "Condorus",
		types: ["Poison", "Flying"],
		baseStats: {hp: 84, atk: 125, def: 80, spa: 125, spd: 80, spe: 106},
		abilities: {0: "Keen Eye", 1: "Merciless", H: "Sand Rush"},
	},
	mrtime: {
		num: 40,
		name: "Mr. Time",
		types: ["Fairy", "Steel"],
		baseStats: {hp: 85, atk: 50, def: 90, spa: 110, spd: 100, spe: 85},
		abilities: {0: "Misty Surge", 1: "Pressure", H: "Clear Body"},
	},
	bruteboreas: {
		num: 41,
		name: "Brute Boreas",
		types: ["Ice", "Water"],
		baseStats: {hp: 111, atk: 79, def: 99, spa: 127, spd: 99, spe: 55},
		abilities: {0: "Snow Warning", H: "North Wind"},
	},
	ironavian: {
		num: 42,
		name: "Iron Avian",
		types: ["Dark", "Flying"],
		baseStats: {hp: 84, atk: 114, def: 110, spa: 114, spd: 70, spe: 78},
		abilities: {0: "Pressure", 1: "Natural Cure", H: "Big Pecks"},
	},
	inswimeroar: {
		num: 43,
		name: "Inswimeroar",
		types: ["Water", "Fighting"],
		baseStats: {hp: 95, atk: 120, def: 95, spa: 65, spd: 95, spe: 60},
		abilities: {0: "Torrent", H: "Intimidate"},
	},
	nalulele: {
		num: 44,
		name: "Nalu Lele",
		types: ["Water", "Bug"],
		baseStats: {hp: 105, atk: 90, def: 125, spa: 95, spd: 70, spe: 85},
		abilities: {0: "Pressure", H: "Tinted Lens"},
	},
	kimmono: {
		num: 45,
		name: "Kimmo-no",
		types: ["Dragon", "Ghost"],
		baseStats: {hp: 65, atk: 100, def: 110, spa: 110, spd: 130, spe: 85},
		abilities: {0: "Purifying Salt", 1: "Cursed Body", H: "Overcoat"},
	},
	gravlord: {
		num: 46,
		name: "Gravlord",
		types: ["Grass", "Ground"],
		baseStats: {hp: 137, atk: 139, def: 89, spa: 97, spd: 71, spe: 37},
		abilities: {0: "Gravitational Pull"},
	},
	mespring: {
		num: 47,
		name: "Mespring",
		types: ["Grass", "Poison"],
		baseStats: {hp: 95, atk: 120, def: 135, spa: 75, spd: 80, spe: 75},
		abilities: {0: "Grassy Surge"},
	},
	cragmortar: {
		num: 48,
		name: "Cragmortar",
		types: ["Rock", "Dragon"],
		baseStats: {hp: 95, atk: 45, def: 112, spa: 125, spd: 80, spe: 83},
		abilities: {0: "Rough Skin", H: "Fortitude"},
	},
	boodra: {
		num: 49,
		name: "Goodra",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 90, atk: 120, def: 60, spa: 90, spd: 160, spe: 80},
		abilities: {0: "Immunity", 1: "Insomnia", H: "Gooey"},
	},
	faeraora: {
		num: 50,
		name: "Faeraora",
		types: ["Fighting", "Fairy"],
		baseStats: {hp: 80, atk: 110, def: 80, spa: 110, spd: 80, spe: 140},
		abilities: {0: "Justified", 1: "Magician", H: "Trace"},
	},
};
