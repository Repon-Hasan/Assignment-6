
function calculateTask(T){
    const remaininTask=document.getElementById("task-remaining").innerText;

    const convertTask= parseInt(remaininTask);

    const currentTask= convertTask -1;
    document.getElementById("task-remaining").innerText=currentTask;

  
    const completeTask = document.getElementById("completeTask").innerText;

      const convertTotalTask = parseInt(completeTask);

      const totalTask = convertTotalTask+1;

      document.getElementById("completeTask").innerText=totalTask;

      var time = new Date();
      
        const Time=time.toLocaleString('en-US', { 
          hour: 'numeric', 
          minute: 'numeric', 
          second: 'numeric', // Add seconds
          hour12: true 
        })
    
      
      const title=document.getElementById(T).innerText;
      const para=document.createElement("p");
      para.classList.add('bg','my-4','mx-6','py-2','px-2','rounded-xl','text-[14px]','w-3/4');
      para.innerText=`you have completed the task  ${title} at ${Time}`;
 
      const displayData=document.getElementById("add-data");
      displayData.appendChild(para);

      if(currentTask==0 ){
        alert('congrats!!! you have completed all the current task');
      }
    //   displayData.innerHTML=para;  
}



function btnHandle(B,T){
    const button = document.getElementById(B);
button.addEventListener('click', function() {
    // Disable the button
    if(this.disabled = true){
        button.style.backgroundColor="gray";
    } 
    alert('Board Updated successfully');

    const remaininTask=document.getElementById("task-remaining").innerText;

    const convertTask= parseInt(remaininTask);

    const currentTask= convertTask -1;    

     
     
     

    calculateTask(T);

   
}
);
}
btnHandle('c1-btn',"title1")
btnHandle('c2-btn',"title2")
btnHandle('c3-btn',"title3")
btnHandle('c4-btn',"title4")
btnHandle('c5-btn',"title5")
btnHandle('c6-btn',"title6")
//document.getElementById('c1-btn')



document.getElementById('clear').addEventListener('click',()=>{
    const displayData=document.getElementById("add-data");
    displayData.innerText=" ";

})

