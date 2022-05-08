import './Button.css'
export default function Button(props) {
    const {
    text,
    btnColor
   } =props
    return (
        <button style={{ background: btnColor}}>{text}</button>
    )
}