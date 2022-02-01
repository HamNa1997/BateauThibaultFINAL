function GenrateDate(delay){
    var d = new Date();
    
    var weekday = new Array(7);
    weekday[0] = "Dimanche";
    weekday[1] = "Lundi";
    weekday[2] = "Mardi";
    weekday[3] = "Mercredi";
    weekday[4] = "Jeudi";
    weekday[5] = "Vendredi";
    weekday[6] = "Samedi";
    var monthday = new Array(12);
    monthday[0] = "Janvier";
    monthday[1] = "Fevrier";
    monthday[2] = "Mars";
    monthday[3] = "Avril";
    monthday[4] = "Mai";
    monthday[5] = "Juin";
    monthday[6] = "Juillet";
    monthday[7] = "Aout";
    monthday[8] = "Septembre";
    monthday[9] = "Octobre";
    monthday[10] = "Novembre";
    monthday[11] = "Decembre";

    d.setHours(d.getHours()+24*delay);

    if(d.getDay()<3 && d.getDay()>0){
        d.setHours(d.getHours()+24*(3-d.getDay()));
    }
    if(d.getDay()>3 && d.getDay()<6){
        d.setHours(d.getHours()+24*(6-d.getDay()));
    }

    return(weekday[d.getDay()]+'  '+d.getDate()+'  '+monthday[d.getMonth()]+'  '+d.getFullYear());



}
export {GenrateDate};