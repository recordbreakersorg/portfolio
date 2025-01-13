type ColorTuple = [number, number, number];

class TeamMember {
	name: string;
	profileid: number;
	username: string;
	color: ColorTuple;

	public constructor(
		name: string,
		profileid: number,
		username: string,
		color: string | ColorTuple
	) {
		this.name = name;
		this.profileid = profileid;
		this.username = username;
		if (color instanceof String) this.color = [12, 12, 200];
		else this.color = color;
	}
	public profile_url(): string {
		return `https://avatars.githubusercontent.com/u/${this.profileid}`;
	}
}

const MEMBERS: readonly TeamMember[] = [
	new TeamMember('Tandjou Wilfried', 192229680, 'tyswilfried', [75, 50, 75]),
	new TeamMember('Ange Merveille', 174602524, 'ngouajio', [115, 50, 75]),
	new TeamMember('Mballa Armel', 192229865, 'mballa-armel', [65, 50, 125]),
	new TeamMember('Engon Morel', 137279923, 'ken-morel', [5, 10, 15])
];
export { MEMBERS, ColorTuple };
