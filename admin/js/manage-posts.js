let table = document.getElementById("postTable")

async function getBlogPosts(){
    let response = await fetch( "https://blog-api-assignment.up.railway.app/posts")
    let object = await response.json();
    for(objects of object){
        let blogDate = new Date(objects.date)
        table.innerHTML += `
     <tr>
     <td>${objects.title}</td>
     <td>${objects.author}</td>
     <td>${objects.tags}</td>
     <td> ${blogDate.getFullYear()}-${blogDate.getMonth() + 1}-${blogDate.getDate()}</td>
     <td><a href="#">Update</a> <br><a href="#" data-id="${objects._id}"class="deleteBtn">Delete</a></td>
     </tr>`
     let deleteLinks = document.querySelectorAll(".deleteBtn")
     for(let link of deleteLinks){
        link.addEventListener("click", async function deletePost(e){
            console.log("delete pressed")
            e.preventDefault();
            console.log(e.target.dataset.id)
            let response = await fetch(`https://blog-api-assignment.up.railway.app/posts/` + e.target.dataset.id, {
                method: "DELETE"
            })
           
            e.target.parentNode.parentNode.remove();
        })
     }
    
    }

    
}
getBlogPosts();

