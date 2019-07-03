// CODE EXPLAINED channel

// Select the Elements
let elements, clear, dateElement, list, input, input1, form, CHECK, UNCHECK, LINE_THROUGH;
let LIST, data, id;


var init = function() {   
    clear = document.querySelector(".clear");
    dateElement = document.getElementById("date");
    list = document.getElementById("list");
    input = document.getElementById("input");
    input1 = document.getElementById("input1");
    form = document.getElementById("form");
    // Classes names
    CHECK = "fa-check-circle";
    UNCHECK = "fa-circle-thin";
    LINE_THROUGH = "lineThrough";
        
    // get item from localstorage
    data = localStorage.getItem("TODO");
    
    // check if data is not empty
    if(data) {
        LIST = JSON.parse(data);
        id = LIST.length; // set the id to the last one in the list
        loadList(LIST); // load the list to the user interface
    }else{
        // if data isn't empty
        LIST = [];
        id = 0;
    }

    if(list) {
        list.addEventListener("click", function(event){
            const element = event.target; // return the clicked element inside list
            const elementJob = element.attributes.job.value; // complete or delete
            
            if(elementJob == "complete"){
                completeToDo(element);
            }else if(elementJob == "delete"){
                removeToDo(element);
            }
            
            // add item to localstorage ( this code must be added where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));
        });
    }

    
// add an item to the list user the enter key
    if(form) {
        form.addEventListener("submit", function() {
            // if(event.keyCode == 13){
                const title = input.value;
                const descr = input1.value;
                const now = new Date();
        
                // if the input isn't empty
                if(title){
                    addToDo(title, descr, now.toLocaleDateString("en-US", options), id, false, false);
                    
                    LIST.push({
                        name : title,
                        desc : descr,
                        now : now.toLocaleDateString("en-US", options),
                        id : id,
                        done : false,
                        trash : false
                    });
                    
                    // add item to localstorage ( this code must be added where the LIST array is updated)
                    localStorage.setItem("TODO", JSON.stringify(LIST));
                    
                    id++;
                }
                input.value = "";
                input1.value = "";
        
            // }
        });

        form.addEventListener("reset", function() {
                input.value = "";
                input1.value = "";
        })
    }

    
    // clear the local storage
    if(clear) {
        clear.addEventListener("click", function(){
  debugger
        elements = document.querySelectorAll(".item");
        elements.forEach(function(a){
            let v=a.querySelector(".item-done");           
               if(LIST[v.id].done){ 
                    removeToDo(v);
                    localStorage.setItem("TODO", JSON.stringify(LIST));
                }
          });
        });
                           
    }
    
    // Show todays date
    const options = {weekday : "long", month:"short", day:"numeric", hour:"numeric"};
    const today = new Date();

    if(dateElement) dateElement.innerHTML = today.toLocaleDateString("en-US", options);
}

// load items to the user's interface
function loadList(array){
    
    array.forEach(function(item){
        addToDo(item.name, item.desc, item.now, item.id, item.done, item.trash);
    });
}


// add to do function

function addToDo(title, descr, date, id, done, trash){
    
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                    <div class="fa ${DONE} co item-done" job="complete" id="${id}"></div>
                    <div class="text ${LINE} item-content">
                        <div class="item-content-title">${title}</div>
                        <div class="item-content-descr">${descr}</div>
                        <div class="item-content-date">${date}</div>
                    </div>
                    <div class="fa fa-times de item-remove" job="delete" id="${id}"></div>
                  </li>
                `;
    
    const position = "beforeend";
    
    if(list) list.insertAdjacentHTML(position, item);
}

// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}























/*
        form.addEventListener("reset", function() {
debugger
        document.querySelectorAll("item").forEach(fonction(item){
                                                  
                                                  
                                                  })
        })
    }

    */








