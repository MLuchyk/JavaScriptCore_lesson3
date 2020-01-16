var x = -16;
if(x>0){
  console.log(1);
}else if(x<0){
  console.log(-1);
}else{
  console.log(0);
}

var login = prompt("Who's there?");
var password = 'TheMaster';

//if(login==null){
//    alert('Canceled');
//}else if(login!= 'Admin'){
//    alert("I don't know you");
//}else if(login=='Admin'){
//    var psw = prompt('Password?');
//    if(psw==null){
//        alert('Canceled');
//    }else if(psw!= 'TheMaster'){
//        alert('Wrong password');
//    }else{
//        alert('Welcome!');
//    }
//}

switch(login){
    case 'Admin':
        var psw = prompt('Password?');
        switch(psw){
        case 'TheMaster':
        alert('Welcome!');
        break;
        
        case '':
        alert('Wrong password');
        break;
       
        case null:
        alert('Canceled');
        break;
        
        default:
        alert('Wrong password');
        
    }
    break;
    case'' :
        alert("I don't know you");
        break;   
    case null:
        alert('Canceled');
        break;
    default:
        alert("I don't know you")
}
// added comment
