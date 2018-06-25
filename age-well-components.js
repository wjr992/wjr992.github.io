AFRAME.registerComponent('play-on-button-click', {
			init: function () {
			
			this.onClick = this.onClick.bind(this);
			},
			play: function () {
			this.el.addEventListener('click', this.onClick);
			},
			pause: function () {
			this.el.removeEventListener('click', this.onClick);
			},
			onClick: function (evt) {
			
			//var video = document.querySelector("#player");
			var video = document.querySelector("#video1");
			if (!video) { return; }
				//video.components.material.material.map.image.play();
				video.play();
				video.playbackRate=1;
			}
		});
		
		AFRAME.registerComponent('pause-on-button-click', {
			init: function () {
			
			this.onClick = this.onClick.bind(this);
			},
			play: function () {
			this.el.addEventListener('click', this.onClick);
			},
			pause: function () {
			this.el.removeEventListener('click', this.onClick);
			},
			onClick: function (evt) {
			//var video = document.querySelector("#player");
			var video = document.querySelector("#video1");
			if (!video) { return; }
				//video.components.material.material.map.image.pause();
				video.pause();
			}
		});
		
		AFRAME.registerComponent('custom_link', {
				schema: {default: ''},

				init: function () {
					var url = this.data;
					this.el.addEventListener('click', function () {
					window.location.href = url;
					});
				}

			}); 