
let creatTable = function (result){
    var html = '<table border=3px><tr align=center>';
        let keys = Object.keys(result[0]);
        for (i = 0; i < keys.length; i++) {
            html += '<td><b>' + keys[i] + '</b></td>';
        }
        for(i=0;i<result.length;i++){
            html+='</tr><tr>'
            for(j=0;j<keys.length;j++){
                if(result[i][keys[j]]!==null)
                html+='<td>'+result[i][keys[j]]+'</td>';
                else html+='<td>-----</td>';
            }
        }
        console.log(result[0][keys[0]]);
        return html + '</tr></table>';
}
module.exports = creatTable;