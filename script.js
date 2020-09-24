var iDb=[];
var iDr=[];
var iD;
var selected=false;
var lower=["k","q","e","n","b","p"];
var upper=["K","Q","E","N","B","P"];
var turn =true;

function reset(){
var x = document.getElementsByClassName("a");
var y = document.getElementsByClassName("b");

for(var i=0;i<x.length;i++){
	x[i].style.backgroundColor="brown";
}
for(var i=0;i<y.length;i++){
	y[i].style.backgroundColor="coral";
}
}
function myfunc(x){
	if(selected==true){
		let a=x.id;
		if(iDb.indexOf(a)<0 && iDr.indexOf(a)<0 ){
				reset();
		}
		else{
			if(iDb.indexOf(a)>=0){
				var i=iDb.indexOf(a);
				document.getElementById(a).innerHTML=(document.getElementById(iD).innerHTML);
				document.getElementById(iD).innerHTML='';
				if(turn==true)
				document.getElementById("move").innerHTML="BLACK's TURN";
				else
				document.getElementById("move").innerHTML="WHITE's TURN";
				turn=!turn;
			}
			else{
				var i=iDr.indexOf(a);
				document.getElementById(iDr[i]).innerHTML=(document.getElementById(iD).innerHTML);
				document.getElementById(iD).innerHTML='';
				if(turn==true)
				document.getElementById("move").innerHTML="BLACK's TURN";
				else
				document.getElementById("move").innerHTML="WHITE's TURN";
				turn=!turn;
			}
		}
		reset();
		selected=false;
		iDb=[];
		iDr=[];
	}
	else{
		var a=x.id;
		if(lower.indexOf(x.innerText)>=0 && turn==true)
			alert("It's White's Turn");
		else if(upper.indexOf(x.innerText)>=0 && turn==false)
			alert("It's Black's Turn");
		else{
			selected=true;
			iD=a;
			if(x.innerText=='K'){
				var p=a[0],q=a[1],r=a[2];
				var dx=[1, 1, 1, -1, -1, -1, 0, 0];
				var dy=[0, -1, 1, -1, 0, 1, 1, -1];
				for(var i=0;i<8;i++){
					var s=p+(q-'0'+dx[i])+(r-'0'+dy[i]);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						}
					}
				}
			}
			else if(x.innerText=='Q'){
				var p=a[0],q=a[1],r=a[2];
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
			}
			else if(x.innerText=='N'){
				var p=a[0],q=a[1],r=a[2];
				var dx=[1, 1, 2, -2, -1, -1, -2, 2];
				var dy=[2, -2, 1, 1, 2, -2, -1, -1];
				for(var i=0;i<8;i++){
					var s=p+(q-'0'+dx[i])+(r-'0'+dy[i]);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						}
					}
				}
			}
			else if(x.innerText=='P'){
				var p=a[0],q=a[1],r=a[2];
				var s2=p+(q-'0'+1)+(r-'0'-1);
				var s3=p+(q-'0'-1)+(r-'0'-1);
				for(var i=1;i<3;i++){
					var s=p+q+(r-'0'-i);
					var t=document.getElementById(s);
					if(s.length==3 && s[2]!='0' && t.innerHTML==''){
						if((i==2 && r=='7') || i==1){
							t.style.background="skyblue";
							iDb.push(s);
						}
					}
				}
				if(s2.length==3 && s2[1]!='0' && s2[2]!='0' && s2[1]!='9' && s2[2]!='9'){
						var t=document.getElementById(s2);
						if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s2);
						}
				}
				if(s3.length==3 && s3[1]!='0' && s3[2]!='0' && s2[1]!='9' && s2[2]!='9'){
						var t=document.getElementById(s3);
						if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s3);
						}
				}
			}
			else if(x.innerText=='B'){
				var p=a[0],q=a[1],r=a[2];
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
			}
			else if(x.innerText=='E'){
				var p=a[0],q=a[1],r=a[2];
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(lower.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
			}
			if(x.innerText=='k'){
				var p=a[0],q=a[1],r=a[2];
				var dx=[1, 1, 1, -1, -1, -1, 0, 0];
				var dy=[0, -1, 1, -1, 0, 1, 1, -1];
				for(var i=0;i<8;i++){
					var s=p+(q-'0'+dx[i])+(r-'0'+dy[i]);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						}
					}
				}
			}
			else if(x.innerText=='q'){
				var p=a[0],q=a[1],r=a[2];
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
			}
			else if(x.innerText=='n'){
				var p=a[0],q=a[1],r=a[2];
				var dx=[1, 1, 2, -2, -1, -1, -2, 2];
				var dy=[2, -2, 1, 1, 2, -2, -1, -1];
				for(var i=0;i<8;i++){
					var s=p+(q-'0'+dx[i])+(r-'0'+dy[i]);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						}
					}
				}
			}
			else if(x.innerText=='p'){
				var p=a[0],q=a[1],r=a[2];
				var s2=p+(q-'0'-1)+(r-'0'+1);
				var s3=p+(q-'0'+1)+(r-'0'+1);
				for(var i=1;i<3;i++){
					var s=p+q+(r-'0'+i);
					var t=document.getElementById(s);
					if(s.length==3 && s[2]!='9' && t.innerHTML==''){
						if((i==2 && r=='2') || i==1){
							t.style.background="skyblue";
							iDb.push(s);
						}
					}
				}
				if(s2.length==3 && s2[1]!='0' && s2[2]!='0' && s2[1]!='9' && s2[2]!='9'){
						var t=document.getElementById(s2);
						if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s2);
						}
				}
				if(s3.length==3 && s3[1]!='0' && s3[2]!='0' && s2[1]!='9' && s2[2]!='9'){
						var t=document.getElementById(s3);
						if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s3);
						}
				}
			}
			else if(x.innerText=='b'){
				var p=a[0],q=a[1],r=a[2];
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
			}
			else if(x.innerText=='e'){
				var p=a[0],q=a[1],r=a[2];
				for(var i=1;i<8;i++){
					var s=p+(q-'0'+i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'+i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q-'0'-i)+(r);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
				for(var i=1;i<8;i++){
					var s=p+(q)+(r-'0'-i);
					if(s.length==3 && s[1]!='0' && s[2]!='0' && s[1]!='9' && s[2]!='9'){
						var t=document.getElementById(s);
						if(t.innerHTML==''){
						t.style.background="skyblue";
						iDb.push(s);
						}
						else if(upper.indexOf(t.innerText)>=0){
						t.style.background="red";
						iDr.push(s);
						break;
						}
						else
						break;
					}
				}
			}
		}
	}
}