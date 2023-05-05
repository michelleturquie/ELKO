export default function Button(props) {
  return (
    <button className={"border-2 border-white rounded-full font-semibold px-3 sm:px-5 py-2 " + props.className} onClick={props.onClick}>
        {props.children}
    </button>
  )
}
