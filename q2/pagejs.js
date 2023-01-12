var arr = [];

 //constructor function
 var person=function(name,addr,hobb){
    this.name=name;
    this.addr=addr;
    this.hobb=hobb;
}


function addobj() {
    var nm = document.getElementById("name").value;
    var add = document.getElementById("addr").value;
    var hob = document.getElementById("hobb").value;
    
    if(nm.length > 5){
        alert("Length of name should be less than tht 6 letters");
    }else{
        var obj = new person(nm,add,hob);
        arr.push(obj);
        var str = "your details have been successfully saved in the database";
        document.getElementById("mydiv").innerHTML = str;
    }
}

function displayobj(){
    document.getElementById("bdy").setAttribute("style","background-color:red;")
    // alert(arr);
    var str =  "";
    for(var v of arr){
        str += "<br>"+v.name+" "+v.addr;
    }
    document.getElementById("mydiv").innerHTML = str;

}