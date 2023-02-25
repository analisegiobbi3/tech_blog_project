async function postHandler(event){
    
    event.preventDefault();
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-text').value.trim();

    const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert(response.statusText);
    }

}

document.querySelector('.new-post-form').addEventListener('submit', postHandler);