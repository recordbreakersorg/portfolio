class TeamMember {
    name: String;
    profileid: Number;
    bio: String;

    public constructor(name: String, profileid: Number, bio: String) {
        this.name = name;
        this.profileid = profileid;
        this.bio = bio;
    }
    public profile_url() {
        return `https://avatars.githubusercontent.com/u/${this.profileid}`;
    }
}

const MEMBERS = [
    new TeamMember("Tandjou Wilfried", 192229680, "Just a USS1 Students, workin' on software projects with his classmates."),
    new TeamMember("Ange Merveille"  , 174602524, "Just a USS2 Students, workin' on software projects with his classmates."),
    new TeamMember("Mballa Armel"    , 192229865, "Just a USS1 Students, workin' on software projects with his classmates."),
    new TeamMember("Engon Morel"     , 137279923, "My best meal is an Ubuntu flavoured python beutiful-soup, and you?")
];
export {MEMBERS};