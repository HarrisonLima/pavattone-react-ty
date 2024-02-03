import Button from "../Button";
import Input from "../Input";
import Text from "../Text";

const ModalLogin = () => {
  return (
    <>
      <Text color="#FFFFFF" fontSize="40px" fontWeight="700" text="Login" />
      <Text
        color="#FFFFFF"
        fontSize="20px"
        fontWeight="500"
        text="Entre com suas credenciais"
      />
      <Input type="text" placeholder="Usuário"/>
      <Input type="text" placeholder="Senha"/>
      <Input type="checkbox"/>
      <Button text="Entrar" backgroundColor="#009246" fontSize="20px" height="50px" width="160px"/>
    </>
  );
};

export default ModalLogin;
