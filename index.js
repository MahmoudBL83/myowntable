/* Loggin out process*/
document.querySelector('header').querySelector('div').addEventListener('click',()=>{
    location.replace('./index.html')
})

/* Creating inputs filed according to subjects number */
for(let i=1;i<localStorage.getItem('subs');i++){
    document.querySelector('#inputs').appendChild(document.querySelector('.sub1').cloneNode(true))
}

/* Creating radio inputs according to studying times number */
document.querySelectorAll('.days').forEach((x)=>{
    for(let i=0;i<x.querySelectorAll('div').length;i++){
        if(i==0){
            let u = x.querySelectorAll('div')[i].querySelectorAll('article');
            for(let n = 0;n<=localStorage.getItem('times');n++){
                u[n].classList.remove('hidden')
            }
        }
        else{
            let u = x.querySelectorAll('div')[i].querySelectorAll('input');
            for(let n = 0;n<localStorage.getItem('times');n++){
                u[n].classList.remove('hidden')
            }
        }
    }
})

/* Global variables */
let tableSec = document.querySelector('#tables');
let labels = document.querySelectorAll('label');
let days = document.querySelectorAll('.days');
let but = document.querySelector('button');
let arr = ['الفترة الأولي','الفترة الثانية','الفترة الثالثة','الفترة الرابعة','الفترة الخامسة','الفترة السادسة','الفترة السابعة','الفترة الثامنة','الفترة التاسعة','الفترة العاشرة','الفترة الحادية عشر','الفترة الثانية عشر']


/* The main function to build the tables */
but.addEventListener('click',myFunc)

/********************************************************************/
////////////////////////////////Setup/////////////////////////////////
/********************************************************************/
function myFunc(){
    let che = [];
    /* Loop over subject fields and storage its names */
    labels.forEach((x)=>{
        if(x.querySelector('input').value!='')
        che.push(x.querySelector('input').value);
    })
    /* the condition to start the process (use must enter the all names of the subjects)*/
    if(che.length==localStorage.getItem('subs')){
        /* Removing the old table to add a new one */
        while(document.querySelector('#tables').firstChild){
        document.querySelector('#tables').removeChild(document.querySelector('#tables').firstChild);
        }

        /* Global variables */
        let sat1=[],sat2=[],sat3=[],sat4=[],sat5=[],sat6=[],sat7=[],sat8=[],sat9=[],sat10=[],sat11=[],sat12=[],sun1=[],sun2=[],sun3=[],sun4=[],sun5=[],sun6=[],sun7=[],sun8=[],sun9=[],sun10=[],sun11=[],sun12=[],mon1=[],mon2=[],mon3=[],mon4=[],mon5=[],mon6=[],mon7=[],mon8=[],mon9=[],mon10=[],mon11=[],mon12=[],tues1=[],tues2=[],tues3=[],tues4=[],tues5=[],tues6=[],tues7=[],tues8=[],tues9=[],tues10=[],tues11=[],tues12=[],wedn1=[],wedn2=[],wedn3=[],wedn4=[],wedn5=[],wedn6=[],wedn7=[],wedn8=[],wedn9=[],wedn10=[],wedn11=[],wedn12=[],thurs1=[],thurs2=[],thurs3=[],thurs4=[],thurs5=[],thurs6=[],thurs7=[],thurs8=[],thurs9=[],thurs10=[],thurs11=[],thurs12=[];
        let allAvailableDays =[];
        let sat = [sat1,sat2,sat3,sat4,sat5,sat6,sat7,sat8,sat9,sat10,sat11,sat12];
        let sun = [sun1,sun2,sun3,sun4,sun5,sun6,sun7,sun8,sun9,sun10,sun11,sun12];
        let mon = [mon1,mon2,mon3,mon4,mon5,mon6,mon7,mon8,mon9,mon10,mon11,mon12];
        let tues = [tues1,tues2,tues3,tues4,tues5,tues6,tues7,tues8,tues9,tues10,tues11,tues12];
        let wedn = [wedn1,wedn2,wedn3,wedn4,wedn5,wedn6,wedn7,wedn8,wedn9,wedn10,wedn11,wedn12];
        let thurs = [thurs1,thurs2,thurs3,thurs4,thurs5,thurs6,thurs7,thurs8,thurs9,thurs10,thurs11,thurs12];
        
        /* Days for each subject */
        days.forEach((x)=>{
            let avilableDays = []
            x.querySelectorAll('input').forEach((y)=>{
                if(y.checked == true){
                    avilableDays.push(y.value);
                }
            })
            allAvailableDays.push(avilableDays);
        })
        /* Loop over each subject days*/
        allAvailableDays.forEach((y,i)=>{
            for(let j=0;j<y.length;j++){
                for(let k=0;k<localStorage.getItem('times');k++){
                    if(y[j] == `السبت ${arr[k]}`)
                    sat[k].push(labels[i].querySelector('input').value)
                    if(y[j] == `الأحد ${arr[k]}`)
                    sun[k].push(labels[i].querySelector('input').value)
                    if(y[j] == `الإثنين ${arr[k]}`)
                    mon[k].push(labels[i].querySelector('input').value)
                    if(y[j] == `الثلاثاء ${arr[k]}`)
                    tues[k].push(labels[i].querySelector('input').value)
                    if(y[j] == `الأربعاء ${arr[k]}`)
                    wedn[k].push(labels[i].querySelector('input').value)
                    if(y[j] == `الخميس ${arr[k]}`)
                    thurs[k].push(labels[i].querySelector('input').value)
                }
            }
        })

        /* Filling a new table */
        /* Create the table */
        let table = document.createElement('table');
        table.innerHTML = '<tr> <th>الموعد</th> <th>السبت</th> <th>الأحد</th> <th>الإثنين</th> <th>الثلاثاء</th> <th>الأربعاء</th> <th>الخميس</th></tr>';
        /* Adding rows to the table according to the times of study entered from the user */
        for(let i=0;i<parseInt(localStorage.getItem('times'));i++){
            let u =document.createElement('tr')
            u.innerHTML = `<td>${arr[i]}</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        /* Adding the tabel to the page to be shown */
        document.querySelector('#tables').appendChild(table);
        let gay = [];
        let v=[]

        /* Class to generate the random functions for each cell of the table */
        class Random{
            constructor(val,text){
                this.id = text;
                this.arr = val;
            }
            random = ()=>{
                let random = Math.floor(Math.random() * (this.arr.length))
                if(gay.includes(this.arr[random])==false){
                    if(document.querySelector(`#${this.id}`)!=null){
                        document.querySelector(`#${this.id}`).innerHTML = this.arr[random];
                        gay.push(this.arr[random])
                    }
                    return;
                }
            }
        }
        
        /* istatiating the "Random" class */
        for(let i=0;i<localStorage.getItem('times');i++){
            v.push((new Random(sat[i],`sat${i+1}`)).random)
        }
        
        for(let i=0;i<localStorage.getItem('times');i++){
            v.push((new Random(sun[i],`sun${i+1}`)).random)
        }
        
        for(let i=0;i<localStorage.getItem('times');i++){
            v.push((new Random(mon[i],`mon${i+1}`)).random)
        }
        
        for(let i=0;i<localStorage.getItem('times');i++){
            v.push((new Random(tues[i],`tues${i+1}`)).random)
        }
        
        for(let i=0;i<localStorage.getItem('times');i++){
            v.push((new Random(wedn[i],`wedn${i+1}`)).random)
        }
        
        for(let i=0;i<localStorage.getItem('times');i++){
            v.push((new Random(thurs[i],`thurs${i+1}`)).random)
        }

        /* Random the functions */
        shuffle(v);

        /* Calling the fucntions after the randoming process */
        for(let i=0;i<v.length;i++){
            v[i]();
        }

        /* pettier only */
        document.querySelectorAll('td').forEach((x)=>{
            if(x.innerHTML == 'undefined'){
                x.innerHTML ='-'
            }
        })
        let c = []
        document.querySelectorAll('td').forEach((x)=>{
            if(x.innerText != '-')
            c.push(x.innerText)
        })
        /* Checking if all the subjects are existed in the table */
        if(c.length==(parseInt(localStorage.getItem('subs'))+parseInt(localStorage.getItem('times')))){
            document.querySelector('#mark').scrollIntoView({behavior:'smooth'})
            return;
        }
        /* If any subject isn't existed in the table the program callback the same function*/
        else{
            myFunc();
        }
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
        
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
        
            return array;
        }
    }
    else{
        alert('من فضلك أدخل إسم المواد الخاصة بك');
    }
}
