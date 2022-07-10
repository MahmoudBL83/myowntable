/* Creating inputs filed according to subjects jumber */
for(let i=1;i<localStorage.getItem('subs');i++){
    document.querySelector('#inputs').appendChild(document.querySelector('.sub1').cloneNode(true))
}

document.querySelectorAll('.days').forEach((x)=>{
    for(let i=0;i<x.querySelectorAll('div').length;i++){
        if(i==0){
            let u = x.querySelectorAll('div')[i].querySelectorAll('article');
            for(let n = 0;n<=localStorage.getItem('times');n++){
                u[n].classList.remove('hidden')
            }
        }else{
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

document.querySelector('header').querySelector('div').addEventListener('click',()=>{
    location.replace('./reg.html')
})

/* The main function to build the tables */
but.addEventListener('click',myFunc)

/********************************************************************/
////////////////////////////////Setup/////////////////////////////////
/********************************************************************/
function myFunc(){
    let che = [];
    labels.forEach((x)=>{
        if(x.querySelector('input').value!='')
        che.push(x.querySelector('input').value)
    })
    if(che.length==localStorage.getItem('subs')){
    while(document.querySelector('#tables').firstChild){
        document.querySelector('#tables').removeChild(document.querySelector('#tables').firstChild);
    }

    /* Global variables */
    let sub1availableDays = [];
    let sub2availableDays = [];
    let sub3availableDays = [];
    let sub4availableDays = [];
    let sub5availableDays = [];
    let sub6availableDays = [];
    let sub7availableDays = [];
    let sub8availableDays = [];
    let sub9availableDays = [];
    let sub10availableDays = [];
    let sub11availableDays = [];
    let sub12availableDays = [];
    let sub13availableDays = [];
    let sub14availableDays = [];
    let sub15availableDays = [];
    let sub16availableDays = [];
    let sub17availableDays = [];
    let sub18availableDays = [];
    let sub19availableDays = [];
    let sub20availableDays = [];
    let sat1 =[]
    let sat2 = []
    let sat3 = []
    let sat4 = []
    let sat5 = []
    let sat6 = []
    let sat7 = []
    let sat8 = []
    let sat9 = []
    let sat10 = []
    let sun1 =[]
    let sun2 = []
    let sun3 = []
    let sun4 = []
    let sun5 = []
    let sun6 = []
    let sun7 = []
    let sun8 = []
    let sun9 = []
    let sun10 = []
    let mon1 =[]
    let mon2 = []
    let mon3 = []
    let mon4 = []
    let mon5 = []
    let mon6 = []
    let mon7 = []
    let mon8 = []
    let mon9 = []
    let mon10 = []
    let tues1 =[]
    let tues2 = []
    let tues3 = []
    let tues4 = []
    let tues5 = []
    let tues6 = []
    let tues7 = []
    let tues8 = []
    let tues9 = []
    let tues10 = []
    let wedn1 =[]
    let wedn2 = []
    let wedn3 = []
    let wedn4 = []
    let wedn5 = []
    let wedn6 = []
    let wedn7 = []
    let wedn8 = []
    let wedn9 = []
    let wedn10 = []
    let thurs1 =[]
    let thurs2 = []
    let thurs3 = []
    let thurs4 = []
    let thurs5 = []
    let thurs6 = []
    let thurs7 = []
    let thurs8 = []
    let thurs9 = []
    let thurs10 = []
    /* Days for each subject */
    days.forEach((x,i)=>{
        x.querySelectorAll('input').forEach((y)=>{
            if(y.checked == true){
                if(i==0)
                sub1availableDays.push(y.value);
                if(i==1)
                sub2availableDays.push(y.value);
                if(i==2)
                sub3availableDays.push(y.value);
                if(i==3)
                sub4availableDays.push(y.value);
                if(i==4)
                sub5availableDays.push(y.value);
                if(i==5)
                sub6availableDays.push(y.value);
                if(i==6)
                sub7availableDays.push(y.value);
                if(i==7)
                sub8availableDays.push(y.value);
                if(i==8)
                sub9availableDays.push(y.value);
                if(i==9)
                sub10availableDays.push(y.value);
                if(i==10)
                sub11availableDays.push(y.value);
            }
        })
    })
    let j = [sub1availableDays,sub2availableDays,sub3availableDays,sub4availableDays,sub5availableDays,sub6availableDays,sub7availableDays,sub8availableDays,sub9availableDays,sub10availableDays,sub11availableDays,sub12availableDays,sub13availableDays,sub14availableDays,sub15availableDays,sub16availableDays,sub17availableDays,sub18availableDays,sub19availableDays,sub20availableDays];
    j.forEach((y,i)=>{
        y.forEach((x)=>{
            if(x == 'السبت الفترة الأولي')
            sat1.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة الثانية')
            sat2.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة الثالثة')
            sat3.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة الرابعة')
            sat4.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة الخامسة')
            sat5.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة السادسة')
            sat6.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة السابعة')
            sat7.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة الثامنة')
            sat8.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة التاسعة')
            sat9.push(labels[i].querySelector('input').value)
            if(x == 'السبت الفترة العاشرة')
            sat10.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة الأولي')
            sun1.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة الثانية')
            sun2.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة الثالثة')
            sun3.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة الرابعة')
            sun4.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة الخامسة')
            sun5.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة السادسة')
            sun6.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة السابعة')
            sun7.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة الثامنة')
            sun8.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة التاسعة')
            sun9.push(labels[i].querySelector('input').value)
            if(x == 'الأحد الفترة العاشرة')
            sun10.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة الأولي')
            mon1.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة الثانية')
            mon2.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة الثالثة')
            mon3.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة الرابعة')
            mon4.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة الخامسة')
            mon5.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة السادسة')
            mon6.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة السابعة')
            mon7.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة الثامنة')
            mon8.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة التاسعة')
            mon9.push(labels[i].querySelector('input').value)
            if(x == 'الإثنين الفترة العاشرة')
            mon10.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة الأولي')
            tues1.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة الثانية')
            tues2.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة الثالثة')
            tues3.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة الرابعة')
            tues4.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة الخامسة')
            tues5.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة السادسة')
            tues6.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة السابعة')
            tues7.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة الثامنة')
            tues8.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة التاسعة')
            tues9.push(labels[i].querySelector('input').value)
            if(x == 'الثلاثاء الفترة العاشرة')
            tues10.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة الأولي')
            wedn1.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة الثانية')
            wedn2.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة الثالثة')
            wedn3.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة الرابعة')
            wedn4.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة الخامسة')
            wedn5.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة السادسة')
            wedn6.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة السابعة')
            wedn7.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة الثامنة')
            wedn8.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة التاسعة')
            wedn9.push(labels[i].querySelector('input').value)
            if(x == 'الأربعاء الفترة العاشرة')
            wedn10.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة الأولي')
            thurs1.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة الثانية')
            thurs2.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة الثالثة')
            thurs3.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة الرابعة')
            thurs4.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة الخامسة')
            thurs5.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة السادسة')
            thurs6.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة السابعة')
            thurs7.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة الثامنة')
            thurs8.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة التاسعة')
            thurs9.push(labels[i].querySelector('input').value)
            if(x == 'الخميس الفترة العاشرة')
            thurs10.push(labels[i].querySelector('input').value)
        })
    })


    /* Filling the table */
    let table = document.createElement('table');
    table.innerHTML = '<tr> <th>الموعد</th> <th>السبت</th> <th>الأحد</th> <th>الإثنين</th> <th>الثلاثاء</th> <th>الأربعاء</th> <th>الخميس</th></tr>';
    for(let i=0;i<parseInt(localStorage.getItem('times'));i++){
        if(i==0){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة الأولى</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==1){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة الثانية</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==2){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة الثالثة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==3){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة الرابعة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==4){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة الخامسة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==5){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة السادسة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==6){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة السابعة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==7){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة الثامنة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==8){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة التاسعة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
        if(i==9){
            let u =document.createElement('tr')
            u.innerHTML = `<td>الفترة العاشرة</td><td id="sat${i+1}">-</td> <td id="sun${i+1}">-</td> <td id="mon${i+1}">-</td> <td id="tues${i+1}">-</td> <td id="wedn${i+1}">-</td> <td id="thurs${i+1}">-</td>`
            table.appendChild(u)
        }
    }
    /*table.querySelectorAll('tr').forEach((e,i)=>{
        if(i==1){
            table.querySelectorAll('tr')[i].innerHTML=``
        }
        if(i==2){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة الثانية</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==3){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة الثالثة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==4){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة الرابعة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==5){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة الخامسة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==6){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة السادسة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==7){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة السابعة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==8){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة الثامنة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==9){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة التاسعة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
        if(i==10){
            table.querySelectorAll('tr')[i].innerHTML=`<td>الفترة العاشرة</td><td id="sat${i}">-</td> <td id="sun${i}">-</td> <td id="mon${i}">-</td> <td id="tues${i}">-</td> <td id="wedn${i}">-</td> <td id="thurs${i}">-</td> `
        }
    })*/
    document.querySelector('#tables').appendChild(table)
    let sat1p = sat1.length
    let sat2p = sat2.length
    let sat3p = sat3.length
    let sat4p = sat4.length
    let sat5p = sat5.length
    let sat6p = sat6.length
    let sat7p = sat7.length
    let sat8p = sat8.length
    let sat9p = sat9.length
    let sat10p = sat10.length
    let sun1p = sun1.length
    let sun2p = sun2.length
    let sun3p = sun3.length
    let sun4p = sun4.length
    let sun5p = sun5.length
    let sun6p = sun6.length
    let sun7p = sun7.length
    let sun8p = sun8.length
    let sun9p = sun9.length
    let sun10p = sun10.length
    let mon1p = mon1.length
    let mon2p = mon2.length
    let mon3p = mon3.length
    let mon4p = mon4.length
    let mon5p = mon5.length
    let mon6p = mon6.length
    let mon7p = mon7.length
    let mon8p = mon8.length
    let mon9p = mon9.length
    let mon10p = mon10.length
    let tues1p = tues1.length
    let tues2p = tues2.length
    let tues3p = tues3.length
    let tues4p = tues4.length
    let tues5p = tues5.length
    let tues6p = tues6.length
    let tues7p = tues7.length
    let tues8p = tues8.length
    let tues9p = tues9.length
    let tues10p = tues10.length
    let wedn1p = wedn1.length
    let wedn2p = wedn2.length
    let wedn3p = wedn3.length
    let wedn4p = wedn4.length
    let wedn5p = wedn5.length
    let wedn6p = wedn6.length
    let wedn7p = wedn7.length
    let wedn8p = wedn8.length
    let wedn9p = wedn9.length
    let wedn10p = wedn10.length
    let thurs1p = thurs1.length
    let thurs2p = thurs2.length
    let thurs3p = thurs3.length
    let thurs4p = thurs4.length
    let thurs5p = thurs5.length
    let thurs6p = thurs6.length
    let thurs7p = thurs7.length
    let thurs8p = thurs8.length
    let thurs9p = thurs9.length
    let thurs10p = thurs10.length
    let gay = []
    /*random1(sat1p,'#sat1',sat1)
    random1(sat2p,'#sat2',sat2)
    random1(sat3p,'#sat3',sat3)
    random1(sat4p,'#sat4',sat4)
    random1(sun1p,'#sun1',sun1)
    random1(sun2p,'#sun2',sun2)
    random1(sun3p,'#sun3',sun3)
    random1(sun4p,'#sun4',sun4)
    random1(mon1p,'#mon1',mon1)
    random1(mon2p,'#mon2',mon2)
    random1(mon3p,'#mon3',mon3)
    random1(mon4p,'#mon4',mon4)
    random1(tues1p,'#tues1',tues1)
    random1(tues2p,'#tues2',tues2)
    random1(tues3p,'#tues3',tues3)
    random1(tues4p,'#tues4',tues4)
    random1(wedn1p,'#wedn1',wedn1)
    random1(wedn2p,'#wedn2',wedn2)
    random1(wedn3p,'#wedn3',wedn3)
    random1(wedn4p,'#wedn4',wedn4)
    random1(thurs1p,'#thurs1',thurs1)
    random1(thurs2p,'#thurs2',thurs2)
    random1(thurs3p,'#thurs3',thurs3)
    random1(thurs4p,'#thurs4',thurs4)*/
    let v = [random1,random2,random3,random4,random5,random6,random7,random8,random9,random10,random11,random12,random13,random14,random15,random16,random17,random18,random19,random20,random21,random22,random23,random24,random25,random26,random27,random28,random29,random30,random31,random32,random33,random34,random35,random36,random37,random38,random39,random40,random41,random42,random43,random44,random45,random46,random47,random48,random49,random50,random51,random52,random53,random54,random55,random56,random57,random58,random59,random60]
    shuffle(v);
    for(let i=0;i<v.length;i++){
        v[i]();
    }
    function random1(){
        let random = Math.floor(Math.random() * (sat1p))
        if(gay.includes(sat1[random])==false){
            if(document.querySelector('#sat1')!=null){
                document.querySelector('#sat1').innerHTML = sat1[random];
                gay.push(sat1[random])
            }
            return;
        }
    }
    function random2(){
        let random = Math.floor(Math.random() * (sat2p))
        if(gay.includes(sat2[random])==false){
            if(document.querySelector('#sat2')!=null){
                document.querySelector('#sat2').innerHTML = sat2[random];
                gay.push(sat2[random])
            }
            return;
        }
    }
    function random3(){
        let random = Math.floor(Math.random() * (sat3p))
        if(gay.includes(sat3[random])==false){
            if(document.querySelector('#sat3')!=null){
                document.querySelector('#sat3').innerHTML = sat3[random];
                gay.push(sat3[random])
            }
            return;
        }
    }
    function random4(){
        let random = Math.floor(Math.random() * (sat4p))
        if(gay.includes(sat4[random])==false){
            if(document.querySelector('#sat4')!=null){
                document.querySelector('#sat4').innerHTML = sat4[random];
                gay.push(sat4[random])
            }
            return;
        }
    }
    function random5(){
        let random = Math.floor(Math.random() * (sat5p))
        if(gay.includes(sat5[random])==false){
            if(document.querySelector('#sat5')!=null){
                document.querySelector('#sat5').innerHTML = sat5[random];
                gay.push(sat5[random])
            }
            return;
        }
    }
    function random6(){
        let random = Math.floor(Math.random() * (sat6p))
        if(gay.includes(sat6[random])==false){
            if(document.querySelector('#sat6')!=null){
                document.querySelector('#sat6').innerHTML = sat6[random];
                gay.push(sat6[random])
            }
            return;
        }
    }
    function random7(){
        let random = Math.floor(Math.random() * (sat7p))
        if(gay.includes(sat7[random])==false){
            if(document.querySelector('#sat7')!=null){
                document.querySelector('#sat7').innerHTML = sat7[random];
                gay.push(sat7[random])
            }
            return;
        }
    }
    function random8(){
        let random = Math.floor(Math.random() * (sat8p))
        if(gay.includes(sat8[random])==false){
            if(document.querySelector('#sat8')!=null){
                document.querySelector('#sat8').innerHTML = sat8[random];
                gay.push(sat8[random])
            }
            return;
        }
    }
    function random9(){
        let random = Math.floor(Math.random() * (sat9p))
        if(gay.includes(sat9[random])==false){
            if(document.querySelector('#sat9')!=null){
                document.querySelector('#sat9').innerHTML = sat9[random];
                gay.push(sat9[random])
            }
            return;
        }
    }
    function random10(){
        let random = Math.floor(Math.random() * (sat10p))
        if(gay.includes(sat10[random])==false){
            if(document.querySelector('#sat10')!=null){
                document.querySelector('#sat10').innerHTML = sat10[random];
                gay.push(sat10[random])
            }
            return;
        }
    }
    function random11(){
        let random = Math.floor(Math.random() * (sun1p))
        if(gay.includes(sun1[random])==false){
            if(document.querySelector('#sun1')!=null){
                document.querySelector('#sun1').innerHTML = sun1[random];
                gay.push(sun1[random])
            }
            return;
        }
    }
    function random12(){
        let random = Math.floor(Math.random() * (sun2p))
        if(gay.includes(sun2[random])==false){
            if(document.querySelector('#sun2')!=null){
                document.querySelector('#sun2').innerHTML = sun2[random];
                gay.push(sun2[random])
            }
            return;
        }
    }
    function random13(){
        let random = Math.floor(Math.random() * (sun3p))
        if(gay.includes(sun3[random])==false){
            if(document.querySelector('#sun3')!=null){
                document.querySelector('#sun3').innerHTML = sun3[random];
                gay.push(sun3[random])
            }
            return;
        }
    }
    function random14(){
        let random = Math.floor(Math.random() * (sun4p))
        if(gay.includes(sun4[random])==false){
            if(document.querySelector('#sun4')!=null){
                document.querySelector('#sun4').innerHTML = sun4[random];
                gay.push(sun4[random])
            }
            return;
        }
    }
    function random15(){
        let random = Math.floor(Math.random() * (sun5p))
        if(gay.includes(sun5[random])==false){
            if(document.querySelector('#sun5')!=null){
                document.querySelector('#sun5').innerHTML = sun5[random];
                gay.push(sun5[random])
            }
            return;
        }
    }
    function random16(){
        let random = Math.floor(Math.random() * (sun6p))
        if(gay.includes(sun6[random])==false){
            if(document.querySelector('#sun6')!=null){
            document.querySelector('#sun6').innerHTML = sun6[random];
            gay.push(sun6[random])
            }
            return;
        }
    }
    function random17(){
        let random = Math.floor(Math.random() * (sun7p))
        if(gay.includes(sun7[random])==false){
            if(document.querySelector('#sun7')!=null){
            document.querySelector('#sun7').innerHTML = sun7[random];
            gay.push(sun7[random])
            }
            return;
        }
    }
    function random18(){
        let random = Math.floor(Math.random() * (sun8p))
        if(gay.includes(sun8[random])==false){
            if(document.querySelector('#sun8')!=null){
            document.querySelector('#sun8').innerHTML = sun8[random];
            gay.push(sun8[random])
            }
            return;
        }
    }
    function random19(){
        let random = Math.floor(Math.random() * (sun9p))
        if(gay.includes(sun9[random])==false){
            if(document.querySelector('#sun9')!=null){
            document.querySelector('#sun9').innerHTML = sun9[random];
            gay.push(sun9[random])
            }
            return;
        }
    }
    function random20(){
        let random = Math.floor(Math.random() * (sun10p))
        if(gay.includes(sun10[random])==false){
            if(document.querySelector('#sun10')!=null){
            document.querySelector('#sun10').innerHTML = sun10[random];
            gay.push(sun10[random])
            }
            return;
        }
    }
    function random21(){
        let random = Math.floor(Math.random() * (mon1p))
        if(gay.includes(mon1[random])==false){
            if(document.querySelector('#mon1')!=null){
            document.querySelector('#mon1').innerHTML = mon1[random];
            gay.push(mon1[random])
            }
            return;
        }
    }
    function random22(){
        let random = Math.floor(Math.random() * (mon2p))
        if(gay.includes(mon2[random])==false){
            if(document.querySelector('#mon2')!=null){
                document.querySelector('#mon2').innerHTML = mon2[random];
                gay.push(mon2[random])
            }   
            return;
        }
    }
    function random23(){
        let random = Math.floor(Math.random() * (mon3p))
        if(gay.includes(mon3[random])==false){
            if(document.querySelector('#mon3')!=null){
                document.querySelector('#mon3').innerHTML = mon3[random];
                gay.push(mon3[random])
            }
            return;
        }
    }
    function random24(){
        let random = Math.floor(Math.random() * (mon4p))
        if(gay.includes(mon4[random])==false){
            if(document.querySelector('#mon4')!=null){
                document.querySelector('#mon4').innerHTML = mon4[random];
                gay.push(mon4[random])
            }
            return;
        }
    }
    function random25(){
        let random = Math.floor(Math.random() * (mon5p))
        if(gay.includes(mon5[random])==false){
            if(document.querySelector('#mon5')!=null){
                document.querySelector('#mon5').innerHTML = mon5[random];
                gay.push(mon5[random])
            }
            return;
        }
    }
    function random26(){
        let random = Math.floor(Math.random() * (mon6p))
        if(gay.includes(mon6[random])==false){
            if(document.querySelector('#mon6')!=null){
                document.querySelector('#mon6').innerHTML = mon6[random];
                gay.push(mon6[random])
            }
            return;
        }
    }
    function random27(){
        let random = Math.floor(Math.random() * (mon7p))
        if(gay.includes(mon7[random])==false){
            if(document.querySelector('#mon7')!=null){
                document.querySelector('#mon7').innerHTML = mon7[random];
                gay.push(mon7[random])
            }
            return;
        }
    }
    function random28(){
        let random = Math.floor(Math.random() * (mon8p))
        if(gay.includes(mon8[random])==false){
            if(document.querySelector('#mon8')!=null){
                document.querySelector('#mon8').innerHTML = mon8[random];
                gay.push(mon8[random])
            }
            return;
        }
    }
    function random29(){
        let random = Math.floor(Math.random() * (mon9p))
        if(gay.includes(mon9[random])==false){
            if(document.querySelector('#mon9')!=null){
                document.querySelector('#mon9').innerHTML = mon9[random];
                gay.push(mon9[random])
            }
            return;
        }
    }
    function random30(){
        let random = Math.floor(Math.random() * (mon10p))
        if(gay.includes(mon10[random])==false){
            if(document.querySelector('#mon10')!=null){
                document.querySelector('#mon10').innerHTML = mon10[random];
                gay.push(mon10[random])
            }
            return;
        }
    }
    function random31(){
        let random = Math.floor(Math.random() * (tues1p))
        if(gay.includes(tues1[random])==false){
            if(document.querySelector('#tues1')!=null){
                document.querySelector('#tues1').innerHTML = tues1[random];
                gay.push(tues1[random])
            }
            return;
        }
    }
    function random32(){
        let random = Math.floor(Math.random() * (tues2p))
        if(gay.includes(tues2[random])==false){
            if(document.querySelector('#tues2')!=null){
                document.querySelector('#tues2').innerHTML = tues2[random];
                gay.push(tues2[random])
            }
            return;
        }
    }
    function random33(){
        let random = Math.floor(Math.random() * (tues3p))
        if(gay.includes(tues3[random])==false){
            if(document.querySelector('#tues3')!=null){
                document.querySelector('#tues3').innerHTML = tues3[random];
                gay.push(tues3[random])
            }
            return;
        }
    }
    function random34(){
        let random = Math.floor(Math.random() * (tues4p))
        if(gay.includes(tues4[random])==false){
            if(document.querySelector('#tues4')!=null){
            document.querySelector('#tues4').innerHTML = tues4[random];
            gay.push(tues4[random])
            }
            return;
        }
    }
    function random35(){
        let random = Math.floor(Math.random() * (tues5p))
        if(gay.includes(tues5[random])==false){
            if(document.querySelector('#tues5')!=null){
                document.querySelector('#tues5').innerHTML = tues5[random];
                gay.push(tues5[random])
            }
            return;
        }
    }
    function random36(){
        let random = Math.floor(Math.random() * (tues6p))
        if(gay.includes(tues6[random])==false){
            if(document.querySelector('#tues6')!=null){
                document.querySelector('#tues6').innerHTML = tues6[random];
                gay.push(tues6[random])
            }
            return;
        }
    }
    function random37(){
        let random = Math.floor(Math.random() * (tues7p))
        if(gay.includes(tues7[random])==false){
            if(document.querySelector('#tues7')!=null){
                document.querySelector('#tues7').innerHTML = tues7[random];
                gay.push(tues7[random])
            }
            return;
        }
    }
    function random38(){
        let random = Math.floor(Math.random() * (tues8p))
        if(gay.includes(tues8[random])==false){
            if(document.querySelector('#tues8')!=null){
                document.querySelector('#tues8').innerHTML = tues8[random];
                gay.push(tues8[random])
            }
            return;
        }
    }
    function random39(){
        let random = Math.floor(Math.random() * (tues9p))
        if(gay.includes(tues9[random])==false){
            if(document.querySelector('#tues9')!=null){
                document.querySelector('#tues9').innerHTML = tues9[random];
                gay.push(tues9[random])
            }
            return;
        }
    }
    function random40(){
        let random = Math.floor(Math.random() * (tues10p))
        if(gay.includes(tues10[random])==false){
            if(document.querySelector('#tues10')!=null){
                document.querySelector('#tues10').innerHTML = tues10[random];
                gay.push(tues10[random])
            }
            return;
        }
    }
    function random41(){
        let random = Math.floor(Math.random() * (wedn1p))
        if(gay.includes(wedn1[random])==false){
            if(document.querySelector('#wedn1')!=null){
                document.querySelector('#wedn1').innerHTML = wedn1[random];
                gay.push(wedn1[random])
            }
            return;
        }
    }
    function random42(){
        let random = Math.floor(Math.random() * (wedn2p))
        if(gay.includes(wedn2[random])==false){
            if(document.querySelector('#wedn2')!=null){
                document.querySelector('#wedn2').innerHTML = wedn2[random];
                gay.push(wedn2[random])
            }
            return;
        }
    }
    function random43(){
        let random = Math.floor(Math.random() * (wedn3p))
        if(gay.includes(wedn3[random])==false){
            if(document.querySelector('#wedn3')!=null){
                document.querySelector('#wedn3').innerHTML = wedn3[random];
                gay.push(wedn3[random])
            }
            return;
        }
    }
    function random44(){
        let random = Math.floor(Math.random() * (wedn4p))
        if(gay.includes(wedn4[random])==false){
            if(document.querySelector('#wedn4')!=null){
                document.querySelector('#wedn4').innerHTML = wedn4[random];
                gay.push(wedn4[random])
            }
            return;
        }
    }
    function random45(){
        let random = Math.floor(Math.random() * (wedn5p))
        if(gay.includes(wedn5[random])==false){
            if(document.querySelector('#wedn5')!=null){
                document.querySelector('#wedn5').innerHTML = wedn5[random];
                gay.push(wedn5[random])
            }
            return;
        }
    }
    function random46(){
        let random = Math.floor(Math.random() * (wedn6p))
        if(gay.includes(wedn6[random])==false){
            if(document.querySelector('#wedn6')!=null){
                document.querySelector('#wedn6').innerHTML = wedn6[random];
                gay.push(wedn6[random])
            }
            return;
        }
    }
    function random47(){
        let random = Math.floor(Math.random() * (wedn7p))
        if(gay.includes(wedn7[random])==false){
            if(document.querySelector('#wedn7')!=null){
                document.querySelector('#wedn7').innerHTML = wedn7[random];
                gay.push(wedn7[random])
            }
            return;
        }
    }
    function random48(){
        let random = Math.floor(Math.random() * (wedn8p))
        if(gay.includes(wedn8[random])==false){
            if(document.querySelector('#wedn8')!=null){
                document.querySelector('#wedn8').innerHTML = wedn8[random];
                gay.push(wedn8[random])
            }
            return;
        }
    }
    function random49(){
        let random = Math.floor(Math.random() * (wedn9p))
        if(gay.includes(wedn9[random])==false){
            if(document.querySelector('#wedn9')!=null){
                document.querySelector('#wedn9').innerHTML = wedn9[random];
                gay.push(wedn9[random])
            }
            return;
        }
    }
    function random50(){
        let random = Math.floor(Math.random() * (wedn10p))
        if(gay.includes(wedn10[random])==false){
            if(document.querySelector('#wedn10')!=null){
                document.querySelector('#wedn10').innerHTML = wedn10[random];
                gay.push(wedn10[random])
            }
            return;
        }
    }
    function random51(){
        let random = Math.floor(Math.random() * (thurs1p))
        if(gay.includes(thurs1[random])==false){
            if(document.querySelector('#thurs1')!=null){
                document.querySelector('#thurs1').innerHTML = thurs1[random];
                gay.push(thurs1[random])
            }
            return;
        }
    }
    function random52(){
        let random = Math.floor(Math.random() * (thurs2p))
        if(gay.includes(thurs2[random])==false){
            if(document.querySelector('#thurs2')!=null){
                document.querySelector('#thurs2').innerHTML = thurs2[random];
                gay.push(thurs2[random])
            }
            return;
        }
    }
    function random53(){
        let random = Math.floor(Math.random() * (thurs3p))
        if(gay.includes(thurs3[random])==false){
            if(document.querySelector('#thurs3')!=null){
                document.querySelector('#thurs3').innerHTML = thurs3[random];
                gay.push(thurs3[random])
            }
            return;
        }
    }
    function random54(){
        let random = Math.floor(Math.random() * (thurs4p))
        if(gay.includes(thurs4[random])==false){
            if(document.querySelector('#thurs4')!=null){
                document.querySelector('#thurs4').innerHTML = thurs4[random];
                gay.push(thurs4[random])
            }
            return;
        }
    }
    function random55(){
        let random = Math.floor(Math.random() * (thurs5p))
        if(gay.includes(thurs5[random])==false){
            if(document.querySelector('#thurs5')!=null){
                document.querySelector('#thurs5').innerHTML = thurs5[random];
                gay.push(thurs5[random])
            }
            return;
        }
    }
    function random56(){
        let random = Math.floor(Math.random() * (thurs6p))
        if(gay.includes(thurs6[random])==false){
            if(document.querySelector('#thurs6')!=null){
                document.querySelector('#thurs6').innerHTML = thurs6[random];
                gay.push(thurs6[random])
            }
            return;
        }
    }
    function random57(){
        let random = Math.floor(Math.random() * (thurs7p))
        if(gay.includes(thurs7[random])==false){
            if(document.querySelector('#thurs7')!=null){
                document.querySelector('#thurs7').innerHTML = thurs7[random];
                gay.push(thurs7[random])
            }
            return;
        }
    }
    function random58(){
        let random = Math.floor(Math.random() * (thurs8p))
        if(gay.includes(thurs8[random])==false){
            if(document.querySelector('#thurs8')!=null){
                document.querySelector('#thurs8').innerHTML = thurs8[random];
                gay.push(thurs8[random])
            }
            return;
        }
    }
    function random59(){
        let random = Math.floor(Math.random() * (thurs9p))
        if(gay.includes(tues9[random])==false){
            if(document.querySelector('#thurs9')!=null){
                document.querySelector('#tues9').innerHTML = tues9[random];
                gay.push(tues9[random])
            }
            return;
        }
    }
    function random60(){
        let random = Math.floor(Math.random() * (thurs10p))
        if(gay.includes(tues10[random])==false){
            if(document.querySelector('#thurs10')!=null){
                document.querySelector('#tues10').innerHTML = tues10[random];
                gay.push(tues10[random])
            }
            return;
        }
    }
    /*
    function random4(x,y,z){
        let random = Math.floor(Math.random() * (sat1p))
        if(gay.includes(sat1[random])==false){
            document.querySelector('#sat1').innerHTML = sat1[random];
            gay.push(sat1[random])
            return;
        }
    }*/
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
    if(c.length==(parseInt(localStorage.getItem('subs'))+parseInt(localStorage.getItem('times')))){
        document.querySelector('#mark').scrollIntoView({behavior:'smooth'})
        return;
    }
    else{
        myFunc();
    }
}
else{
    alert('من فضلك أدخل إسم المواد الخاصة بك')
}
}


