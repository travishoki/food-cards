export const BRANDS = {
	ARBYS: "arbys",
	AUNTY_ANNES: "aunty-annes",
	CHICK_FIL_A: "chick-fil-a",
	COSTA_VIDA: "costa-vida",
	COSTCO: "costco",
	DAIRY_QUEEN: "dairy-queen",
	DEL_TACO: "del-taco",
	LITTLE_CAESARS: "little-caesars",
	OLIVE_GARDEN: "olive-garden",
	RED_ROBIN: "red-robin",
	SEVEN_ELEVEN: "7-eleven",
	SONIC: "sonic",
	TACO_AMIGO: "taco-amigo",
	TACO_BELL: "taco-bell",
	TEXAS_ROADHOUSE: "texas-roadhouse",
	WAFFLE_LOVE: "waffle-love",
	WENDYS: "wendys",
} as const;

export type Brand = (typeof BRANDS)[keyof typeof BRANDS];
