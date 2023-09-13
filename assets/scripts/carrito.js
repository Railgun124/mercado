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
				img : 'assets/img/p29.jpg',
				name : 'Plumon Sharpi',
				price : 199.00,
				desc : 'Color naranja',
				stock : 5
			},
			{
				id : 2,
				name : 'Plumon Sharpi',
				img : 'assets/img/p30.jpg',
				price : 199.00,
				desc : 'Color Verde',
				stock : 2
			},
			{
				id : 3,
				name : 'Plumon Sharpi',
				img : 'assets/img/p31.jpg',
				price : 199.00,
				desc : 'Color Negro punta fina',
				stock : 1
			},
			{
				id : 4,
				name : 'Libreta Kinder',
				img : 'assets/img/p1.jpeg',
				price : 25.00,
				desc : 'Libreta Para kinder Doble raya 100 hojas',
				stock : 4
			},
			{
				id : 5,
				name : 'Colores JoyWish',
				img : 'assets/img/p2.webp',
				price : 280.00,
				desc : 'Caja con 72 colores para dibujo profesional',
				stock : 100
			},
			{
				id : 6,
				name : 'Lapiz de detallado',
				img : 'assets/img/p3.webp',
				price : 80.00,
				desc : 'Lapiz para detallado profesional negro o blanco Caja de 12 piezas',
				stock : 4
			},
			{
				id : 7,
				name : 'Estuche Para colores',
				img : 'assets/img/p4.webp',
				price : 29.00,
				desc : 'Estuche para guardar colores en color gris claro y gris obscuro',
				stock : 100
			},
			{
				id : 8,
				name : 'Set de Plumones',
				img : 'assets/img/p5.jpg',
				price : 79.99,
				desc : 'Plumones alternative con 8 piezas de doble cara 16 colores en total',
				stock : 25
			},
			{
				id : 9,
				name : 'Plumon profesional',
				img : 'assets/img/p6.jpg',
				price : 80.00,
				desc : 'Plumones de punta fina marca stabilo con 18 piezas',
				stock : 90
			},
			{
				id : 10,
				name : 'Marcador pintarron',
				img : 'assets/img/p9.jpeg',
				price : 49.00,
				desc : 'Marca bic 4 colores',
				stock : 89
			},
			{
				id : 11,
				name : 'Libreta rayada',
				img : 'assets/img/p10.jpeg',
				price : 20.00,
				desc : 'Tamaño 50 x 50 pasta de carton',
				stock : 29
			},
			{
				id : 12,
				name : 'Borrador de silicon',
				img : 'assets/img/p11.png',
				price : 29.00,
				desc : 'Borrador de silicon con aroma y figura frutal',
				stock : 78
			},
			{
				id : 13,
				name : 'Pluma Bic Dura +',
				img : 'assets/img/p15.jpg',
				price : 50.00,
				desc : 'Caja con 12 piezas tinta azul',
				stock : 23
			},
			{
				id : 14,
				name : 'Pluma bic Pre.suav',
				img : 'assets/img/p16.jpg',
				price : 60.00,
				desc : 'Caja 12 piezas tinta turquesa',
				stock : 40
			},
			{
				id : 15,
				name : 'Pluma bic Intenso',
				img : 'assets/img/p17.jpg',
				price : 65.00,
				desc : 'Caja 12 piezas tinta roja',
				stock : 54
			},
			{
				id : 16,
				name : 'Pluma Bic Glide Bolt',
				img : 'assets/img/p18.jpg',
				price : 45.00,
				desc : 'Caja con 2 piezas tinta negra',
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
				name : 'Marcatextos Bic',
				img : 'assets/img/p24.jpg',
				price : 40.00,
				desc : 'Caja 12 piezas color amarillo',
				stock : 49
			},
			{
				id : 19,
				name : 'Plumones Sharpie',
				img : 'assets/img/p21.jpg',
				price : 100.00,
				desc : 'Caja 22 piezas colores diferentes',
				stock : 23
			},
			{
				id : 20,
				name : 'Plumones Bic',
				img : 'assets/img/p22.jpg',
				price : 72.00,
				desc : 'Caja con 10 plumones puntas finas',
				stock : 89
			},
			{
				id : 21,
				name : 'Marcatextos arteza',
				img : 'assets/img/p23.jpg',
				price : 49.00,
				desc : 'Caja 64 piezas color amarillo',
				stock : 89
			},
			{
				id : 22,
				name : 'Cinta Transparente',
				img : 'assets/img/p41.jpg',
				price : 350.00,
				desc : 'Caja con 12 paquetes de 8 piiezas',
				stock : 49
			},
			{
				id : 23,
				name : 'Hojas blancas',
				img : 'assets/img/p42.jpg',
				price : 250.00,
				desc : 'Caja con 5 paquetes de 500 hojas',
				stock : 23
			},
			{
				id : 24,
				name : 'Toner para impresora',
				img : 'assets/img/p43.jpg',
				price : 49.00,
				desc : 'Caja con dos cartuchos',
				stock : 23
			},
			{
				id : 25,
				name : 'Regla 20 centimetros',
				img : 'assets/img/p44.jpeg',
				price : 89.00,
				desc : 'Paquete con 5 reglas de metal',
				stock : 3
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
				name : 'Stiky notes',
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