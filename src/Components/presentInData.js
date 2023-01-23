import "./PresentStyle.css"
export default function PresentInData(props){
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="Not available" />
               
            </div>
          <h4>{props.heading}</h4>
          <p>{props.text}</p>
        </div>
    );
}