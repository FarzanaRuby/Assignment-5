
let count=0;
let price=550;
let grandTotal=0;
let total=0;


let seats=document.querySelectorAll(".seat");
for(let seat of seats){
  seat.addEventListener('click',function(){

    // set background color
    seat.classList.add('bg-[#1DD100]');
    seat.classList.add('text-white');
    // count seat calculation
   count=count+1;
   if(count>4){
    alert('You can not buy seat more then 4');
    return;
   }
    document.getElementById("selected-seat").innerText=count;
   
    // left seat calculation
    const LeftSeatContainer=document.getElementById("leftSeat").innerText;
    const leftSeatOverall=parseInt(LeftSeatContainer);
    document.getElementById("leftSeat").innerText=leftSeatOverall-1;

     
// ticket price
 let ticketPrice= document.getElementById("ticket-price").innerText;
 let convertedTicketPrice = parseInt(ticketPrice);

    // append elemnet
    let seatName = event.target.innerText;
   
    const table= document.getElementById("t-Body");
   
    const tr=document.createElement('tr');
    const td1= document.createElement('td');
    td1.innerText=seatName;
    const td2= document.createElement('td');
    td2.innerText='econome';
    const td3= document.createElement('td');
    td3.innerText=convertedTicketPrice;
 
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);




 let totalTaka= document.getElementById("total-cost");
      total =total+price;
      totalTaka.innerText=total;

  
  // grand total

   let grandTotalContainer = document.getElementById("grand-total")
  grandTotal=total;
  grandTotalContainer.innerText=grandTotal;



})

}

// cupon part
  const btn= document.getElementById("apply-btn");
   btn.addEventListener('click',function(){
   const inputField= document.getElementById("input-value");
   let selected=document.getElementById("selected");
   
   let grandTotalContainer = document.getElementById("grand-total");

    if(inputField.value=="NEW15" ){
      let totalTaka= document.getElementById("total-cost").innerText;
      let discount = totalTaka*0.15;
      grandTotal=totalTaka-discount;
      grandTotalContainer.innerText=grandTotal;
    
      selected.classList.add('hidden');
    }
     else if(inputField.value=="Couple 20" ){
      let totalTaka= document.getElementById("total-cost").innerText;
      let discount = totalTaka*0.2;
      grandTotal=totalTaka-discount;
      grandTotalContainer.innerText=grandTotal;
    
     selected.classList.add('hidden');
      
    }

   });

   const lastBtn= document.getElementById("last-btn");
   lastBtn.addEventListener('click',function(){
    window.location.reload()
   })

  
