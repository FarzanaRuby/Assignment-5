
let count=0;
let price=550;
let grandTotal=0;


let seats=document.querySelectorAll(".seat");
for(let seat of seats){
  seat.addEventListener('click',function(){

    // set background color
    seat.classList.add('bg-[#1DD100]');
    seat.classList.add('text-white');
    // count seat calculation
   count=count+1
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




// ticket class
   const ticketClass= document.getElementById("ticket-class").innerText
   
// total cost calculation
  const totalCost= document.getElementById("total-cost").innerText;
  
  let covertedTotalCost = parseInt(totalCost);
  const totalPrice = covertedTotalCost +price;
  document.getElementById("total-cost").innerText=totalPrice;
  
  // grand total

  document.getElementById("grand-total").innerText
  const grandTotalPrice=grandTotal+totalPrice;
  document.getElementById("grand-total").innerText=grandTotalPrice



})

}
