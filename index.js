let count=0;

document.getElementById('button').addEventListener('click',function(){
    if (count%2==0){
        document.getElementById('button').innerHTML='☆*: .｡. o(≧▽≦)o .｡.:*☆№'
    
    }else{
            document.getElementById('button').innerHTML='╰(*°▽°*)╯'

    }
    count++
})
