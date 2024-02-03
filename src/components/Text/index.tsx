import IText from "../../interfaces/IText";

const Text = ({ color = "#000000", fontFamily, fontSize = "16px", fontWeight = "500", text }: IText) => {
    return(
        <text style={{ color: color, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight }}>{text}</text>
    )
}

export default Text;