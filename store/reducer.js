import { ADD_EL } from "./types"
import { CHANGE_OK } from "./types"
import {DELETE_EL} from "./types"
import {CHANGE_QTY,INC_QTY,DEC_QTY,CHANGE_SOMME, CHANGE_POINT, INIT} from "./types"


const initialState = {
    Somme:0,
    panier:[

    ],
    
        poissons: [{id:"1",Nom:"Fillet Bar de ligne",prix:7,ok:false,Type:'poissons'},
        {id:"2",Nom:"Bar de ligne portion",prix:10,ok:false,Type:'poissons'},
        {id:"3",Nom:"Aile de raie",prix:10,ok:false,Type:'poissons'},
        {id:"4",Nom:"Lieu jaune de ligne",prix:12,ok:false,Type:'poissons'},
        {id:"5",Nom:"Fillet Julienne",prix:19,ok:false,Type:'poissons'},
        {id:"6",Nom:"Bar de ligne",prix:30,ok:false,Type:'poissons'},
        {id:"7",Nom:"Moules de peche",prix:7,ok:false,Type:'coquillages'},
        {id:"8",Nom:"Bouquets cuits",prix:8,ok:false,Type:'coquillages'},
        {id:"9",Nom:"Moules de peche",prix:7,ok:false,Type:'coquillages'},
        {id:"10",Nom:"Huitres N2 St Vaast",prix:9.5,ok:false,Type:'coquillages'},
        {id:"11",Nom:"Huitres N2 OR St Vaast",prix:12,ok:false,Type:'coquillages'},
        {id:"12",Nom:"Araignees",prix:7,ok:false,Type:'araignee'},
        {id:"13",Nom:"Moules de peche",prix:7,ok:false,Type:'promo'},
        
        



        ],
    
        point:{},

    

    
}
export const cartReducer = (state = initialState, action) => {

switch (action.type){

    case ADD_EL:{
        return {
            ...state,
            panier: [...state.panier, {id:action.data.id,Nom:action.data.Nom,qty:1,prix:action.data.prix}]
        }
    }

    case CHANGE_OK:{
        return {
            ...state, 
            poissons : state.poissons.map((item)=>{
                
                if(item.id != action.data.id){
                    
                    return item;
                }else{
                    
                    return {id:item.id,Nom:item.Nom,prix:item.prix,ok:!item.ok,Type:item.Type}
                    
                }
                
            }
            
            )
        };
    }
    case CHANGE_QTY:{
        return{
            ...state,
            panier: state.panier.map((item)=>{
                if(item.id != action.data.id){
                    return item;
                }else{
                    return{id:item.id,Nom:item.Nom,qty:action.data.qty,prix:item.prix}
                }
            })
        }
    }
    case INC_QTY:{
        return{
            ...state,
            panier: state.panier.map((item)=>{
                if(item.id != action.data.id){
                    return item;
                }else{
                    return{id:item.id,Nom:item.Nom,qty:item.qty+1,prix:item.prix}
                }
            })
        }
    }
    case DEC_QTY:{
        return{
            ...state,
            panier: state.panier.map((item)=>{
                if(item.id != action.data.id){
                    return item;
                }else{
                    return{id:item.id,Nom:item.Nom,qty:item.qty-1,prix:item.prix}
                }
            })
        }
    }

    case DELETE_EL:{
        return{
                    ...state,
                    panier: state.panier.filter(item => item.id != action.data.id)
        }
    }

    case CHANGE_SOMME:{
        return{
            ...state,Somme:action.data
        }
    }

    case CHANGE_POINT:{
        return{
            ...state,
            point:{Nom:action.data.Nom,t:action.data.t}
        }
    }
    
    case INIT:{
        return{...state,
            panier:initialState.panier,
            poissons:initialState.poissons,
            point:initialState.point
           
        
        }
    }

    default:
    return state;

}
}

export default cartReducer;