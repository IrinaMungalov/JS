let players = [
    {  // 0
        name: "player777",
        rating: 4.5,
        xp: 1_000_000,
        skills: ["fast", "exact", "silent"]
    },
    {  // 1
        name: "marry",
        rating: 5.0,
        xp: 2_000_000,
        skills: ["silent", "mvp"]
    },
    {  // 2
        name: "peters0n",
        rating: 2.5,
        xp: 1_000,
        skills: []
    },
]



players.forEach( 
    players => {
        console.log(players.name)

        players.skills.forEach (
            skill => console.log("--->",skill)
        )
    }
)