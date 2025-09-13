
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
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
        (function() {
          try {
            const chatbotList = [{"compKey":"c742a0a","misc":{"type":"chatbot","items":[{"chat":"Day 7 and my sugar dropped to 97. I honestly cried when I saw the meter. Thank you, Dr. Angela.","bg":"#3b82f6","user":"Linda M."},{"bg":"#3b82f6","chat":"My dad has been on insulin for 12 years. After 2 weeks on this, his doctor said ‘I don’t know what you’re doing, but keep doing it.","user":"Carlos Reyes\t"},{"chat":"Didn’t change my diet, didn’t start exercising. Just started this recipe. My energy is coming back. This is real.","user":"Deborah W.\t","bg":"#3b82f6"},{"bg":"#3b82f6","user":"Frank T.\t","chat":"Was skeptical but bought the 6-bottle kit. One week in, I already feel like a new person.","time":"46:00"},{"bg":"#3b82f6","chat":"I’ve seen a ton of diabetes ‘cures’ online. This one hit different. Feels legit for the first time.","user":"Samantha R.\t"},{"chat":"Okay… I usually skip these long videos. But I watched every second of this. Something about her story just felt real.","bg":"#3b82f6","user":"Ben H.\t"},{"bg":"#3b82f6","user":"Amy Delgado","chat":"Not gonna lie — I thought this was a scam at first. But I just made it. It’s worth a shot. I just reversed my diabetes in less than 7 days..."}],"chatType":"youtube"}}];
            const language = "en" || "pt";
            const langObj = {
              en: "You",
              es: "Tú",
              fr: "Vous",
              it: "Tu",
              pt: "Você",
            }
            let currentUser = langObj[language];
            function convertTimeToMilliseconds(time) {
                const [minutes, seconds] = time.split(":").map(Number);
                return (minutes * 60 + seconds) * 1000;
            }

            chatbotList?.forEach(chatbot => {
                const chatbotEle = document.querySelector(`.a-ch-${chatbot?.compKey}`);
                const comments = chatbotEle?.querySelector(".comments");
                const sendBtn = chatbotEle?.querySelector(".btn-send");
                const textareaEle = chatbotEle?.querySelector(".send-message");
                const items = chatbot?.misc?.items;
                const messageCount = chatbotEle?.querySelector(".msg-count");
                const textareaPlaceholder = textareaEle?.placeholder;
                const filter = chatbot?.misc?.filter || [];

                const addNewChat = (e) => {
                    e.preventDefault();
                    let filterOutValue = textareaEle?.value?.trim();      
                    filter?.forEach(item => {
                      filterOutValue = filterOutValue?.replace(item, "");
                    }); 
                    if(!filterOutValue?.trim()) return;
                    const addChat = `<div class="comment"><div class="user-id"><div class="user-icon"><span>${currentUser?.[0]}</span></div></div><span class="comment-user">${currentUser}</span><span class="comment-text">${filterOutValue}</span></div>`;
                    comments?.insertAdjacentHTML("beforeend", addChat);
                    textareaEle.value = "";
                    messageCount.innerHTML = "0/200"; 
                    comments.scroll({
                      top: comments.scrollHeight,
                      behavior: 'smooth'
                    });
  
                };

                textareaEle?.addEventListener("keyup", (e) => {
                  if(textareaEle?.value?.length > 200) {
                    textareaEle.value = textareaEle?.value?.slice(0, 200);
                  }
                  if(e?.key?.toLowerCase() === "enter") {
                     addNewChat(e);
                  } else {
                    messageCount.innerHTML = `${textareaEle?.value?.length}/200`; 
                  }
                })
                sendBtn?.addEventListener("click", (e) => {
                  addNewChat(e);
                })
                items?.forEach(item => {
                    const newChat = `<div class="comment"><div class="user-id" style="background:${item?.bg}"><div class="user-icon"><span>${item?.user?.[0] || "U"}</span></div></div><div><span class="comment-user">${item?.user || "User1234"}</span><span class="comment-text">${item?.chat || "Wow!"}</span></div></div>`;

                    const timeout = convertTimeToMilliseconds(item?.time || "00:00"); 
                    setTimeout(() => {
                        comments.insertAdjacentHTML("beforeend", newChat);
                        comments.scroll({
                          top: comments.scrollHeight,
                          behavior: 'smooth'
                        });
                    }, timeout);
                })
               
            })

          } catch (error) {
            return error;
          }
        })();(function() {
          try {
              const clickeventList = [{"compKey":"e4aaa81","misc":{"type":"button"}},{"compKey":"e8030e0","misc":{"type":"button"}},{"compKey":"70f290d","misc":{"type":"button"}},{"compKey":"7ee393a","misc":{"type":"text"}},{"compKey":"6344611","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();(function() {
          try {
              const animationList = [{"key":"8a99c29","type":"text"},{"key":"3daf699","type":"text"},{"key":"eff11d5","type":"text"}];
    
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
              var vturbvideoId = "68bf58fa1e34e7c2f54f3a11";
              var compKey = "100f722";
              const twr = false;
              var SECONDS_TO_DISPLAY = 2791;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed2791';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => (instance?.options?.id || instance?.analytics?.player?.options?.id) === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              window.startWatchVideoProgress = function startWatchVideoProgress(reAttempts) {
                if (reAttempts) {
                  attempts = reAttempts;
                }
                
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
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                window.startWatchVideoProgress();
              }
            } catch (error) {
              console.log(error);
            }
            
          })();
        