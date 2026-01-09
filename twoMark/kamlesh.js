
// method 1

console.log(String.fromCharCode(122));  //97 , 122

var str = "Kaml eZshf ";
var count = 0;

for(let i = 0; i < str.length ; i++){
    if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
        count ++;
    }
}

console.log(count);



// mehthod 2

var count2 = 0;
var check;

for(let i = 0; i < str.length ; i++){
    check = str[i].toUpperCase();
    if(check == str[i]){
        count2 ++;
    }
}

console.log(count);














// method 3

function removeVowel(str){
    let vowels = "aeiou";
    let str2 = "";

    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i].toLowerCase())){
            str2 += str[i];
        }
    }

    console.log(str2);
}





//  method 4

function removeVow(str){
    let str2 = "";
    for(let i = 0; i < str.length; i++){
        let code = str[i].toLowerCase().charCodeAt(0);
        if(code !== 97 && code !== 101 && code !== 105 && code !== 111 && code !== 117){
            str2 += str[i];
        }
    }
    console.log(str2);
}










// method 5

function removeV(str){
    let str2 = "";

    for(let i = 0; i < str.length; i++){
        let ch = str[i].toLowerCase();

        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        } else {
            str2 += str[i]; 
        }
    }

    console.log(str2);
}






// method 5


// function removeVOWEL(str){
//     let result = str.replaceAll([aeiou], "");
//     console.log(result);
// }
function removeVOWEL(str){
    let str2 = "" 
    let obj = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
        A:true,
        E:true,
        I:true,
        O:true,
        U:true
    }
    for(let i = 0;i<str.length;i++){
        if(!obj[str[i]]){
        str2 += str[i];
        }
    }
    return str2;
}





console.log(removeVOWEL("nishitdoshi"));




removeVow("nishitdoshi");
removeV("nishitdoshi");
removeVowel("nishit");