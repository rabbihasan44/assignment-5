document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const inputAddMoney = parseFloat(addMoney);

    console.log('addMoney')

    
        const balance = document.getElementById('balance-number').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - inputAddMoney;

        document.getElementById('balance-number').innerText = newBalance;

        const addBalance = document.getElementById('add-my-balance').innerText;
        const addMyBalance = parseFloat(addBalance);

        const donationBalance = addMyBalance + inputAddMoney;

        document.getElementById('add-my-balance').innerText = donationBalance;
        console.log('donationBalance')

        if(addMyBalance ){
            modalOption.removAttribute("hidden")


        }



})

// div 2 ----------------------->
document.getElementById('donetion-ar-taka')
.addEventListener('click', function(event){
    event.preventDefault();

    const donetionAr = document.getElementById('donetion-ar-taka').value;
    const donetionArTaka = parseFloat(donetionAr);

    console.log('donetionAr')

    
        const balance = document.getElementById('balance-number').innerText;
        const balanceNumber = parseFloat(balance);

        const notonBalance = balanceNumber - donetionArTaka;

        document.getElementById('balance-number').innerText = notonBalance;

        const amarTaka = document.getElementById('amar-teka-el').innerText;
        const amarTakaEl = parseFloat(amarTaka);

        const donationMoney = amarTakaEl + inputAddEl;

        document.getElementById('amar-taka-el').innerText = donationMoney;
        console.log('donationMoney')

        if(amarTakaEl ){
            modalOption.removAttribute("hidden")


        }



})







// document.getElementById('btn-add-money')
// .addEventListener('click', function(event){
//     event.preventDefault();

//     const addMoney = document.getElementById('input-add-money').value;
//     const inputAddMoney = parseFloat(addMoney);

//     console.log('addMoney')

    
//         const balance = document.getElementById('balance-number').innerText;
//         const balanceNumber = parseFloat(balance);

//         const newBalance = balanceNumber - inputAddMoney;

//         document.getElementById('balance-number').innerText = newBalance;

//         const addBalance = document.getElementById('add-my-balance').innerText;
//         const addMyBalance = parseFloat(addBalance);

//         const donationBalance = addMyBalance + inputAddMoney;

//         document.getElementById('add-my-balance').innerText = donationBalance;
//         console.log('donationBalance')

//         document.getElementById()




// })













