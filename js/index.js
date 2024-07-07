
var bookmark = document.getElementById('bookmark');
var website = document.getElementById('website');
 var siteList=[];

 var sumbit =document.querySelector('.press');
 var cover = document.querySelector('.cover');
 var closeBtn = document.getElementById("close");

 

if(localStorage.getItem("siteContainer")!==null){
    siteList = JSON.parse( localStorage.getItem("siteContainer"));
    displayData();  
};


//  function setupEventListeners() {
   
//      sumbit.addEventListener('click',function(){
    
//       sumbit.addEventListener('click', function() {
//            addSite()
//            cover.classList.replace('d-none', 'd-flex');
//         });
    
//  })
// }

 
//  setupEventListeners()
          
function coverList() {
    cover.classList.replace('d-none', 'd-flex');
}

// Optionally, if you need to hide the cover
function hideCover() {
    cover.classList.replace('d-flex', 'd-none');
}


function addSite(){

var isNameValid = validationName();
var isURLValid  =  validationUrl();
    
  
if (isNameValid && isURLValid) {
     var site={
      name: bookmark.value,
      URL:website.value,
    }
   siteList.push(site);

   localStorage.setItem('siteContainer' , JSON.stringify(siteList));

   displayData();
   clearForm();

   


}

else if( isNameValid === false || isURLValid === false){
    coverList()
}

}




function validationName() {
    
    var text =bookmark.value ;
    var regex = /^[A-Z][a-z]{3,9}$/ ;

    
    if(regex.test(text) == true){
        bookmark.classList.add("is-valid");

        bookmark.classList.remove("is-invalid");
        return true ;

    }


    else{
        bookmark.classList.add("is-invalid");
    bookmark.classList.remove("is-valid");
    return false ;
    }
}


function validationUrl() {
    
    var text =website.value ;
    var regex = /^(ftp|http|https):\/\/[^ "]+$/ ;
    
    if(regex.test(text) == true){
        website.classList.add("is-valid");

        website.classList.remove("is-invalid");
   return true ;

    }


    else{
        website.classList.add("is-invalid");
    website.classList.remove("is-valid");
    return false ;
    }
  
}










function clearForm() {
    bookmark.value=null;
    website.value=null;
    
}
function displayData() {
    var box ="";
    for (var i=0 ;i< siteList.length;i++){

        box +=`
        <tr>
        <td>${i + 1}</td>
        <td>${siteList[i].name}</td>
        <td>
            <a href="${siteList[i].URL}" target="_blank" class="  btn-visit p-2 rounded-2 mb-4">
                <i class="fa-regular fa-eye"></i> Visit
            </a>
        </td>
        <td>
            <a href="#" onclick="deleteSite(${i})" class="  btn-delete p-2 rounded-2 mb-4">
                <i class="fa-solid fa-trash-can"></i> Delete
            </a>
        </td>
    </tr> `

    }
    document.getElementById("tableSite").innerHTML=box
    
    
}

function deleteSite(indexItem){
    siteList.splice(indexItem,1);
    localStorage.setItem('siteContainer' , JSON.stringify(siteList));
    displayData();

}



// function coverList() {
//     cover.addEventListener.apply('click', function(){
//         cover.classList.replace('d-none','d-flex ')
//     })
//    ;
//     closeBtn.addEventListener('click ',  function(){
//         cover.classList.replace('d-flex','d-none ') 
//     })
// }