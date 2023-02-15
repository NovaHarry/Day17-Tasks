var maindiv = document.createElement('div');
maindiv.classList.add('container');
document.body.append(maindiv);

var subdiv1 = document.createElement('div');
subdiv1.classList.add('sub1');
maindiv.append(subdiv1);

var subdiv2 = document.createElement('div');
subdiv2.classList.add('sub2');
subdiv1.append(subdiv2);



var h = document.createElement('h1');
subdiv2.append(h);

var secs = document.querySelector('h1');

setTimeout(()=>{
    secs.innerText = 10;
    setTimeout(()=>{
        secs.innerText = 9;
        setTimeout(()=>{
            secs.innerText = 8;
            setTimeout(()=>{
                secs.innerText = 7;
                setTimeout(()=>{
                    secs.innerText = 6;
                    setTimeout(()=>{
                        secs.innerText = 5;
                        setTimeout(()=>{
                            secs.innerText = 4;
                            setTimeout(()=>{
                                secs.innerText = 3;
                                setTimeout(()=>{
                                    secs.innerText = 2;
                                    setTimeout(()=>{
                                        secs.innerText = 1;
                                        setTimeout(()=>{
                                            secs.innerText = "Happy New Year !!!";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
