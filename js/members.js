/* =====================================
   MEMBERS MANAGEMENT SYSTEM
   YAKUBU Campaign Version 5.0
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeDashboard();

});

/* =====================================
   INITIALIZE
===================================== */

function initializeDashboard(){

    loadStatistics();

    loadMembers();

    initializeSearch();

    initializeFilters();

    initializeButtons();

}

const members = [

    {

        id:"YAKUBU000001",

        fullname:"Umar Muhammad",

        gender:"Male",

        phone:"08031234567",

        lga:"Misau",

        ward:"Hardawa",

        pollingUnit:"PU-001",

        status:"Active"

    },

    {

        id:"YAKUBU000002",

        fullname:"Aisha Bello",

        gender:"Female",

        phone:"08045556666",

        lga:"Bauchi",

        ward:"Makama",

        pollingUnit:"PU-014",

        status:"Pending"

    },

    {

        id:"YAKUBU000003",

        fullname:"Sani Yusuf",

        gender:"Male",

        phone:"08123334444",

        lga:"Ningi",

        ward:"Ningi East",

        pollingUnit:"PU-110",

        status:"Active"

    }

];

/* =====================================
   LOAD STATISTICS
===================================== */
function loadStatistics(){

    document.getElementById("totalMembers").textContent = members.length;

    document.getElementById("activeMembers").textContent =

        members.filter(member => member.status==="Active").length;

    document.getElementById("pendingMembers").textContent =

        members.filter(member => member.status==="Pending").length;

    document.getElementById("newToday").textContent = 12;

}

/* =====================================
   LOAD MEMBERS TABLE
===================================== */
function loadMembers(){

    const table = document.getElementById("membersTableBody");

    table.innerHTML = "";

    members.forEach((member,index)=>{

        table.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>

                <img src="images/avatar.png"

                     class="member-photo">

            </td>

            <td>${member.id}</td>

            <td>${member.fullname}</td>

            <td>${member.gender}</td>

            <td>${member.phone}</td>

            <td>${member.lga}</td>

            <td>${member.ward}</td>

            <td>${member.pollingUnit}</td>

            <td>${new Date().toLocaleDateString()}</td>

            <td>

                <span class="badge ${member.status.toLowerCase()}">

                    ${member.status}

                </span>

            </td>

            <td>

                <div class="action-buttons">

                    <button class="view-btn"

                    onclick="viewMember('${member.id}')">

                    <i class="fas fa-eye"></i>

                    </button>

                    <button class="edit-btn"

                    onclick="editMember('${member.id}')">

                    <i class="fas fa-pen"></i>

                    </button>

                    <button class="delete-btn"

                    onclick="deleteMember('${member.id}')">

                    <i class="fas fa-trash"></i>

                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}

/* =====================================
   SEARCH
===================================== */
function initializeSearch(){

   const search = document.getElementById("searchMember");

if(!search) return;

search.addEventListener("keyup",()=>{

        const value=search.value.toLowerCase();

        const rows=document.querySelectorAll("#membersTableBody tr");

        rows.forEach(row=>{

            row.style.display=

            row.innerText.toLowerCase().includes(value)

            ?"":"none";

        });

    });

}

/* =====================================
   FILTERS
===================================== */
function initializeFilters(){

    console.log("Filters Ready");

}

/* =====================================
   BUTTONS
===================================== */
function initializeButtons(){

    document.getElementById("refreshBtn")

    .addEventListener("click",()=>{

        loadMembers();

        loadStatistics();

        alert("Data Refreshed Successfully");

    });

}

/* =====================================
   VIEW MEMBER
===================================== */

function viewMember(memberId){

    const member = members.find(item => item.id === memberId);

    if(!member){

        alert("Member not found.");

        return;

    }

    alert(

`Member Details

ID: ${member.id}

Name: ${member.fullname}

Gender: ${member.gender}

Phone: ${member.phone}

LGA: ${member.lga}

Ward: ${member.ward}

Polling Unit: ${member.pollingUnit}

Status: ${member.status}`

    );

}

/* =====================================
   EDIT MEMBER
===================================== */

function editMember(memberId){

    const member = members.find(item => item.id === memberId);

    if(!member){

        alert("Member not found.");

        return;

    }

    alert("Edit Member: " + member.fullname);

}

/* =====================================
   DELETE MEMBER
===================================== */

function deleteMember(memberId){

    const confirmDelete = confirm(

        "Are you sure you want to delete this member?"

    );

    if(!confirmDelete){

        return;

    }

    const index = members.findIndex(

        item => item.id === memberId

    );

    if(index !== -1){

        members.splice(index,1);

    }

    loadMembers();

    loadStatistics();

    alert("Member deleted successfully.");

}

/* =====================================
   PRINT MEMBER ID CARD
===================================== */

function printMemberID(memberId){

    alert("Printing Membership ID for " + memberId);

}

/* =====================================
   DOWNLOAD MEMBER ID CARD
===================================== */

function downloadMemberID(memberId){

    alert("Downloading Membership ID for " + memberId);

}
