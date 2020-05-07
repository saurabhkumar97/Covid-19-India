const messageOne = document.querySelector('#message-1')
const s1 = document.querySelector('#s1')
const a1 = document.querySelector('#a1')
const r1 = document.querySelector('#r1')
const d1 = document.querySelector('#d1')

fetch('/raw-data').then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            s1.textContent = data.body.statewise[0].confirmed;
            a1.textContent = data.body.statewise[0].active;
            r1.textContent = data.body.statewise[0].recovered;
            d1.textContent = data.body.statewise[0].deaths;
            for(i=1;i<40;i++){

                var table = document.getElementById("covidTable");
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = data.body.statewise[i].state;
                cell2.innerHTML = data.body.statewise[i].confirmed;
                cell3.innerHTML = data.body.statewise[i].active;
                cell4.innerHTML = data.body.statewise[i].recovered;
                cell5.innerHTML = data.body.statewise[i].deaths;

            }
        }
    })
})