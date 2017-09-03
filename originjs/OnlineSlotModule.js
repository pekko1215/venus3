/**
 * Created by pekko1215 on 2017/09/03.
 */
var LoadOnline = function(){
    var query = getUrlVars();
    try {
        var data = JSON.parse(atob(atob(query.data)));
        window.ClearData();
    }catch(e){
        return false;
    }
    return data;
}