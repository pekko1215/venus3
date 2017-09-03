/**
 * Created by pekko1215 on 2017/09/03.
 */
var LoadOnline = function(){
    var query = getUrlVars();
    var data = JSON.parse(atob(atob(query.data)));
    console.log(data);
    return data;
}