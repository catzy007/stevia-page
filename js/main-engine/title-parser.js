function getTitleDate(title){
    var titledate = new Date(title.slice(0, 10));
    //var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return titledate.toLocaleDateString("en-US", options);
}

function getCleanedTitle(title){
    return title.split('-').join(' ');
}

function getSlicedTitle(title){
    return title.slice(11);
}

function getTitleOnly(title){
    return getSlicedTitle(getCleanedTitle(title));
}

function capitalize(s){
    return s && s[0].toUpperCase() + s.slice(1);
}