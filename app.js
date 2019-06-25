var tasks= [];
function saveTask(){
    var title = document.getElementById('inputTitle').value;
    var date = document.getElementById('inputDate').value;
    var dscp = document.getElementById('inputDscp').value;
    if(title == null || title.length == 0 ||date == null || date.length == 0 || dscp == null || dscp.length == 0){
    console.log('Error, There are empty fields');
    }else{
        var task = {name: title, limit:date, dscp:dscp};
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
function getData(){
    if(tasks!=null){
        var showData  = JSON.parse(localStorage.getItem("tasks"));
        console.log(showData);
    }else{
        console.log("There is not tasks");
    }
}
getData();

