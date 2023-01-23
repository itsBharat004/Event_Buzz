import "./HeroStyles.css";
export default function Hero(props){
    
    return (
        <>
        <div className="banner-outer">
            <img className="banner-img" alt="HeroImg" src={props.heroImg} />
            <h1 className="hero-text">{props.title}</h1>
        </div>
        </>
    );
    }