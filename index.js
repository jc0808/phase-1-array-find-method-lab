// code your solution here

function superbowlWin(array){

    // for ([key, values] of Object.entries(array)){
    //     return 
    // }
    
    // console.log(Object.entries(array))
    let wins = array.find(r => {
        if(r.result === "W"){
            return r.year;
        } 
    });

    if (wins){
        return wins.year;
    } else{
        return undefined;
    }
};
