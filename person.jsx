// information project code

// Gregorio Y. Zara
// https://i.imgur.com/7vQD0fPs.jpg
// Improve the videophone
// Prepare aeronautics lectures
// Work on the alcohol-fuelled engine
//'s Todo

//frist i am creat a style theame value for style tag
const person ={
    
        name :'Gregorio Y. Zara',
        thame :{
            backgroundColor: 'black',
            color:'pink'
        }
    
};

export default function TodoList() {
  return (
    <div>
        <div style={person.thame}>
            <h1>{person.name}'s todo</h1>
            <img 
            src="https://i.imgur.com/7vQD0fPs.jpg" 
            alt="Gregorio Y. Zara" />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    </div>
  );
}
