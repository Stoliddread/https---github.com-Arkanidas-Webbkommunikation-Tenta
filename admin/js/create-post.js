let title = document.getElementById("createTitle")
let author = document.getElementById("createAuthor")
let textArea = document.getElementById("createText")
let createForm = document.getElementById("createForm")



createForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    const form = e.target

    let serializeForm = function (form) {
  
      var obj = {};
      var formData = new FormData(form);
  
  
      for (var key of formData.keys()) {
          let inputData = formData.getAll(key);
  
          if (inputData.length > 1) {
              obj[key] = inputData;
          } else {
              obj[key] = inputData[0];
          }
      }
  
      return obj;
  };
  let formDataObjekt = serializeForm(form);
  
      let titles = title
      let authors = author
      let texts = textArea
      let selection1 = document.getElementById('tags')
  
    const blogpost = {
  
          title: titles.value,
          author: authors.value,
          content: texts.value,
         tags: selection1.value
  
      }
  
      try {
          await fetch('https://blog-api-assignment.up.railway.app/posts', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(blogpost),
  
          })
  
         location.replace('index.html')
      } catch (error) {
          console.log(error)
      }
  })


// let serializeForm = function (form) {
//     var obj = {};
//     var formData = new FormData(form);
//     // console.log(formData.getAll());

//     for (var key of formData.keys()) {
//         let inputData = formData.getAll(key);

//         if (inputData.length > 1) {
//             obj[key] = inputData;
//         } else {
//             obj[key] = inputData[0];    
//         }
//     }
    
//     // console.log(obj);
//     return obj;
// };
