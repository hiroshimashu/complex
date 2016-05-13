(function(){
  var btn = document.querySelector('button');
  btn.disabled = true;
  var audio0 = new Audio();
  var audio1 = new Audio();
  var audio2 = new Audio();
  var audio3 = new Audio();
  var audio4 = new Audio();
  var video0 = document.createElement('video');
  var video1 = document.createElement('video');
  var video2 = document.createElement('video');
  var video3 = document.createElement('video');
  var video4 = document.createElement('video');
  video0.style.display = 'none';
  video1.style.display = 'none';
  video2.style.display = 'none';
  video3.style.display = 'none';
  video4.style.display = 'none';
  document.body.appendChild(video0);
  document.body.appendChild(video1);
  document.body.appendChild(video2);
  document.body.appendChild(video3);
  document.body.appendChild(video4);
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  var b4 = document.getElementById('b4');

  b1.style.position = "absolute";
  b1.style.left = canvas.width/4 + "px";
  b1.style.top = canvas.height/4 + "px";

  b2.style.position = "absolute";
  b2.style.left = 3*canvas.width/4 + "px";
  b2.style.top = canvas.height/4 + "px";

  b3.style.position = "absolute";
  b3.style.left = canvas.width/4 + "px";
  b3.style.top = 3*canvas.height/4 + "px";

  b4.style.position = "absolute";
  b4.style.left = 3*canvas.width/4 + "px";
  b4.style.top = 3*canvas.height/4 + "px";

  b1.style.display = "none";
  b2.style.display = "none";
  b3.style.display = "none";
  b4.style.display = "none";

  var togglePlay;
  var changeVideo;
  var playVideo1;
  var playVideo2;
  var playVideo3;
  var playVideo4;

  var info = document.getElementById("info");

  var ua = navigator.userAgent;
  if(/(iPhone|iPod)/.test(ua)) {
      ctx.scale(0.5,0.5);
      var prms1 = new Promise(function(resolve, reject) {
          video0.addEventListener('canplay',function(){
              resolve();
          });
          video0.addEventListener('error',function(){
              reject();
              alert('failed loading video');
          });
      });
      var prms2 = new Promise(function(resolve, reject) {
          audio0.addEventListener('canplay',function(){
              resolve();
          });
          audio0.addEventListener('error',function(){
              reject();
              alert('failed loading audio');
          });
      });
      Promise.all([prms1,prms2]).then(function(){
          btn.disabled = false;
      });
      video0.src = 'video/train.mp4';
      video0.load();
      audio0.src = 'video/train.mp4';
      audio0.load();

      video1.src = 'video/bird.mp4';
      video1.load();
      audio1.src = 'video/bird.mp4';
      audio1.load();

      video2.src = 'video/meat.mp4';
      video2.load();
      audio2.src = 'video/meat.mp4';
      audio2.load();

      video3.src = 'video/rain.mp4';
      video3.load();
      audio3.src = 'video/rain.mp4';
      audio3.load();

      video4.src = 'video/airplane.mp4';
      video4.load();
      audio4.src = 'video/airplane.mp4';
      audio4.load();


      togglePlay = function(){
        if(!audio1.paused){
          audio0.currentTime = audio1.currentTime;
          audio1.pause();
          audio0.play();
        }else if(!audio2.paused){
          audio0.currentTime = audio2.currentTime;
          audio2.pause();
          audio0.play();
        }else if(!audio3.paused){
          audio0.currentTime = audio3.currentTime;
          audio3.pause();
          audio0.play();
        }else{
          audio0.currentTime = audio4.currentTime;
          audio4.pause();
          audio0.play();
        }
        (function loop(){
          video0.currentTime = audio0.currentTime;
          ctx.drawImage(video0, 0, 0, 640, 360);
          if(!audio0.paused){
              requestAnimationFrame( loop );
          }
        })();



        if(!audio0.paused){
          audio0.addEventListener("timeupdate",function(){
            info.innerHTML = Math.floor(video0.currentTime);
            if(audio0.currentTime >= 5){
              b1.style.display = "block";
              b2.style.display = "block";
              b3.style.display = "block";
              b4.style.display = "block";
            }
            if(audio0.currentTime >= 20){
              b1.style.display = "none";
              b2.style.display = "none";
              b3.style.display = "none";
              b4.style.display = "none";
            }
          });
        }


      };

      playVideo1 = function(){
        audio1.currentTime = audio0.currentTime;
        audio1.play();
        audio0.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        (function loop(){
          video1.currentTime = audio1.currentTime;
          ctx.drawImage(video1, 0, 0, 640, 360);
          if(!audio1.paused){
            requestAnimationFrame(loop);
          }
          if(!audio1.paused){
            audio1.addEventListener("timeupdate",function(){
              info.innerHTML = Math.floor(audio1.currentTime);
              b1.style.display = "none";
              b2.style.display = "none";
              b3.style.display = "none";
              b4.style.display = "none";
            });
          }
        })();


      };

      playVideo2 = function(){
        audio2.currentTime = audio0.currentTime;
        audio2.play();
        audio0.pause();
        audio1.pause();
        audio3.pause();
        audio4.pause();
        (function loop(){
          video2.currentTime = audio2.currentTime;
          ctx.drawImage(video2, 0, 0, 640, 360);
          if(!audio2.paused){
            requestAnimationFrame(loop);
          }

          if(!audio2.paused){
            audio2.addEventListener("timeupdate",function(){
              info.innerHTML = Math.floor(audio2.currentTime);
              b1.style.display = "none";
              b2.style.display = "none";
              b3.style.display = "none";
              b4.style.display = "none";
            });
          }
        })();


      };

      playVideo3 = function(){
        audio3.currentTime = audio0.currentTime;
        audio3.play();
        audio0.pause();
        audio1.pause();
        audio2.pause();
        audio4.pause();
        (function loop(){
          video3.currentTime = audio3.currentTime;
          ctx.drawImage(video3, 0, 0, 640, 360);
          if(!audio3.paused){
            requestAnimationFrame(loop);
          }
          if(!audio3.paused){
            audio3.addEventListener("timeupdate",function(){
              info.innerHTML = Math.floor(audio3.currentTime);
              b1.style.display = "none";
              b2.style.display = "none";
              b3.style.display = "none";
              b4.style.display = "none";
            });
          }
        })();

      };

      playVideo4 = function(){
        audio4.currentTime = audio0.currentTime;
        audio4.play();
        audio0.pause();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        (function loop(){
          video4.currentTime = audio4.currentTime;
          ctx.drawImage(video4, 0, 0, 640, 360);
          if(!audio4.paused){
            requestAnimationFrame(loop);
          }
          if(!audio4.paused){
            audio4.addEventListener("timeupdate",function(){
              info.innerHTML = Math.floor(audio4.currentTime);
              b1.style.display = "none";
              b2.style.display = "none";
              b3.style.display = "none";
              b4.style.display = "none";
            });
          }
        })();


      };

  } else {
      canvas.parentNode.insertBefore(video0,canvas);
      canvas.parentNode.insertBefore(video1,canvas);
      canvas.parentNode.insertBefore(video2,canvas);
      canvas.parentNode.insertBefore(video3,canvas);
      canvas.parentNode.insertBefore(video4,canvas);

      video0.style.display = 'block';
      video0.addEventListener('canplay',function(){
          btn.disabled = false;
      });
    video0.src = 'video/train.mp4';
    video0.load();
    video1.src = 'video/bird.mp4';
    video1.load();
    video2.src = 'video/meat.mp4';
    video2.load();
    video3.src = 'video/rain.mp4';
    video3.load();
    video4.src = 'video/airplane.mp4';
    video4.load();

    canvas.parentNode.removeChild(canvas);
    togglePlay = function(){
      video0.style.display = "block";
      video1.style.display = "none";
      video2.style.display = "none";
      video3.style.display = "none";
      video4.style.display = "none";
      if(!video1.paused){
        video0.currentTime = video1.currentTime;
        video0.play();
        video1.pause();
      }else if(!video2.paused){
        video0.currentTime = video2.currentTime;
        video0.play();
        video2.pause();
      }else if(!video3.paused){
        video0.currentTime = video3.currentTime;
        video0.play();
        video3.pause();
      }else{
        video0.currentTime = video4.currentTime;
        video0.play();
        video4.pause();
      }
      if(!video0.paused){
        video0.addEventListener("timeupdate",function(){
          info.innerHTML = Math.floor(video0.currentTime);
          if(video0.currentTime >= 5){
            b1.style.display = "block";
            b2.style.display = "block";
            b3.style.display = "block";
            b4.style.display = "block";
          }
          if(video0.currentTime >= 20){
            b1.style.display = "none";
            b2.style.display = "none";
            b3.style.display = "none";
            b4.style.display = "none";
          }
        });
      }
    };
    playVideo1 = function(){
      video1.style.display = "block";
      video0.style.display = "none";
      video1.currentTime = video0.currentTime;
      video1.play();
      video0.pause();
      if(!video1.paused){
        video1.addEventListener("timeupdate",function(){
          info.innerHTML = Math.floor(video1.currentTime);
          b1.style.display = "none";
          b2.style.display = "none";
          b3.style.display = "none";
          b4.style.display = "none";
        });
      }


    };
    playVideo2 = function(){
      video2.style.display = "block";
      video0.style.display = "none";
      video2.currentTime = video0.currentTime;
      video2.play();
      video0.pause();
      video1.pause();
      video3.pause();
      video4.pause();
      if(!video2.paused){
        video2.addEventListener("timeupdate",function(){
          info.innerHTML = Math.floor(video2.currentTime);
          b1.style.display = "none";
          b2.style.display = "none";
          b3.style.display = "none";
          b4.style.display = "none";
        });
      }


    };
    playVideo3 = function(){
      video3.style.display = "block";
      video0.style.display = "none";
      video3.currentTime = video0.currentTime;
      video3.play();
      video0.pause();
      video1.pause();
      video2.pause();
      video4.pause();
      if(!video3.paused){
        video3.addEventListener("timeupdate",function(){
          info.innerHTML = Math.floor(video3.currentTime);
          b1.style.display = "none";
          b2.style.display = "none";
          b3.style.display = "none";
          b4.style.display = "none";
        });
      }


    };
    playVideo4 = function(){
      video4.style.display = "block";
      video0.style.display = "none";
      video4.currentTime = video0.currentTime;
      video4.play();
      video0.pause();
      video1.pause();
      video2.pause();
      video3.pause();
      if(!video4.paused){
        video4.addEventListener("timeupdate",function(){
          info.innerHTML = Math.floor(video4.currentTime);
          b1.style.display = "none";
          b2.style.display = "none";
          b3.style.display = "none";
          b4.style.display = "none";
        });
      }


    };
  }

  btn.addEventListener('click',togglePlay);
  b1.addEventListener('click', playVideo1);
  b2.addEventListener('click', playVideo2);
  b3.addEventListener('click', playVideo3);
  b4.addEventListener('click', playVideo4);

})();