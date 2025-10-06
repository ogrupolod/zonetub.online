
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    (function() {
          try {
              const clickeventList = [{"compKey":"26e03c3","misc":{"type":"text"}},{"compKey":"5edf556","misc":{"type":"image"}},{"compKey":"ff877d6","misc":{"type":"text"}},{"compKey":"7892e53","misc":{"type":"image"}},{"compKey":"0ebdc4f","misc":{"type":"image"}},{"compKey":"de93ca2","misc":{"type":"image"}},{"compKey":"1549cca","misc":{"type":"text"}},{"compKey":"2c579df","misc":{"type":"image"}},{"compKey":"7218b7b","misc":{"type":"button"}},{"compKey":"a804427","misc":{"type":"image"}},{"compKey":"aec5b57","misc":{"type":"image"}},{"compKey":"1ff4f32","misc":{"type":"image"}},{"compKey":"3c38d9d","misc":{"type":"text"}},{"compKey":"a104ecd","misc":{"type":"image"}},{"compKey":"3678e5b","misc":{"type":"button"}},{"compKey":"22994d0","misc":{"type":"image"}},{"compKey":"87c5156","misc":{"type":"button"}},{"compKey":"d16f00f","misc":{"type":"text"}},{"compKey":"45805d9","misc":{"type":"text"}},{"compKey":"adee5d3","misc":{"type":"text"}},{"compKey":"45ab131","misc":{"type":"text"}},{"compKey":"da2320d","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();
      (function() {
        try {
          setTimeout(() => {
            let elementsWithDelayClass = document.querySelectorAll(".atomicat-delay");
            if(elementsWithDelayClass){
              elementsWithDelayClass.forEach(element => {
                element.classList.remove("atomicat-delay");
              });
            }
            
    var scrollElement = document.getElementById("potes");
    if (scrollElement) {
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
          }, 1842000);
        } catch (error) {
          console.log(error);
        }
      })();
    