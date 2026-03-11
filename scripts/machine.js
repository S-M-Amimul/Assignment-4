function showOnly(id){
    console.log('ShowOnly clicked')
    const allApplication =document.getElementById("allApplication");
    const interview = document.getElementById("interview")
    const rejected = document.getElementById("rejected")

    allApplication.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

    document.getElementById("allApplication-btn").classList.remove("btn-active");
    document.getElementById("interview-btn").classList.remove("btn-active");
    document.getElementById("rejected-btn").classList.remove("btn-active");


   document.getElementById(id).classList.remove("hidden");
   document.getElementById(id+"-btn").classList.add("btn-active")
}

function selected(btn, type){
   
    const jobCard = btn.closest('.job');
    const displayBtn = jobCard.querySelector('.display-btn'); 

    if(type === 'interview'){
        displayBtn.className = "btn btn-outline btn-success display-btn";
        displayBtn.innerText = "Interview";
    } else if(type === 'rejected'){
        displayBtn.className = "btn btn-outline btn-error display-btn";
        displayBtn.innerText = "Rejected";
    }
}

