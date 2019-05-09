function formactions(){
	var x = new Array(8);
	x[0] = document.getElementById("Name").value;
	x[1] = document.getElementById("Email").value;
	x[2] = document.getElementById("Mobile").value;
	x[3] = document.getElementById("DOB").value;
	var y = document.getElementsByName("gender");
	if(y[0].checked==true)
		x[4] = y[0].value;
	else
		x[4] = y[1].value;
	var z = document.getElementsByName("marital");
	if(z[0].checked==true)
		x[5] = z[0].value;
	else
		x[5] = z[1].value;
	x[6] = document.getElementById("cuisine").value;
	x[7] = document.getElementById("hiddenval").value;
	if(x[7]==-1)
	{
		var txt = "<tr>";
		var i;
		for(i=0; i<7;i++)
		{
			txt = txt + "<td value=" + x[i] + ">" + x[i] + "</td>";
		}
		txt = txt + "<td><input type='button' name='edit' value='edit' onclick='editvalues(this)'/></td><td><input type='button' value='delete' onclick='deletevalues(this)'></td></tr>";
		display=document.getElementById("disp");
		display.insertAdjacentHTML( 'beforeend', txt);
	}
	else
	{
		for(i=0; i<7; i++)
		{
			document.getElementById("disp").rows[x[7]].cells[i].innerHTML=x[i];
		}
		document.getElementById('hiddenval').value=-1;
	}
}

function deletevalues(rows){
	var _row = rows.parentElement.parentElement;
	document.getElementById('disp').deleteRow(_row.rowIndex);
}

function editvalues(rows){
	var _row = rows.parentElement.parentElement.rowIndex;
	var i = 1;
	var val = new Array(8);
	val[7]=_row;
	for(i=0; i<7; i++)
	{
		val[i]=document.getElementById("disp").rows[_row].cells[i].innerHTML;
	}
	document.getElementById("Name").value = val[0];
	document.getElementById("Email").value = val[1];
	document.getElementById("Mobile").value = val[2];
	document.getElementById("DOB").value = val[3];
	if (val[4]=="Male")
	{	
		document.getElementById("male").checked = true;
	}
	else
	{	
		document.getElementById("female").checked = true;
	}
	if (val[5]=="Married")
	{	
		document.getElementById("married").checked = true;
	}
	else
	{	
		document.getElementById("single").checked = true;
	}
	document.getElementById("cuisine").value = val[6];
	document.getElementById("hiddenval").value = val[7];
}