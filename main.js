//function loadjson(file,callback) {
	//var xhr = new XMLHttpRequest();
	//xhr.overrideMimeType("application/json");
	//xhr.open("GET",file,true);
	//xhr.onreadystatechange=function(){
	//	if(xhr.readyState===4 && xhr.status===200){
	//		callback(xhr.responseText);
	//	}
	//};
	//xhr.send(null);
 // }

//loadjson("data.json",function(text){
	//var data=JSON.parse(text);
	//console.log(data);
  //  basics(data.details);
//})
	function loadjson(file){
		return new Promise((resolve,reject)=>{
			return fetch(file).then(response=>{
				if(response.ok){
					resolve(response.json());
				}else{
					reject(new Error('error'));
				
				}
			})
		})
	}

var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	educationdetails(data.education);

})


var ch = document.querySelector(".child1");
function basics(det) {
	var img = document.createElement("img");
	img.src=det.image;
	img.alt="picture";
	ch.appendChild(img);

	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);
	
	var email=document.createElement("a");
	email.href="mailto:jaganavasantha2001@gmail.com"
	email.textContent="jaganavasantha2001@gmail.com"
	ch.appendChild(email);
	
	var num=document.createElement("h2");
	num.textContent=det.number;
	ch.appendChild(num);

	var add=document.createElement("h2");
	add.textContent=det.address;
	ch.appendChild(add);
	
}
	var ch2=document.querySelector(".child2");
	function careerinfo(infodata){
		var h1=document.createElement("p");
		h1.textContent="career objectives";
		ch2.appendChild(h1);
		var hr=document.createElement("hr");
		ch2.appendChild(hr);
		var h2=document.createElement("h2");
		h2.textContent=infodata.info;
		ch2.appendChild(h2);
	}

	function educationdetails(edu){

		var table1=document.createElement("table");
		table1.border="1";
		ch2.appendChild(table1);

		tabledata="";
		for(i=0;i<edu[i].length;i++){
			tabledata+="<tr><td>"+edu[i].institute+"</td></td>"+edu[i].degree+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].passoutyear+"</td></tr>";
		
			}
			table1.innerHTML=tabledata;
		}

