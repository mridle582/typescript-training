let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i=0; i < sports.length; i++) {
    console.log(sports[i]);
}

for (let sport of sports) {
    if (sport == "Cricket") {
        console.log(`${sport} << My Favorite!`);
    }
    else {
        console.log(sport);
    }
}
