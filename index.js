var email=document.querySelector('#email');
var btn=document.querySelector('.button');
var msg=document.querySelector('.msg');
const overlay = document.querySelector('.hivend_modalOverlay');
const inputField = document.getElementById('email')
const back= document.querySelector('.hivendHome__modalCloseButton')
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
						msg.innerHTML= 'Email already Exists!';
						setTimeout(()=>{
							btn.removeChild(loader)
							btn.textContent = 'Request Access'
						}, 1500)
					}else{
						if(data.status === '200'){
							overlay.style.display = 'flex'
							btn.disabled = false
							back.addEventListener('click', (e)=>{
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
