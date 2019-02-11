document.addEventListener('DOMContentLoaded', start);

class Logo {
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;
    } 

    init() {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', this.imgUrl);
        this.html = newImg;

        this.render();

        let page = document.querySelector('body');
        page.style.background = 'black';
    }
  
    render() {
        this.html.style.position = 'fixed';
        this.html.style.top = this.top + 'px';  
        this.html.style.left = this.left +'px';
        this.html.style.width = this.width + 'px';
       
        let body = document.body;
        body.appendChild(this.html);
    }

    moveUp() {
        this.top -= 20;
        console.log('вверх');
        this.render();
    }
    moveDown() {
        this.top += 20;
        console.log('вниз');
        this.render();
    }
    moveLeft() {
        this.left -= 20;
        console.log('влево');
        this.render();
    }
    moveRight() {
        this.left += 20;
        console.log('вправо');
        this.render();
    }
}

function start(){
    const imgUrl = 'https://bit.ly/2tcDito';
    var mfLogotip = new Logo(imgUrl);
    console.log(mfLogotip);
    
    // запускаем наше микро-приложение
    mfLogotip.init();
    
    mfLogotip.moveRight();
    mfLogotip.moveRight();
    mfLogotip.moveRight();
    mfLogotip.moveRight();
    mfLogotip.moveDown();
    mfLogotip.moveDown();
    mfLogotip.moveDown();
    mfLogotip.moveDown();

    // something else, чтобы всё работало
    mfLogotip.moveUp();
    mfLogotip.moveLeft();
    
    var body = document.body;
    body.addEventListener('keydown', function(e){
        switch(e.keyCode){      
            case 37:  // если нажата клавиша влево
                mfLogotip.moveLeft();
                break;
            case 38:   // если нажата клавиша вверх
                mfLogotip.moveUp();
                break;
            case 39:   // если нажата клавиша вправо
                mfLogotip.moveRight();
                break;
            case 40:   // если нажата клавиша вниз
                mfLogotip.moveDown();
                break;
            }
        }
    );
}
