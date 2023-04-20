//your JS code here. If required.
let arr = document.querySelector("ul");
let s = arr.children;
for(let i=0;i<s.length;i++){
	if(s[i].id=="level"){
		alert("The level of the element is: "+(i+1));
		break;
	}
}