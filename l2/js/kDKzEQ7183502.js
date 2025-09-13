
      function atomiShowItems({items}) {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      }
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
    var scrollElement = document.getElementById("potes");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
        } catch (error) {
          console.log(error);
        }
      }
    
      (function() {
        try {
          const replaceItems = ["hoje-ext", "amanha-ext", "hoje", "ano", "amanha", "hora"]
          replaceItems.forEach(rI => {
            let innerData = ""
            
            
            
    if(rI == "hoje"){
      innerData = atomiFormatDate({slated: true})
    }
  
            
            
            
            document.querySelectorAll('.atomicat-'+rI).forEach(el => {
              el.innerText = innerData
            });
          });
        } catch (error) {
          console.log(error);
        }
      })();
    
    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const userLocale = navigator.language || 'en-US';
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const formatter = new Intl.DateTimeFormat(userLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });

          return formatter.format(slatedDate);

          // const day = slatedDate.getDate().toString().padStart(2, "0");
          // const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          // const year = slatedDate.getFullYear();
          // return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(userLocale, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };
    (function() {
          try {
              const clickeventList = [{"compKey":"ba41359","misc":{"type":"button"}},{"compKey":"6d01dfe","misc":{"type":"button"}},{"compKey":"eec5cd7","misc":{"type":"button"}},{"compKey":"7f2e028","misc":{"type":"text"}},{"compKey":"8fe3c9e","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();(function() {
          try {
              const animationList = [{"key":"9991ddd","type":"text"},{"key":"55b4809","type":"text"},{"key":"387da44","type":"text"}];
    
              animationList.forEach((animationItem, index) => {
                const { key, type } = animationItem;
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('a-e-a-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('a-e-a-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              return error;
          }
      })();
          (function() {
            try {
              var vturbvideoId = "68bed5193cbf2cf25bf745b3";
              var compKey = "e35222d";
              const twr = false;
              var SECONDS_TO_DISPLAY = 1820;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed1820';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                startWatchVideoProgress();
              }
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => (instance?.options?.id || instance?.analytics?.player?.options?.id) === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              function startWatchVideoProgress() {
                
                console.log("vturbvideoId", vturbvideoId);
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                console.log(smartplayer.instances);
                var videoInstance = getVideoInstance();
                videoInstance.on('timeupdate', () => {
                  if (elsDisplayed || videoInstance.smartAutoPlay) return;
                  console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                  if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                  showHiddenElements();
                });
              };
            } catch (error) {
              console.log(error);
            }
            
          })();
        