
console.log("Write 🖊️")

// Grabbing some elements
let title = document.querySelector("#title");
let text = document.querySelector("#text");
let save = document.querySelector("#save");
// console.log(`title: ${title} \n text-content: ${text} \n save: ${save}`)

// Saving data in local-storage
save.addEventListener("click",function(){
    
    let str_title = title.value;
    let str_text = text.value;

    if(str_title==="" || str_text === ""){
        console.log("Please! provide data ")
    }
    else{

        var title_content = str_title;
        if(localStorage.getItem("title_content") === ""){
            console.log("Please! provide data to store")
        }
        else{
            localStorage.setItem(title_content,str_text)
        }
    }


})

