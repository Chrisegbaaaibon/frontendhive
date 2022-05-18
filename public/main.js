console.log("Hello");
//Circles
let dot1=document.querySelector("#dot1");
let dot2=document.querySelector("#dot2");
let dot3=document.querySelector("#dot3");
let dot4=document.querySelector("#dot4");
let dot5=document.querySelector("#dot5");
let comment=document.querySelector("#comnt");
let proPic=document.querySelector("#pro-pic");
let pName=document.querySelector("#pro-name");
let btn = document.querySelector(".join");
let msg=document.querySelector('.msg');
const inputField = document.getElementById('email')
var email=document.querySelector('#email');
const back= document.querySelector('.hivendHome__modalCloseButton')
const overlay = document.querySelector('.hivendHome__modalBox');
let home = document.querySelector('.button');
// let intro = document.querySelector('.limit');
let profile = document.querySelector('.profile');
let image = document.querySelector('.image');
ScrollReveal().reveal('.body')

//Arrays of the circles
const circle=[
				dot1,
				dot2,
				dot3,
				dot4,
				dot5
]
//Array of comments
const comments=[
				"Overall love the build up so far, I'm anticipating the launch",
				"Hivend will be the educational foundation of the next generation !!! ...i dey tell you...",
				"Hivend makes gaining knowledge easier and seamless by allowing anyone from anywhere to access educational resources capable of changing their lives for good",
]
//Array of commenters name
names=[
				"Jayj Savage",
				"Godswill Akaiso",
				"Sadiq Isiaka",
]
//Arrays of profile pictures
pics=[
				"images/jayj.jpg",
				"images/godswill.jpg",
				"images/sadiq.jpg",
]

let i=0
setInterval(()=>{
				i++
			let	p=proPic.getAttribute('src');
				if(i==comments.length) {
								i=0
				}
				if(i==0) {
					comment.innerText=comments[i];
					circle[0].style.color="yellow"
					pName.innerText=names[0]
						proPic.setAttribute('src',pics[0])
			}else {
							circle[0].style.color="white"
			}

				if(i==1) {
						comment.innerText=comments[i];
						circle[1].style.color="yellow"
						pName.innerText=names[1]
							proPic.setAttribute('src',pics[1])
				}else {
								circle[1].style.color="white"
				}
				if(i==2) {
						comment.innerText=comments[i];
						circle[2].style.color="yellow"
						pName.innerText=names[2]
							proPic.setAttribute('src',pics[2])
				}else {
								circle[2].style.color="white"
				}

				if(i==3) {
						comment.innerText=comments[i];
						circle[3].style.color="yellow"
							 pName.innerText=names[3]
							 proPic.setAttribute('src',pics[3])
						  
				}else {
								circle[3].style.color="white"
				}
				
},4200)
let m=comments.length;
console.log(m);




//FAQ buttons
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let btn4=document.querySelector("#btn4");
let btn5=document.querySelector("#btn5");
let btn6=document.querySelector("#btn6");
let btn7=document.querySelector("#btn7");
let btn8=document.querySelector("#btn8");
//FAQ answers
let ans1=document.querySelector("#ans1");
let ans2=document.querySelector("#ans2");
let ans3=document.querySelector("#ans3");
let ans4=document.querySelector("#ans4");
let ans5=document.querySelector("#ans5");
let ans6=document.querySelector("#ans6");
let ans7=document.querySelector("#ans7");
let ans8=document.querySelector("#ans8");


// faq functionalities
btn1.addEventListener('click',()=>{
	ans1.style.display=="block"
	if(ans1.style.display=="none") {
		ans1.style.display="block"
	  btn1.innerText="-"		
}else {
				ans1.style.display="none"
	  btn1.innerText="+"
}
});

btn2.addEventListener('click',()=>{
		ans2.style.display=="block"
		if(ans2.style.display=="none") {
			ans2.style.display="block"
		  btn2.innerText="-"		
	}else {
					ans2.style.display="none"
		  btn2.innerText="+"
	}
});

btn3.onclick=()=>{
	if(ans3.style.display=="none") {
			ans3.style.display="block"
		  btn3.innerText="-"		

	}else {
					ans3.style.display="none"
		  btn3.innerText="+"
	}
};

btn4.addEventListener('click',()=>{
		if(ans4.style.display=="none") {
			ans4.style.display="block"
		  btn4.innerText="-"		
	}else {
					ans4.style.display="none"
		  btn4.innerText="+"
	}
});

btn5.addEventListener('click',()=>{
		if(ans5.style.display=="none") {
			ans5.style.display="block"
		  btn5.innerText="-"		
	}else {
					ans5.style.display="none"
		  btn5.innerText="+"
	}
});

btn6.addEventListener('click',()=>{
		if(ans6.style.display=="none") {
			ans6.style.display="block"
		  btn6.innerText="-"		
	}else {
					ans6.style.display="none"
		  btn6.innerText="+"
	}
});

btn7.addEventListener('click',()=>{
		if(ans7.style.display=="none") {
			ans7.style.display="block"
		  btn7.innerText="-"		
	}else {
					ans7.style.display="none"
		  btn7.innerText="+"
	}
});


btn8.addEventListener('click',()=>{
		if(ans8.style.display=="none") {
			ans8.style.display="block"
		  btn8.innerText="-"		
	}else {
					ans8.style.display="none"
		  btn8.innerText="+"
	}
});


function myFunction() {
	let emailString=email.value.toString();
	const loader = document.createElement('div')
	loader.classList.add('loader')
	
	btn.innerHTML.replace = ''
		if(emailString.endsWith("@gmail.com")==true) {
			btn.textContent = ''
			btn.appendChild(loader)
			$.ajax({
				url: "https://hivend.herokuapp.com/api/addEmail",
			method: "POST",
		data: { email: inputField.value },
		success: (data)=>{
			if(data.status === '401'){
				btn.disabled = false;
				inputField.value = ''
				msg.textContent = 'Email already Exists!';
				setTimeout(()=>{
					btn.removeChild(loader)
					btn.textContent = 'Request Access'
				}, 1500)
			}else{
				if(data.status === '200'){
					image.style.display = 'none'
					profile.style.display = 'none'
					home.style.display = 'none'
					overlay.style.display = ''
					btn.disabled = false
					back.addEventListener('click', (e)=>{
						image.style.display = 'flex'
						profile.style.display = 'flex'
						home.style.display = 'grid'
						overlay.style.display = 'none';
						
						btn.textContent = 'Request Access'
					})
				}
			}
		}
	})
		}else{
					msg.textContent=`Invalid email 😑`
					setTimeout(function(){
					msg.textContent=``;
			  },2000);
		}
		btn.style.backgroundColor="grey";
						btn.style.color="rgba(247, 212, 11, 0.911)";
		setTimeout(function () {
						btn.style.backgroundColor="rgba(247, 212, 11, 0.911)";
						btn.style.color="black";
		},1000);
}
