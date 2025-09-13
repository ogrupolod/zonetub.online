
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
            const chatbotList = [{"compKey":"b34046c","misc":{"type":"chatbot","items":[{"chat":"I’m on day seven and I can already feel the difference. More energy and motivation, it’s been a long time since I felt this way.","bg":"#3b82f6","user":"Linda M."},{"bg":"#3b82f6","chat":"My family noticed that I’m more cheerful and less tired during the day. I didn’t expect something so simple to make such a big impact.","user":"Carlos Reyes\t"},{"chat":"I didn’t change anything in my routine, I just followed this tip. I’m more focused now and even sleeping better.","user":"Deborah W.\t","bg":"#3b82f6"},{"bg":"#3b82f6","user":"Frank T.\t","chat":"I was skeptical at first, but decided to give it a try. A week later, I can already see a positive change.","time":"46:00"},{"bg":"#3b82f6","chat":"I’ve seen a lot of promises online, but this was the first time I actually felt real results. Totally worth watching till the end.","user":"Samantha R.\t"},{"chat":"I usually skip these long videos, but this one kept my attention. Something about the story felt authentic, and it really worked.","bg":"#3b82f6","user":"Ben H.\t"},{"bg":"#3b82f6","user":"Amy Delgado","chat":"I thought this was just hype, but I gave it a shot and was surprised. Now I’m recommending it to everyone."}],"chatType":"youtube","invert":"","hideChatBox":""}}];
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
              const clickeventList = [{"compKey":"d12d382","misc":{"type":"button"}},{"compKey":"fd1c1dd","misc":{"type":"button"}},{"compKey":"5d276e0","misc":{"type":"button"}},{"compKey":"313267a","misc":{"type":"text"}},{"compKey":"1a1f57a","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();(function() {
          try {
              const animationList = [{"key":"624354d","type":"text"},{"key":"3cd8053","type":"text"},{"key":"76c9f58","type":"text"}];
    
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
              var compKey = "cc54311";
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
        