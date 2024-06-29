$('document').ready(function(){
	var url = "https://onlydayserver.onrender.com/respone";

	$('#dayBtn').on('click',function(){
		var day = $('#dayInput').val()
		console.log(day)
		if(day != "2007-07-01"){
			$('#alert1').fadeIn('fast').fadeOut(4000)
		} else {
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    "content": "Program is starting!!!",
                    "ps": "None"
                }
            }).done(function(ketqua) {
                console.log(ketqua);
            });

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
			const time = 3000;
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
				$('#picwhite').addClass('fadeScale').delay(5500).promise().done(()=>{
					$('#img').addClass('heartBeat').delay(12000).promise().done(()=>{
						$('#main').addClass('blur')
						$('#candle').addClass('blur').delay(2000).promise().done(()=>{
							$('#feedback').fadeIn(2000)
						})	
					})
				})
			})
			
		})
		
	})

	$('#closeBtn').click(()=>{
		$('#feedbackBox').fadeOut('slow').promise().done(()=>{
			$('#feedback').hide(1).promise().done(()=>{
				$('#main').removeClass('blur')
				$('#candle').removeClass('blur')
			})
		})
	})

	var rate = 0;

	$('.s1').on('click', ()=>{
		rate = 5
		$('.s1').css({'color':'hotpink'})
		$('.s2').css({'color':'hotpink'})
		$('.s3').css({'color':'hotpink'})
		$('.s4').css({'color':'hotpink'})
		$('.s5').css({'color':'hotpink'})
	})
	$('.s2').on('click', ()=>{
		rate = 4
		$('.s1').css({'color':'#000'})
		$('.s2').css({'color':'hotpink'})
		$('.s3').css({'color':'hotpink'})
		$('.s4').css({'color':'hotpink'})
		$('.s5').css({'color':'hotpink'})
	})
	$('.s3').on('click', ()=>{
		rate = 3
		$('.s1').css({'color':'#000'})
		$('.s2').css({'color':'#000'})
		$('.s3').css({'color':'hotpink'})
		$('.s4').css({'color':'hotpink'})
		$('.s5').css({'color':'hotpink'})
	})
	$('.s4').on('click', ()=>{
		rate = 2
		$('.s1').css({'color':'#000'})
		$('.s2').css({'color':'#000'})
		$('.s3').css({'color':'#000'})
		$('.s4').css({'color':'hotpink'})
		$('.s5').css({'color':'hotpink'})
	})
	$('.s5').on('click', ()=>{
		rate = 1
		$('.s1').css({'color':'#000'})
		$('.s2').css({'color':'#000'})
		$('.s3').css({'color':'#000'})
		$('.s4').css({'color':'#000'})
		$('.s5').css({'color':'hotpink'})
	})

	$('#resBtn').click(()=>{
		$('#feedbackBox').fadeOut('slow').promise().done(()=>{
			$('#feedback').hide(1).promise().done(()=>{
				$('#main').removeClass('blur')
				$('#candle').removeClass('blur')
			})
		})

		let resContent = $('#resInput').val();
		let ps = 'rated '+rate;
		$.ajax({
            url: url,
            type: 'POST',
            data: {
                "content": resContent,
                "ps": ps,
            }
        }).done(function(ketqua) {
            console.log(ketqua);
        });
	})


})