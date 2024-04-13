import './heroes.css';
 
function Heroes(props) {
    return (
        <div class="block2">
            <div>{props.name}</div>
            <div>{props.universe}</div>
            <div>{props.alterego}</div>
            <div>{props.occupation}</div>
            <div>{props.friends}</div>
            <div>{props.superpowers}</div>
            <div><img src={props.image} alt="Бетмен" width="200px" height="200px"/></div>
 
            <div class="block3">{props.info}</div>
 
        </div>
    );
}
 
export default Heroes;