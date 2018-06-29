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
			
			
		AFRAME.registerComponent('start_animation', {
				schema: {default: ''},

				init: function () {
					
					this.addEventListener('ended',videoEnded,false);
					function videoEnded(e) {
						this.el.emit('startcyl');	
					}
				}

			}); 
			
			
		AFRAME.registerComponent('lock_vision', {
				schema: {
					target: {type: 'string'},
					video: {type: 'string'},
					xpos: {type: 'number', default: 0},
					ypos: {type: 'number', default: 0},
					zpos: {type: 'number', default: 0}
				
				},
				
				init: function () {
					console.log(this.data.target);
					var target = this.data.target;
					var video = document.querySelector('#video1');
					var target_element = document.querySelector('#camera_rig');
					var pos = target_element.getAttribute('position');
					pos.x = this.data.xpos;
					pos.y = this.data.ypos;
					pos.z = this.data.zpos;
					
					video.addEventListener('ended', function () {
						target_element.setAttribute('position', pos);
						document.querySelector('[camera]').removeAttribute('wasd-controls');
					});
				}

			}); 
			
			AFRAME.registerComponent('bounding_box', {
				schema: {
					xpos: {type: 'number', default: 0},
					ypos: {type: 'number', default: 0}
				
				},
				
				init: function () {
					var camera = document.querySelector('[camera]');
					var pos = camera.getAttribute('position');	
				}
				tick: function (time, timeDelta) {
					console.log(pos.x);
					if(pos.x > xpos){
						camera.setAttribute('position', xpos)
					}
					if(pos.z > zpos){
						camera.setAttribute('position', zpos)
					}
					if(pos.x < -xpos){
						camera.setAttribute('position', -xpos)
					}
					if(pos.z > -zpos){
						camera.setAttribute('position', -zpos)
					}
				}	

			}); 
			
			
			
			AFRAME.registerComponent('change_images', {
				schema: {
					image1: {type: 'number', default: 0},
					image2: {type: 'number', default: 0}
				
				},
				
				init: function () {
					var camera = document.querySelector('[camera]');
					var pos = camera.getAttribute('position');	
				}
				tick: function (time, timeDelta) {
					console.log(pos.x);
					if(pos.x > xpos){
						camera.setAttribute('position', xpos)
					}
					if(pos.z > zpos){
						camera.setAttribute('position', zpos)
					}
					if(pos.x < -xpos){
						camera.setAttribute('position', -xpos)
					}
					if(pos.z > -zpos){
						camera.setAttribute('position', -zpos)
					}
				}	

			}); 