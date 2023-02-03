

const getvalue = (event)=>{
    event.preventDefault();
    const value = document.getElementById('input').value;
    const currentcity= document.getElementById('showCity');
    currentcity.innerText=value;
    showTem(value)
    
}
const showTem=(valuee)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${valuee}&appid=ce8acae3b3b915c9b1523653419c2e4d&units=metric`

    fetch(url)
    .then(res=>res.json())
    .then(dat=>{
        showTempWeb(dat)
    })

}
const showTempWeb = ( dat)=>{
    const showTemp = document.getElementById('showTemp');
    
    
    const currenttemp= dat.main.temp;
    showTemp.innerText=currenttemp;
}

