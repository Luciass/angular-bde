let divAddMember = document.getElementById('divAddMember');
let btnAddMember = document.getElementById('addMember');

divAddMember.hidden = true;

btnAddMember.addEventListener('click', affDivMember, false);

function affDivMember() {
  if(divAddMember.hidden === true) {
    divAddMember.hidden = false;
    btnAddMember.innerText = "Cancel";
  } else {
    divAddMember.hidden = true;
    btnAddMember.innerText = "Add member";
  }
}
