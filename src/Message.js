const Message = (props) => {
    console.log(props);

    return <div>{props.textToShow}</div>;
}




// для того чтобы можно было ипользовать компонент в других файлах:
export default Message ;