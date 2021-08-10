        let displayPhone = document.getElementById('grand');
        let displayHome = document.getElementById('home');
        let displayCallLog = document.getElementById('callLog');
        let dialOne = document.getElementById('dial-one');
        let dialTwo = document.getElementById('dial-two');
        let displayNumber = document.getElementById('called-number');
        let panel = document.getElementById('panel');

        let on=(params)=>{
            if(params == 'on'){
                displayHome.hidden = false;
                displayHome.hidden = '';
            }
        }
        let callLogDisplay=(params)=>{
            if(params == 'call'){
                displayCallLog.hidden = false;
                displayCallLog.hidden = '';
            }
        }
        let dailNumber=(params)=>{
            if(params == 'number'){
                displayPhone.hidden = false;
            }
        }
        let backCallLog=(params)=>{
            if(params == 'call'){
                displayPhone.hidden = true
            }
        }
        let backCall=(params)=>{
            if(params == 'call'){
                displayCallLog.hidden = true;
            }
        }

        let number=(digits)=>{
            document.getElementById('panel').innerHTML += `${digits}`;
        }
        let simOneDial=(params)=>{
            if(params == 'one'){
                dialOne.hidden = false;
                displayNumber.innerHTML = document.getElementById('panel').value;
                dialOne.hidden = '';
                console.log(panel.value);
            }
        }
        let storeData=()=>{
            panel = document.getElementById('panel').value;
            localStorage.setItem('Dialled-number', JSON.stringify(panel))
            let a = localStorage.getItem('Dialled-number');
            console.log(JSON.parse(a));
        }

        let inputOne=()=>{
            displayNumber.innerText = panel.value;
        }

        let simTwoDial=(params)=>{
            if(params == "two"){
                dialTwo.hidden = false
                dialTwo.hidden = ''
                storeData()
            }
        }
        let endCallOne=(params)=>{
            if(params == 'one'){
                dialOne.hidden = true;
            }
        }
        let endCallTwo=(params)=>{
            if(params == 'two'){
                dialTwo.hidden = true;
            }
        }
      