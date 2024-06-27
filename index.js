$('document').ready(function(){
	
	$('#dayBtn').on('click',function(){
		var day = $('#dayInput').val()
		console.log(day)
		if(day != "2007-06-15"){
			$('#alert1').fadeIn('fast').fadeOut(4000)
		} else {
			$('#loading').fadeOut('fast')
			$('#main').fadeIn('fast')
			$('body').addClass('peach')
			$('#candle').fadeIn('fast')
			$('#heartLoad').delay(5000).fadeOut('slow').delay(1000).promise().done(()=>{
				$('#play').fadeIn('slow');
			})
		};
	})
	let isClick = false;
	$('#play').click(function(){
		if(!isClick){
			const time = 1000;
			$('.song')[0].play()
			$('#play').delay(1000).fadeOut('slow').delay(2000).promise().done(()=>{
				$('#message1').show().promise().done(()=>{
					$('#p1').fadeIn('slow').delay(time).fadeOut('slow').promise().done(()=>{
						$('#p2').fadeIn('slow').delay(time).fadeOut('slow').promise().done(()=>{
							$('#p3').fadeIn('slow').delay(time).fadeOut('slow').promise().done(()=>{
								$('#p4').fadeIn('slow').delay(time).fadeOut('slow').promise().done(()=>{
									$('#p5').fadeIn('slow').delay(time).fadeOut('slow').promise().done(()=>{
										$('#p6').fadeIn('slow').delay(time).fadeOut('slow').promise().done(()=>{
											$('#p7').fadeIn('slow').delay(time).fadeOut('slow').promise().done(()=>{
												$('#p8').fadeIn('slow').delay(2000).promise().done(()=>{
													$('#cake').slideDown(2000).delay(4000).promise().done(()=>{
														$('#continue').fadeIn('fast')
													})
												})
											});
										});
									});
								});
							});
						});
					});
				})
			})
		}
		isClick = true;
	})

	$('#continue').click(()=>{
		const OnlyHeart = `	
			    Ánh     Ánh    
			 Ánh    Ánh    Ánh 
			Ánh             Ánh
			Ánh             Ánh
			Ánh             Ánh
			 Ánh           Ánh 
			  Ánh         Ánh  
			   Ánh       Ánh
			     Ánh   Ánh	  
			        Ánh`

		console.log(OnlyHeart)
		$('#cake').fadeOut('slow')
		$('#p8').fadeOut('slow')
		$('#continue').fadeOut('slow').delay(1000).promise().done(()=>{
			$('#heart').show(1).delay(2000).promise().done(()=>{
				$('#picwhite').addClass('fadeScale').delay(5000).promise().done(()=>{
					$('#img').addClass('heartBeat')
				})
			})
			
		})
		
	})


})