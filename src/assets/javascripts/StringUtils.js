function isEmpty(obj) {
    if (obj == '' || typeof (obj) == "undefined" || obj == null) {
        //debugger;
        return true;
    } else {
        //debugger;
        return false;
    }
}

function isObjEmpty(obj) {
    if (obj == "" || obj == null || obj == undefined || obj == '' || obj == "undefined") {
        return true;
    } else {
        return false;
    }
}

