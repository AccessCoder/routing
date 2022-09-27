type ButtonPageProps = {
    name:string;
}

export default function ButtonPage(props:ButtonPageProps){


    return(
        <div>
        <h1> ButtonPage </h1>
        <button>{props.name}</button>
        </div>
    )

}