
export function Item({name,isName}){
    
        if(isName){
            return(<li className="Item">{name} ✅</li>)
        } else{
            return(<li>{name}</li>)
        }
}


export default function List(){
    return(
        <div>
            <ul>
                <Item
                    isName ={true}
                    name = 'Space suit'
                />
                <Item
                    isName = {true}
                    name = 'Helmet with a golden leaf'
                />
                <Item
                    isName ={true}
                    name = 'Tahsin hossain'
                />
                <Item
                    isName = {false}
                    name = 'Photo of Tam'
                />
            </ul>
        </div>
    );
}