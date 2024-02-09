import Button from "../Button";
import Flag from "../Flag";
import Input from "../Input";
import Text from "../Text";

import style from "./ModalLogin.module.scss";

const ModalLogin = () => {
  return (
    <div className={style.Modal}>
      <div className={style.Container}>
        <div className={style.Bandeira}>
          <Flag />
        </div>
        <div className={style.Titulos}>
          <Text color="#FFFFFF" fontSize="40px" fontWeight="700" text="Login" />
          <Text
            color="#FFFFFF"
            fontSize="20px"
            fontWeight="500"
            text="Entre com suas credenciais"
          />
        </div>
        <form className={style.Formulario}>
          <div className={style.Inputs}>
            <Input type="text" placeholder="Usuário" />
            <Input type="text" placeholder="Senha" />
          </div>
          <Input type="checkbox" label="Mostrar senha"/>
        </form>
        <div className={style.Botao}>
          <Button
            text="Entrar"
            backgroundColor="#009246"
            fontSize="20px"
            height="50px"
            width="160px"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
