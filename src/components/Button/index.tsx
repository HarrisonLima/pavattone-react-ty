import IButton from "../../interfaces/IButton";

import style from './Button.module.scss'

const Button = ({ backgroundColor, fontSize, text, height, width }: IButton) => {
    return(
        <button className={style.Button} style={{ backgroundColor: backgroundColor, fontSize: fontSize, height: height, width: width }}>{text}</button>
    )
}
export default Button;