var tasks= [];
function saveTask(){
    var title = document.getElementById('inputTitle').value;
    var date = document.getElementById('inputDate').value;
    var dscp = document.getElementById('inputDscp').value;
    var task = {name: title, limit:date, dscp:dscp};
    if(title.lenght !=0 || date.lenght !=0 || dscp.lenght!=0){
        tasks.push(task);
    }
    
}
saveTask("aaa", "12121", "xxdddddddddddddd");
console.log(tasks);
