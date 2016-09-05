(function(){

	var carimages = document.querySelector('.carimages');

	carimages.addEventListener('click', function(e){


		if(e.target.tagName === 'IMG'){

			var overlay = document.createElement('div');
			overlay.id = 'overlay';
			
			// set some styles

			overlay.style.position = 'absolute';
			overlay.style.top = 0;
			overlay.style.background = 'rgba(0,0,0,0.7)';
			overlay.style.cursor = 'pointer';


			// set dimensions
			overlay.style.width = window.innerWidth + "px";
			overlay.style.height = window.innerHeight + "px";

			//append the overlay to the body

			document.body.appendChild(overlay);

			// get image source
			var imageSrc = e.target.src;



			// create the image

			var popUpImage = document.createElement('img');
			popUpImage.id = 'popimage';
			popUpImage.src = imageSrc;

			// style the image

			popUpImage.style.display = 'block';
			popUpImage.style.width = '50%';
			popUpImage.style.margin = '0 auto';
			popUpImage.style.marginTop = '10%';

			// append the image to the overlay

			overlay.appendChild(popUpImage);

			popUpImage.addEventListener('click', function (){
				if(overlay){
					overlay.parentElement.removeChild(overlay);
				}
			});

			// set image to follow indow scroll

			window.addEventListener('scroll', function(){
				if(overlay){
					overlay.style.top = window.pageYOffset + 'px';
					overlay.style.left = window.pageXOffset + 'px';
				}
			})

			window.addEventListener('resize', function(){

				overlay.style.width = window.innerWidth + 'px';
				overlay.style.height = window.innerHeight + 'px';

			})



		} // check the image is being clicked

	}); // Eventlistner for the div with class of carimages


}()); // load the document first