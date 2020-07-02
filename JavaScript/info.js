document.getElementById("btn").addEventListener("click", function(){
    let sex='';
    if(document.getElementById('male').checked)
        sex=document.getElementById('male').value;
    else if(document.getElementById('female').checked)
        sex=document.getElementById('female').value;
    let personalInfo={
        JopTitle: document.getElementById('job').value,
        DOB: document.getElementById('date').value,
        Sex: sex,
    }
    if(personalInfo.JopTitle==="" || personalInfo.DOF===""||personalInfo.Sex==="")
        alert("Nothing could be empty!!!");
})
