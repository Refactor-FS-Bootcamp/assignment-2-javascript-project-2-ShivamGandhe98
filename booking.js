let name = document.querySelector('.name')
let dt = document.querySelector('.date')
let tm = document.querySelector('#tm')
let per = document.querySelector('#persons')
let btn = document.querySelector('#btn')

btn.addEventListener('click',function(){
    if(name.value==""||dt.value==""||tm.value==""||per.value==""){
        alert("Please Enter all the data")
    }else{
        let nmValue = name.value;
        let dtValue = dt.value;
        let tmValue = tm.value;
        let perValue = per.value;

        const Bookings = localStorage.getItem('Bookings')
        if(Bookings === null){
            bData = []
        }else{
            bData = JSON.parse(Bookings)
        }
        
        let bookObj = {
            Name:nmValue,
            Date:dtValue,
            Time:tmValue,
            NoOfPer:perValue,
        }
        bData.push(bookObj)

        localStorage.setItem('Bookings',JSON.stringify(bData))
        name.value="";
        dt.value="";
        tm.value="";
        per.value="";

    }
    
})
