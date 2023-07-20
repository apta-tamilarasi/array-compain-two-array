var arr1=[12, 13, 40, 13, 33, 45, 22, 45, 94, 21 ];
var arr2=[14, 15, 34, 91]

	document.write("Given array is "+"arr1=[12, 13, 40, 13, 33, 45, 22,  45, 94, 21]"+"<br><br>");
	document.write("Given array is "+"arr2=[14, 15, 34, 91]"+"<br><br>");
	document.write("Compain two arrays"+"<br><br>");
	
for(let i=0;i<arr2.length;i++){
		arr1.push(arr2[i]);
	}

document.write(arr1);
console.log(arr1);
