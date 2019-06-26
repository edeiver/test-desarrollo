
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
          $("#TableBody").append('<tr> <th scope="row"><i class="material-icons">check_circle_outline</i></th> <td class="tdColorBlue"> '+ tasks[i].name +' </td> <td> '+tasks[i].limit+' </td><td> <i class="material-icons iDark">edit</i><i class="material-icons">delete_outline</i></td></tr>'  )
        }

    }else{
        alert("There is not tasks");
    }
}

function isEmpty(){
  return title.value == null || title.value.length == 0 ||date.value == null || date.value.length == 0;
}
