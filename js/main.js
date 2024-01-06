var SiteName = document.querySelector('#SiteName');
var SiteUrl = document.querySelector('#SiteUrl');
var Submit = document.querySelector('#btnSubmit');
var webList = [];

if(localStorage.getItem('listall') != null ){
    webList = JSON.parse(localStorage.getItem('listall'));
    drawtable()
}
function Addweb(){
    var all ={
        name : SiteName.value ,
        url : SiteUrl.value ,
    }
    webList.push(all);
   localStorage.setItem('listall' , JSON.stringify(webList));
   drawtable()
   console.log(webList)
clear()
}




function clear(){
    SiteName.value  = '';
    SiteUrl.value = '';
}

function drawtable(){
    if(webList.length == 0){
        container = `
        <td scope="row" colspan="4" class="text-danger fw-bolder">NO DATA</td>
        `
    }else{
        
    var container = '';
    for (let i = 0; i < webList.length ; i++) {
        container += ` 
        <tr class="">
            <td >${i+1}</td>
            <td>${webList[i].name}</td>
            <td><button class="visit btn  btn-success"><i class="fa-solid fa-eye"></i> Visit</button></td>
            <td><button onclick="deleteWeb(${i})" class="delete btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
         </tr>`
         console.log(webList[i].name)
    }
    

    }
    document.getElementById('tbody').innerHTML = container
}

function deleteWeb(index){
    webList.splice(index,1);
    localStorage.setItem('listall' , JSON.stringify(webList))
    drawtable(webList)
}