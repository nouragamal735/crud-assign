var btnSub = document.getElementById('sub')
var bookmarkName = document.getElementById('bookmarkName')
var siteUrl = document.getElementById('siteUrl')
var siteList=[]
btnSub.onclick= addSite;

if(localStorage.getItem('list') !== null){
    siteList = JSON.parse(localStorage.getItem('list'));
    display();
}else{
    siteList=[];
}

function addSite(){
    var list= {
        sName:bookmarkName.value,
        sUrl:siteUrl.value,
    }
    console.log(list)
    localStorage.setItem('list',JSON.stringify(siteList))
    console.log(siteList);
    display()
}


function display(){
    var box=``;
    for(var i=0; i<siteList.length; i++){
box +=`
<table class="table list">
  <thead>
    <tr>
     
      <th scope="col">Index</th>
      <th scope="col">Website Name</th>
      <th scope="col">Visite</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><p>${siteList[i].sName}</p></td>
      <td> <button onclick="visited(${siteList[i].sUrl})" class="btn btn-danger w-75 my-3"><i class="fa-solid fa-eye"></i> Visit </button>
      </td>      

      <td><button onclick="deleted(${i})" class="btn btn-warning w-75 my-3"> <i class="fa fa-trash"></i> Delete </button>
      </td>
    </tr>
  </tbody>
</table> `
    }
    document.getElementById(`tab`).innerHTML=box;
}

function deleted(index){
    console.log(index)
    productList.splice(index,1)
    display()
    localStorage.setItem('siteList',JSON.stringify(list))
    console.log(list)
}

