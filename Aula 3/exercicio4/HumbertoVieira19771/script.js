function AddImage(){
        var val = document.getElementById('imagename').value,
            src = 'https://placeimg.com/250/150/X' + val + '.png',
            img = document.createElement('img');

        img.src = src;
        document.body.appendChild(img);

}


