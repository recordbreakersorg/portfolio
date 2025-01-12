/** @type {import('./$types').PageLoad} */
import { MEMBERS } from "$lib/team.ts";
function get_bio(username: string): string {
    const url: string =
        `https://raw.githubusercontent.com/${username}/${username}`
        + "/refs/heads/main/README.md";
    return new Promise(function(resolve, reject) {
        fetch(url)
            .then(function(result) {
                result.text()
                    .then(resolve)
                    .catch(reject);
            })
            .catch(reject);
    });
}

export async function load({}:{}) {
    const members: {name: string, bio: string, color: [number, number, number], profile: string}[] = [];
    for(const pre_member of MEMBERS) {
        try {
            members.push({
                name: pre_member.name,
                profile: pre_member.profile_url(),
                bio: await get_bio(pre_member.username),
                color: pre_member.color,
            });
        } catch(e) {
            console.log(`Error fetching data for ${pre_member.name}:\n`, e);
        }
    }
    let team_bio: string = "# Error loading";
    try {
        team_bio = await get_bio("recordbreakersorg");
    } catch(e) {
    }
    return {
        members,
        team_bio,
    };
}