function showOnly(id) {
    console.log('ShowOnly clicked')
    const allApplication = document.getElementById("allApplication");
    const interview = document.getElementById("interview")
    const rejected = document.getElementById("rejected")

    allApplication.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

    document.getElementById("allApplication-btn").classList.remove("btn-active");
    document.getElementById("interview-btn").classList.remove("btn-active");
    document.getElementById("rejected-btn").classList.remove("btn-active");


    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id + "-btn").classList.add("btn-active")
}

function selected(btn, type) {

    const jobCard = btn.closest('.job');
    const displayBtn = jobCard.querySelector('.display-btn');

    if (type === 'interview') {
        document.querySelector("#interview .no-job")?.classList.add("hidden");
        displayBtn.className = "btn btn-outline btn-success display-btn";
        displayBtn.innerText = "Interview";
        const updateJobCard = jobCard.cloneNode(true);
        const interviewContainer = document.getElementById("interview-container")
        const newInterview = document.createElement("div");
        newInterview.appendChild(updateJobCard);
        interviewContainer.append(newInterview)
        const countEl = document.getElementById("interview-count");
        countEl.innerText = Number(countEl.innerText) + 1;
    } else if (type === 'rejected') {
        document.querySelector("#rejected .no-job")?.classList.add("hidden");
        displayBtn.className = "btn btn-outline btn-error display-btn";
        displayBtn.innerText = "Rejected";
        const updateJobCard = jobCard.cloneNode(true);
        const rejectedContainer = document.getElementById("reject-container")
        const newRejected = document.createElement("div");
        newRejected.appendChild(updateJobCard);
        rejectedContainer.append(newRejected)
        const countEl = document.getElementById("rejected-count");
        countEl.innerText = Number(countEl.innerText) + 1;
    }



}

