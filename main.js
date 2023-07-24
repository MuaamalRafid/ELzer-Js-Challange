var addClasses = document.querySelector(".classes-to-add");
let removeClasses = document.querySelector(".classes-to-remove");
var current = document.querySelector("[title='Current']");
var classesList = document.querySelector(".classes-list").children[1];



// show Classes
function showClass() {

    
    document.querySelector(".classes-list").children[1].innerHTML = "";
    if (current.classList.length > 0) {
      
        [...current.classList].sort().forEach((item) => { 
                 let span = document.createElement("span");
                 let classText = document.createTextNode(item);

                 span.appendChild(classText);

                 document.querySelector(".classes-list").children[1].appendChild(span);
        });
             
       
        
        

  } else {
    let noClass = "No Class To Show";
    document.querySelector(".classes-list").children[1].append(noClass);
  }
}


showClass();

// add Classes
addClasses.onblur = function () {

  let className = addClasses.value.toLowerCase();
  className = className.split(" ");

  if (addClasses.value != "") {
    addClasses.value = "";
  }

  for (let i = 0; i < className.length; i++) {
      if (className[i] != "") {
       
      current.classList.add(className[i]);
    }
  }

 showClass();
};


// remove Classes
removeClasses.onblur = function () {
    let className = removeClasses.value.toLowerCase();
    className = className.split(" ");

     if (removeClasses.value != "") {
       removeClasses.value = "";
    }
    
      for (let i = 0; i < className.length; i++) {
        if (className[i] != "") {
          current.classList.remove(className[i]);
        }
    }
   showClass();
};








