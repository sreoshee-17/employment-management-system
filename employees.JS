document.getElementById('button').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display='flex';
});
document.getElementById('employee-edit').addEventListener('click',
function(){
    document.querySelector('.bg-modal-1').style.display='flex';
});

document.querySelector('.close').addEventListener('click',
function()
{
      document.querySelector('.bg-modal').style.display='none'
});
document.querySelector('.close-1').addEventListener('click',
   function()
   {
      document.querySelector('.bg-modal-1').style.display='none'
   });
document.getElementById('employee-details').addEventListener('click',
function(){
       document.querySelector('.bg-modal-2').style.display='flex';
});
document.querySelector('.close-2').addEventListener('click',
   function()
   {
      document.querySelector('.bg-modal-2').style.display='none'
   });
document.getElementById('employees-delete').addEventListener('click',
function(){
          document.querySelector('.bg-modal-3').style.display='flex';
   });
document.getElementById('log-out').addEventListener('click',
function(){
             document.querySelector('.popup-box').style.display='flex';
});


   