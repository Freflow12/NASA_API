document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=fh4StTpTgw7vaMraZiD2NIqD5FvMBhsGr513uMxs&date=${choice}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if( data.media_type === 'image') {
            document.querySelector('img').src = data.url 
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url 
        }
        
       
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}