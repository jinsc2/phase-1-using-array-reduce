const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = batteryBatches.reduce(function(count, currentBattery){
//     if (currentBattery in count){
//         count[currentBattery]++;
        
//     } 
//     return count;});

const totalBatteries = batteryBatches.reduce(function(accumulator, element){ return element + accumulator})
// => 11