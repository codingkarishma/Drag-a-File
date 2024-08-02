let upload_button=document.querySelector(".drop");
console.log(upload_button);

let imageDisplay=document.querySelector("#imageDisplay");
console.log(imageDisplay);

let error=document.querySelector(".error");
console.log(error);

let holder=document.querySelector(".holder");
console.log(holder);

let file=document.querySelector(".file");
console.log(file);

let fileHandler=(file,name,type)=>{
    console.log(file.type);
    console.log(file);
   if(type.split("/")[0] !== "image"){
    error.innerText="Please Uplaoad an Image file";
    return false;
   }
   error.innerText="";
   let reader=new FileReader();
   reader.readAsDataURL(file);
   reader.addEventListener("load",()=>{
   let imageContainer=document.createElement("figure");
   imageContainer.setAttribute("class","fig_Container");
   let img=document.createElement("img");
   img.setAttribute("id","image");
   img.src=reader.result;
   imageContainer.appendChild(img);
   imageContainer.innerHTML+=`<figcaption>${name}</figcaption>`
   imageDisplay.appendChild(imageContainer);
});
}

upload_button.addEventListener("change",()=>{
imageDisplay.innerHTML="";
let arr=[...upload_button.files];
console.log(arr);
arr.forEach((file)=>{
    fileHandler(file,file.name,file.type);
})
});

holder.addEventListener("dragenter",(e)=>{
e.preventDefault();
e.stopPropagation();
holder.classList.add("active");
},false);

holder.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    holder.classList.remove("active");
},false);

holder.addEventListener("dragover",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    holder.classList.add("active");
},false);

holder.addEventListener("drop",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    holder.classList.remove("active");
    let draggedData=e.dataTransfer;
    let files=draggedData.files;
    let arrFiles=[...files];
    imageDisplay.innerHTML="";
    arrFiles.forEach((file)=>{
        fileHandler(file,file.name,file.type);
    });

},false)

window.onload=()=>{
    error.innerText="";
};



