$(document).on('ready',function(){
	$.ajax({
		url:'http://localhost:3000/pokedex',
		type:'GET'
	}).success(function(data){
		console.log(data)
		var divParent=document.createElement('div');
		for (item in data){
			var a=document.createElement('a');
				a.setAttribute('href',data[item].url);
				a.setAttribute('class','pokemon');
			var h3=document.createElement('h3');
				h3.innerText=data[item].text;
			var img=document.createElement('img');
				img.setAttribute('src',data[item].img);
			a.appendChild(h3);
			a.appendChild(img);
			divParent.appendChild(a);
		}
		document.body.appendChild(divParent);
	});
})