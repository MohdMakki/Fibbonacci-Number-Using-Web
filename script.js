function generate(){
    TextInput = document.getElementById("TextInput").value;
    if (document.getElementById("fnum").value === undefined){
        fnum = 0;
    }else{
        fnum = document.getElementById("fnum").value;
    }
    let i=0;
    input = TextInput;
    let string = "";
    let a=1;
    let b=1;
    let c=0;
    while(i < input){
        c=a+b;
        if(i<input && c>=fnum){
            string = string + c+' ';
        }
        b=c+a;
        i++;
        if(i<input && b>=fnum){
            string = string + b+' ';
        }
        i++;
        a=b+c;
        if(i<input && a>=fnum){
            string = string + a+' ';
        }
        i++;
    }
    console.log(string);
    document.getElementById('fibo').innerHTML = string;
}

// document.write(string);
//function gen2(){
  //  Input = TextInput;
  //  document.getElementById('fibo').innerHTML = generate(Input);
//}
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
  
  // This will work!
  workbox.routing.registerRoute(
      ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
  );