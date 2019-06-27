
var tasks= [];
var title = document.getElementById('inputTitle');
var date = document.getElementById('inputDate');
var dscp = document.getElementById('inputDscp');


function saveTask(){

    if(isEmpty()){
      alert('Error, There are empty fields');
    } else {
        var task = {name: title.value, limit:date.value, dscp:dscp.value};
        tasks.push(task);
        localStorage.tasks = JSON.stringify(tasks);
        window.location.href = "index.html";

    }

}

function ListData(){
    if(localStorage.tasks!=null){
        var tasks  = JSON.parse(localStorage.getItem("tasks"));

        for (var i = 0; i < tasks.length; i++) {
          $("#TableBody").append('<tr> <th scope="row"><i class="material-icons">check_circle_outline</i></th> <td class="tdColorBlue" onclick="preview('+i+')">'+ tasks[i].name +' </td> <td> '+tasks[i].limit+' </td><td> <i class="material-icons iDark" onclick="editTask('+i+')">edit</i><i class="material-icons" onclick="deleteTask('+i+')">delete_outline</i></td></tr>'  )
        }

    }else{
        alert("There is not tasks");
    }
}

function isEmpty(){
  return title.value == null || title.value.length == 0 ||date.value == null || date.value.length == 0;
}
function preview(pos){
  var tasks  = JSON.parse(localStorage.getItem("tasks"));
  task = tasks[pos];
  $('#emptyPrev').hide();
  $('#footerPrev').append('<h4>'+ task.name+'</h4> <small>'+task.limit+'</small><p>'+task.dscp+'</p>')

}

function editTask(pos){
  location.href ="add.html?pos="+pos;
  
}
function deleteTask(pos){
  var tasks  = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasks.splice(pos, 1);
  localStorage.tasks=JSON.stringify(tasks);
  location.reload(true);
}
function loadData(){
  var params = location.href.split("=");
  var pos = params.length > 1? params[1]: null;
if(pos!=null){
  var tasks  = JSON.parse(localStorage.getItem("tasks"));
  title.value = tasks[pos].name;
  date.value =tasks[pos].limit
  dscp.value = tasl[pos].dscp;
  } 
}