var btnSub = document.getElementById('sub')
var bookmarkName = document.getElementById('bookmarkName')
var siteUrl = document.getElementById('siteUrl')
// console.log(btnSub ,bookmarkName,siteUrl )

var siteList=[];
sub.onclick= addSite;

if(localStorage.getItem('list') !== null){
    siteList = JSON.parse(localStorage.getItem('list'));
    display();
}else{
    siteList=[];
}
//add site 
function addSite(){
  
    var list= {
        sName:bookmarkName.value,
        sUrl:siteUrl.value,
    }
    console.log(list)
    // to add list of objects to array
    siteList.push(list)
    console.log(siteList);
    clearForm();
    display();
    localStorage.setItem('list',JSON.stringify(siteList))
    
  }
 
    // to clear form
    function clearForm(){
    bookmarkName.value = null;
    siteUrl.value = null;
    }
    


// display site list in html
function display(){
    var box=`
    <tr>        
    <th scope="col">Index</th>
    <th scope="col">Website Name</th>
    <th scope="col">Visit</th>
    <th scope="col">delete</th>
 </tr>
         `;
    
    for(var i=0; i<siteList.length; i++){
box +=`
    <tr>
      <th scope="row">${i+1}</th>
      <td><p class= "bg-transparent">${siteList[i].sName}</p></td>     
      <td> <button class="btn btn-danger w-75 my-3"> <a class="bg-transparent " href="${siteList[i].sUrl}"><i class="bg-transparent fa-solid fa-eye"></i> Visit </a>  </button>
       </td>
      <td><button onclick="deleted(${i})" class="btn btn-warning w-75 my-3"> <i class="bg-transparent fa fa-trash"></i> Delete </button>
      </td>
    </tr>
  
`
    }
    document.getElementById(`tab`).innerHTML=box;
}

function deleted(index){
    siteList.splice(index,1)
    display()
    localStorage.setItem('list',JSON.stringify(siteList))
    console.log(siteList)
}


