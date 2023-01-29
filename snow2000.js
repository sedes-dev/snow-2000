(function() {
  /*
    SNOW 2000 - MADE BY░░░░░░░░░░░░░░░
    ░▄▀▀▒██▀░█▀▄▒██▀░▄▀▀░░░█▀▄▒██▀░█▒█
    ▒▄██░█▄▄▒█▄▀░█▄▄▒▄██░▄▒█▄▀░█▄▄░▀▄▀
    ░░░░░░░░░░░░░░░░░https://sedes.dev
  */

  var snowBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAL5JREFUOE+9lVsOhDAIRcsCdbHjAjGQQihe7Eym2i8FOTyL1MaztdaOJJNXkcupdC6nYLwx84eI9mSocvmu0kW5AadGd8CoE6DDLNoUSeUM2nmEArPUUjQIOMB6AFrjWEMtPoC6IzMsHGuCGQihsSl3sAp4gYIxQh0fIrQ5G2z7GBEzc6+rPoeaZV9aw0u3UETfyMTRI8B4tZakjLKZlgFcw3fGZtlg69isunrPLIfZzvtlfVmXly5Yh/77CzgB44vdSQAzkPUAAAAASUVORK5CYII='

  function createSnowFlake(startingPosX, wrapperHeight) {
    var randomStartingPosY = Math.round(-10 + Math.random() * 20);
    var posX = startingPosX;
    var posY = randomStartingPosY;
    var size = Math.round(10 + Math.random() * 10);
    var deadPosY = wrapperHeight + Math.round(0 + Math.random() * 50);

    var rangeY = [
      -Math.round(3 + Math.random() * 7),
      Math.round(3 + Math.random() * 7)
    ];

    var modY = 0;
    var direction = Math.random() > 0.5 ? 1 : -1;

    var snowFlake = document.createElement('div');

    snowFlake.style.width = size + 'px';
    snowFlake.style.height = size + 'px';
    snowFlake.style.position = 'absolute';
    snowFlake.style.top = posY + 'px';
    snowFlake.style.left = posX + 'px';
    snowFlake.style.backgroundImage = 'url(' + snowBase64 + ')';
    snowFlake.style.backgroundSize = size + 'px ' + size + 'px';
    
    var updateSpeed = Math.round(100 + Math.random() * 300);
    var update = setInterval(function() {
      if (document.hidden) return;
      
      posY = posY + 5;
      
      if (posY > deadPosY) {
        clearInterval(update);
        snowFlake.remove();
      } else {
        snowFlake.style.top = posY + 'px';
        
        if (modY <= rangeY[0] || modY >= rangeY[1]) {
          direction = -direction;
        }

        modY = modY + direction;

        snowFlake.style.left = (posX + modY) + 'px';
      }
    }, updateSpeed)

    return snowFlake;
  }

  var wrapperHeight = window.innerHeight / 4;
  wrapperHeight = wrapperHeight > 400 ? 400 : (wrapperHeight < 200 ? 200 : wrapperHeight);

  var wrapper = document.createElement('div')
  wrapper.style.position = 'absolute';
  wrapper.style.width = '100%';
  wrapper.style.height = wrapperHeight + 'px';
  wrapper.style.top = 0;
  wrapper.style.left = 0;
  wrapper.classList.add('snow-2000-js');

  document.body.appendChild(wrapper);

  setInterval(function() {
    if (document.hidden) return;

    var startingPosX = Math.round(-30 + Math.random() * 10);
    var lineFilled = false;

    while (!lineFilled) {
      var snowFlake = createSnowFlake(startingPosX, wrapperHeight);
      wrapper.appendChild(snowFlake)

      startingPosX = startingPosX + Math.round(10 + Math.random() * 30);

      if (startingPosX > window.innerWidth) {
        lineFilled = true;
      }
    }
  }, 2000)

  window._snow_2000 = function(options) {
    var wrapperHeight = window.innerHeight / 4;
    wrapperHeight = wrapperHeight > 400 ? 400 : (wrapperHeight < 200 ? 200 : wrapperHeight);

    var wrapper = document.createElement('div')
    wrapper.style.position = 'absolute';
    wrapper.style.width = '100%';
    wrapper.style.height = wrapperHeight + 'px';
    wrapper.style.top = 0;
    wrapper.style.left = 0;
    wrapper.classList.add(options && options.className ? options.className : 'snow-2000');

    if (options && typeof options.zIndex === 'number') {
      wrapper.style.zIndex = zIndex;
    }

    document.body.appendChild(wrapper);

    setInterval(function() {
      if (document.hidden) return;

      var startingPosX = Math.round(-30 + Math.random() * 10);
      var lineFilled = false;

      while (!lineFilled) {
        var snowFlake = createSnowFlake(startingPosX, wrapperHeight);
        wrapper.appendChild(snowFlake)

        startingPosX = startingPosX + Math.round(10 + Math.random() * 30);

        if (startingPosX > window.innerWidth) {
          lineFilled = true;
        }
      }
    }, 2000)
  }
})()