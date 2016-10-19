var Helper = {};

Helper.getDateArr = function(date){
    var y = date.getFullYear();
    var M = date.getMonth()+1;
    var d = date.getDate();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    return [y, M, d, h, m, s];
};

Helper.dom = function(id){
    if(typeof id =='string'){
       return document.getElementById(id)
    }else{
        return id;
    }
};

Helper.fill0 = function(num){
    return num < 10 ? '0' + num:num;
};


Helper.isStarWith = function(str,char){
    if(str.chaeAt(0) == char){
        return true;
    }
    return false;
};

