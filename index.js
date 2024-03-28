// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);
}

function distanceFromHqInFeet(location) {
    const blockInFeet = 264; // One block is 264 feet
    return distanceFromHqInBlocks(location) * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Assuming each block is 264 feet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distance over 2000 feet
    } else {
        return 'cannot travel that far'; // Limiting rides over 2500 feet
    }
}