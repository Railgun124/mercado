var app = window.app || {},
business_paypal = ''; // aquí va tu correo electrónico de paypal

(function($){
	'use strict';

	//no coflict con underscores

	app.init = function(){
		//totalItems totalAmount
		var total = 0,
		items = 0
		
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		
		if(undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0){
			_.forEach(cart.items, function(n, key) {
			   items = (items + n.cant)
			   total = total  + (n.cant * n.price)
			});

		}

		$('#totalItems').text(items)
		$('.totalAmount').text('$ '+total)
		
	}

	app.masVendidos = function(){
		var productos = [
			{
				id : 1,
				img : 'assets/img/xbox.jpeg',
				name : 'Xbox Series S 512GB',
				price : 5200.00,
				desc : 'Color Blanco',
				stock : 52
			},
			{
				id : 2,
				name : 'Laptop Lenovo',
				img : 'assets/img/laptop.jpeg',
				price : 7299,
				desc : 'Ryzen 3 7320u 8gb 256gb ssd',
				stock : 23
			},
			{
				id : 3,
				name : 'Cámara Seguridad',
				img : 'assets/img/camara_vigilancia.jpeg',
				price : 199.00,
				desc : 'Color Negro punta fina',
				stock : 32
			},
			{
				id : 4,
				name : 'Colchón Restonic',
				img : 'assets/img/colchon.jpeg',
				price : 3450,
				desc : 'Matrimonial Ortopédico + 2 Almohadas ',
				stock : 44
			},
			{
				id : 5,
				name : 'Pistola Impacto',
				img : 'assets/img/taladro.jpeg',
				price : 877,
				desc : 'Llave Inalámbrica Batería De 2 Pilas 1/2',
				stock : 100
			},
			{
				id : 6,
				name : 'Impresora Epson',
				img : 'assets/img/impresora.jpeg',
				price : 4559.00,
				desc : 'Color multifunción Epson EcoTank L3250 con wifi negra 110V',
				stock : 18
			},
			{
				id : 7,
				name : 'Mesa Plegable',
				img : 'assets/img/mesa.jpeg',
				price : 881.00,
				desc : 'Plástico Portátil Jardín Tipo Portafolio 1.80m',
				stock : 191
			},
			{
				id : 8,
				name : 'Proyector Portátil',
				img : 'assets/img/proyector.jpeg',
				price : 1728.00,
				desc : 'Profesional Android Wifi Bluetooth 4k',
				stock : 159
			},
			{
				id : 9,
				name : 'Ninja - Licuadora',
				img : 'assets/img/licuadora.jpeg',
				price : 3805.00,
				desc : 'Professional Plus con Auto-IQ y jarra trituradora, en acabado negro y acero inoxidable',
				stock : 90
			},
			{
				id : 10,
				name : 'Bicicleta Deportiva',
				img : 'assets/img/bicicleta.jpeg',
				price : 2699.00,
				desc : 'Rodada 26 con 21 velocidades, marca RACK y PACK',
				stock : 14
			},
			{
				id : 11,
				name : 'Hisense Pantalla',
				img : 'assets/img/televisor.jpeg',
				price : 8300.00,
				desc : '4k SmartTV ULED de 55 pulgadas',
				stock : 29
			},
			{
				id : 12,
				name : 'Camara Cannon',
				img : 'assets/img/camara_video.jpeg',
				price : 44999.00,
				desc : 'Camara con lente de 24-105mm',
				stock : 7
			},
			{
				id : 13,
				name : 'HUNTER Ventilador',
				img : 'assets/img/ventilador_techo.jpeg',
				price : 3781.00,
				desc : 'Ventilador de techo con luz, 5 aspas reversibles, 54 pulgadas',
				stock : 23
			},
			{
				id : 14,
				name : 'Mochila CARS',
				img : 'assets/img/mochila_macuins.jpeg',
				price : 856.00,
				desc : 'Mini mochila de 10 pulgadas',
				stock : 6
			},
			{
				id : 15,
				name : 'Amazon echo',
				img : 'assets/img/echo_dot.jpeg',
				price : 750.00,
				desc : '5ta generacion, asistente virtual alexa',
				stock : 28
			},
			{
				id : 16,
				name : 'Carpa Toldo',
				img : 'assets/img/carpa.jpeg',
				price : 1071.00,
				desc : '3x3 reforzado, plegable, impermeable, azul y rojo',
				stock : 19
			},
			{
				id : 17,
				name : 'Marcador Bic',
				img : 'assets/img/p20.jpg',
				price : 60.00,
				desc : 'Caja con 6 piezas color negro ',
				stock : 25
			},
			{
				id : 18,
				name : 'Nintendo Switch',
				img : 'assets/img/nintendo.jpeg',
				price : 5089.00,
				desc : 'OLED 64GB, rojo, neon, azul y negro',
				stock : 18
			},
			{
				id : 19,
				name : 'Ventilador Industrial',
				img : 'assets/img/ventilador_piso.jpeg',
				price : 819.00,
				desc : '3 en 1, de pie de pared y piso',
				stock : 23
			},
			{
				id : 20,
				name : 'Frigobar gris',
				img : 'assets/img/mini_refrigerador.jpeg',
				price : 5250.00,
				desc : 'Mini refrigerador hasta 100 latas',
				stock : 13
			},
			{
				id : 21,
				name : 'Marcadores Colores',
				img : 'assets/img/p23.jpg',
				price : 177.00,
				desc : 'Doble punta, 80 colores',
				stock : 89
			},
			{
				id : 22,
				name : 'Microondas Mabe',
				img : 'assets/img/microondas.jpeg',
				price : 1910.00,
				desc : 'silver 20L',
				stock : 15
			},
			{
				id : 23,
				name : 'Casco KOV _   ',
				img : 'assets/img/casco.jpeg',
				price : 1413.00,
				desc : 'Abatible con luz',
				stock : 23
			},
			{
				id : 24,
				name : 'Plancha de ropa',
				img : 'assets/img/plancha.jpeg',
				price : 564.00,
				desc : 'Ceramica con vapor vertical',
				stock : 17
			},
			{
				id : 25,
				name : 'Contadora de billetes',
				img : 'assets/img/contador_dinero.jpeg',
				price : 1411.00,
				desc : 'Maquina contadora de billetes, detecta billetes falsos',
				stock : 19
			},
			{
				id : 26,
				name : 'Marcador tipo Pluma',
				img : 'assets/img/p45.jpeg',
				price : 49.00,
				desc : 'Paquete con 15 plumones de color diferente',
				stock : 23
			},
			{
				id : 27,
				name : 'Stiky notes, variedad',
				img : 'assets/img/p46.jpg',
				price : 150.00,
				desc : 'Caja con 24 blocks de diferentes colores',
				stock : 13
			},
			{
				id : 28,
				name : 'Libreta Para notas',
				img : 'assets/img/p47.jpg',
				price : 29.00,
				desc : 'Libreta para notas con 100 hojas tamaño 25X40',
				stock : 11
			},
			{
				id : 24,
				name : 'Corrector de cinta',
				img : 'assets/img/p48.jpg',
				price : 15.00,
				desc : 'Corrector de figuras con aroma frutal',
				stock : 45
			},
			{
				id : 24,
				name : 'Borrador de silicon',
				img : 'assets/img/p49.jpg',
				price : 3.00,
				desc : 'Borrador frutal',
				stock : 12
			},

		],
		wrapper = $('.productosWrapper'),
		contenido = ''

		for(var i = 0; i < productos.length; i++){

			if(productos[i].stock > 0){

				contenido+= '<div class="coin-wrapper">'
				contenido+= '		<img src="'+productos[i].img+'" alt="'+productos[i].name+'">'
				contenido+= '		<span class="large-12 columns product-details">'
				contenido+= '			<h3>'+productos[i].name+' <span class="price">$ '+productos[i].price+' </span></h3>'
				contenido+= '			<h3>Tenemos: <span class="stock">'+productos[i].stock+'</span></h3>'
				contenido+= '		</span>'
				contenido+= '		<a class="large-12 columns btn submit ladda-button prod-'+productos[i].id+'" data-style="slide-right" onclick="app.addtoCart('+productos[i].id+');">Añadir a la canasta</a>'
				contenido+= '		<div class="clearfix"></div>'
				contenido+= '</div>'

			}

		}

		wrapper.html(contenido)

		localStorage.setItem('productos',JSON.stringify(productos))
	}


	app.createProducts = function(){
		var productos = [
		
		],
		wrapper = $('.masVendidos'),
		contenido = ''

		for(var i = 0; i < productos.length; i++){

			if(productos[i].stock > 0){

				contenido+= '<div class="coin-wrapper">'
				contenido+= '		<img src="'+productos[i].img+'" alt="'+productos[i].name+'">'
				contenido+= '		<span class="large-12 columns product-details">'
				contenido+= '			<h3>'+productos[i].name+' <span class="price">$ '+productos[i].price+' </span></h3>'
				contenido+= '			<h3>Tenemos: <span class="stock">'+productos[i].stock+'</span></h3>'
				contenido+= '		</span>'
				contenido+= '		<div class="clearfix"></div>'
				contenido+= '</div>'

			}

		}

		wrapper.html(contenido)

		localStorage.setItem('productos',JSON.stringify(productos))
	}

	app.addtoCart = function(id){
		var l = Ladda.create( document.querySelector( '.prod-'+id ) );

		l.start();
		var productos = JSON.parse(localStorage.getItem('productos')),
		producto = _.find(productos,{ 'id' : id }),
		cant = 1
		if(cant <= producto.stock){
			if(undefined != producto){
				if(cant > 0){
					setTimeout(function(){
						var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
						app.searchProd(cart,producto.id,parseInt(cant),producto.name,producto.price,producto.img,producto.stock)
						l.stop();
					},2000)
				}else{
					alert('Solo se permiten cantidades mayores a cero')
				}
			}else{
				alert('Oops! algo malo ocurrió, inténtalo de nuevo más tarde')
			}
		}else{
			alert('No se pueden añadir más de este producto')
		}
	}

	app.searchProd = function(cart,id,cant,name,price,img,available){
		//si le pasamos un valor negativo a la cantidad, se descuenta del carrito
		var curProd = _.find(cart.items, { 'id': id })

		if(undefined != curProd && curProd != null){
			//ya existe el producto, aÃ±adimos uno mÃ¡s a su cantidad
			if(curProd.cant < available){
				curProd.cant = parseInt(curProd.cant + cant)
			}else{
				alert('No se pueden añadir más de este producto')
			}
			
		}else{
			//sino existe lo agregamos al carrito
			var prod = {
				id : id,
				cant : cant,
				name : name,
				price : price,
				img : img,
				available : available
			}
			cart.items.push(prod)
			
		}
		localStorage.setItem('cart',JSON.stringify(cart))
		app.init()
		app.getProducts()
		app.updatePayForm()
	}

	app.getProducts = function(){
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []},
		msg = '',
		wrapper = $('.cart'),
		total = 0
		wrapper.html('')

		if(undefined == cart || null == cart || cart == '' || cart.items.length == 0){
			
			$('.cart').css('left','-400%')
		}else{
			var items = '';
			_.forEach(cart.items, function(n, key) {
	
			   total = total  + (n.cant * n.price)
			   items += '<li>'
			   items += '<img src="'+n.img+'" />'
			   items += '<h3 class="title">'+n.name+'<br><span class="price">'+n.cant+' x $ '+n.price+'</span> <button onclick="app.deleteProd('+n.id+')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
			   items += '</li>'
			});

			//agregar el total al carrito
			items += '<li id="total">Total : $ '+total+' <div id="submitForm"></div></li>'
			wrapper.html(items)
			$('.cart').css('left','-500%')
		}
	}

	app.updateItem = function(id,available){
		//resta uno a la cantidad del carrito de compras
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ,
		curProd = _.find(cart.items, { 'id': id })
			//actualizar el carrito
			curProd.cant = curProd.cant - 1;
			//validar que la cantidad no sea menor a 0
			if(curProd.cant > 0){
				localStorage.setItem('cart',JSON.stringify(cart))
				app.init()
				app.getProducts()
				app.updatePayForm()
			}else{
				app.deleteProd(id,true)
			}
	}

	app.delete = function(id){
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		var curProd = _.find(cart.items, { 'id': id })
		_.remove(cart.items, curProd);
		localStorage.setItem('cart',JSON.stringify(cart))
		app.init()
		app.getProducts()
		app.updatePayForm()
	}

	app.deleteProd = function(id,remove){
		if(undefined != id && id > 0){
			
			if(remove == true){
				app.delete(id)
			}else{
				var conf = confirm('¿Deseas eliminar este producto?')
				if(conf){
					app.delete(id)
				}
			}
			
		}
	}

	app.updatePayForm = function(){
		//eso va a generar un formulario dinamico para paypal
		//con los productos y sus precios
		var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
		var statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="'+business_paypal+'">',
		dinamic = '',
		wrapper = $('#submitForm')

		wrapper.html('')
		
		if(undefined != cart && null != cart && cart != ''){
			var i = 1;
			_.forEach(cart.items, function(prod, key) {
					dinamic += '<input type="hidden" name="item_name_'+i+'" value="'+prod.name+'">'
					dinamic += '<input type="hidden" name="amount_'+i+'" value="'+prod.price+'">'
					dinamic += '<input type="hidden" name="item_number_'+i+'" value="'+prod.id+'" />'
					dinamic += '<input type="hidden" name="quantity_'+i+'" value="'+prod.cant+'" />'
				i++;
			})

			statics += dinamic + '<button type="submit" class="pay">Pagar &nbsp;<i class="ion-chevron-right"></i></button></form>'

			wrapper.html(statics)
		}
	}

	$(document).ready(function(){
		app.init()
		app.getProducts()
		app.updatePayForm()
		app.createProducts()
		app.masVendidos()
	})

})(jQuery)