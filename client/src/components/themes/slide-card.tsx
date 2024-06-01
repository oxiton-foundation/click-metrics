export const SlideCard = ({ props }) => {
    return (
        <div className="flex flex-wrap h-24 w-10">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}