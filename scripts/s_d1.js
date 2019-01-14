var data = new Date();
var day = data.getDate();
var mouns = data.getMonth();
var year = data.getFullYear();
function mounsNow(){
    switch (mouns){
        case 0:{
            return "январья";
        }
        case 1:{
            return "февралья";
        }
        case 2:{
            return "марта";
        }
        case 3:{
            return "апрелья";
        }
        case 4:{
            return "мая";
        }
        case 5:{
            return "июня";
        }
        case 6:{
            return "июля";
        }
        case 7:{
            return "августа";
        }
        case 8:{
            return "сентября";
        }
        case 9:{
            return "октября";
        }
        case 10:{
            return "ноября";
        }
        case 11:{
            return "декабря";
        }
    }
}

var docInfo = {
 
    info: {
     title:'Тестовый документ PDF',
     author:'ТрансРивер',
     subject:'Theme',
     keywords:'Ключевые слова'
    },
    
    pageSize:'A4',
    pageOrientation:'portrait',
    pageMargins:[52,5,52,5],
    
    content: [ 
    {
        text:'ДОГОВОР НА ОКАЗАНИЕ УСЛУГ \nПО МЕХАНИЗИРОВАННОЙ УБОРКЕ ТЕРРИТОРИИ №  316МУ',
        fontSize:13,
        alignment:'center',
        margin:[0,0, 25,0],
     },

     {
        alignment: 'justify',
        columns: [
            {
                text: `г. Витебск`,
            },
            {
                text: `  «${day}» ${mounsNow()} ${year} года`, alignment:'right',
            }
        ]
    },
    {
        alignment: 'justify',
        text:[            
            {text:`ОДО "ТрансРивер"`, bold:true},
            `, именуемое в дальнейшем Исполнитель, в лице директора Петрова Александра Олеговича, действующего на основании Устава, с одной стороны, и`
        ]
    }
    ],
}
var creat = document.getElementById("creat");
creat.addEventListener('click',()=>{
  pdfMake.createPdf(docInfo).open({}, window);  
});
