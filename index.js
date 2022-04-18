function superbowlWin(records){
    let recordYear = records.find(({result})=>result==='W');
    // return recordYear;
    if (recordYear){
        return recordYear.year;
    }
    // return recordYear ? recordYear.year : undefined
}
