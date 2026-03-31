export const initialStore=()=>{
  return{
    message: null,
  
      personajes: [],

      planetas: [],
      favoritos:[]
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
   

          case 'set_personajes':
      return {
        ...store,
        personajes: action.payload
      };
       case 'set_planetas':
      return {
        ...store,
       planetas: action.payload
      };

 case 'set_favoritos':
      return {
        ...store,
       favoritos: [...store.favoritos, action.payload]
      };
 case 'delete_favorito':
      return {
        ...store,
       favoritos: store.favoritos.filter((item, index) => index !== action.payload)
      };

    default:
      throw Error('Unknown action.');
  }    
}
