
showNotes();

let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
let notes=localStorage.getItem("notes");
if(notes==null){
notesObj=[];
}
else{

    notesObj=JSON.parse(notes);
}

let addTxt=document.getElementById("addTxt");
let addtitle=document.getElementById("exampleInputEmail1");

let obj={
    title:addtitle.value,
    txt:addTxt.value,
}


notesObj.push(obj);
localStorage.setItem("notes",JSON.stringify(notesObj));
addTxt.value="";
addtitle.value="";
showNotes();

});


function showNotes(){
    let html="";
    let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];

}

else{
    notesObj=JSON.parse(notes);
}  
notesObj.forEach(function(element,index){
html+=`

<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> ${element.title}</h5>
                        <p class="card-text"> ${element.txt}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;

});

let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

function deleteNote(index){
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];
    
    }
    
    else{
        notesObj=JSON.parse(notes);
    }  

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}

let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();

   let noteCards= document.getElementsByClassName("noteCard");
   Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;

if(cardTxt.includes(inputVal)){
element.style.display="block";

}
else{
    element.style.display="none";

}
});
});

