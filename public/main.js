
var trash = document.getElementsByClassName("fa-trash");





Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        
        fetch('dailyWords', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: element.id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
