

const obj={

    nombre: 'angel',
    apellido: 'salazar',
    edad:       40,
    altura:    175,
    isDeveloper: true 


}



let edad= obj.edad;
console.log(edad)



const friendDats=[
    
{nombre:'gabriel',apellido:'camacho', edad:30, altura:168, isDeveloper: false},
{nombre:'america',apellido:'mendoza', edad:28, altura:168, isDeveloper: true}


]





console.log(friendDats)

const lis=[...friendDats, obj]// para poder trabajar con cada elemento de un array de objetos como si fuera un objeto independiente 
                            // necesitamos ocupar la propagacion, de esta manera podemos unir varios objetos en un solo array de objetos nuevo 
                            

console.log(lis)

//const lista= [ Object.entries(friendDats), Object.entries(obj)]
//console.log(lista)




lis.sort((a,b)=>b.edad - a.edad)

console.log(lis)

