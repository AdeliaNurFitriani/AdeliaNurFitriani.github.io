$(document).ready(function(){

$.ajax({
				url: 'assets/js/myjson.json',
				type: 'POST',
				dataType: "json",
				success: function handledata(data){

					var strjson =JSON.stringify(data);

					for(var i = 0; i < data.bt21.Length; i++) {
					$('#daftar').append("<div class= 'card mb-3' style='width: 18rem;'>"
						+"<img src='"+ data.bt21[i].aimg 
					+"' class='card-img-top' alt='...' width='50%'' height='30%'><div class='card-body'>" + 
					"<h6 class='card-title' font-size='7' >" 
					+ data.bt21[i].barang +"</h6>"
					+ "<p class='card-text' font-size='10'>"+data.bt21.harga
					+'</p></div>');

				}
			}
		});
	});

