function Save()
{

debugger;
 var new_Name=document.getElementById("new_name").value;
 var new_Occupation=document.getElementById("new_occupation").value;
 var new_Address=document.getElementById("new_address").value;
 var new_phnumber=document.getElementById('new_phnumber').value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_Name+"</td>\
 <td id='Occupation_row"+table_len+"'>"+new_Occupation+"</td>\
 <td id='address_row"+table_len+"'>"+new_Address+"</td>\
 <td id='phone_row"+table_len+"'>"+new_phnumber+"</td>\
 <td><button id='edit_button"+table_len+"'  class='edit' onclick='edit_row("+table_len+")'><i class='fas fa-edit'></i>Edit</button>\
 <button id='saving_button"+table_len+"'  style='display:none' onclick='save_row("+table_len+")'><i class='fas fa-save'></i>Save</button>\
 <button  id='delete_btn' class='delete' onclick='delete_row("+table_len+")'><i class='fas fa-trash-alt'></i>Delete</button></td></tr>";
 
 document.getElementById(table_len-1).style.display='none';
 
}

function addnew_row(){
var arrHead=['Name','Occupation','Address','Mobile Number','Action']
debugger;
var empTab = document.getElementById('data_table');

        var rowCnt = empTab.rows.length;        
        var tr = empTab.insertRow(rowCnt);      
        tr = empTab.insertRow(rowCnt);
		tr.setAttribute('id',rowCnt);

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');          
            td = tr.insertCell(c);

            if (c == 4) {           
               
                var button = document.createElement('button');

                button.setAttribute('value', 'Save');
				button.setAttribute('id','save_row')
				setTimeout(()=>{
					
					 document.getElementById('save_row').innerHTML='Save';
					 var icon=document.createElement('i');
					icon.setAttribute('class','fas fa-save');
					button.appendChild(icon);
				},0)
              
                button.setAttribute('onclick', 'Save()');
				
				

                td.appendChild(button);
            }
            else {
			
			switch(arrHead[c]){
				case 'Name':
				 
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');
				ele.setAttribute('id','new_name');

                td.appendChild(ele);
				break;
				case 'Occupation' :
				
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');
				ele.setAttribute('id','new_occupation');

                td.appendChild(ele);
				break;
				case 'Address':
				
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');
				ele.setAttribute('id','new_address');

                td.appendChild(ele);
				break;
				case 'Mobile Number':
			
                var ele = document.createElement('input');
                ele.setAttribute('type', 'number');
                ele.setAttribute('value', '');
				ele.setAttribute('id','new_phnumber');

                td.appendChild(ele);
				break;
				
			
			}
               
            }
        }
    }
function edit_row(no)
{
	debugger;
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("saving_button"+no).style.display="inline-block";
	
 var name=document.getElementById("name_row"+no);
 var occcupation=document.getElementById("Occupation_row"+no);
 var phone=document.getElementById("phone_row"+no);
 var address=document.getElementById("address_row"+no);
 
	
 var name_data=name.innerHTML;
 var occcupation_data=occcupation.innerHTML;
 var phone_data=phone.innerHTML;
 var address_data=address.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 occcupation.innerHTML="<input type='text' id='occcupation_text"+no+"' value='"+occcupation_data+"'>";
 phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
 address.innerHTML="<input type='text' id='address_text"+no+"' value='"+address_data+"'>";

}
function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var occcupation_val=document.getElementById("occcupation_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;
 var address_val=document.getElementById("address_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("Occupation_row"+no).innerHTML=occcupation_val;
 document.getElementById("phone_row"+no).innerHTML=phone_val;
 document.getElementById("address_row"+no).innerHTML=address_val;

 document.getElementById("edit_button"+no).style.display="inline-block";
 document.getElementById("saving_button"+no).style.display="none";
}
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}