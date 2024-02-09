import style from './Flag.module.scss'

const Flag = () => {
  return (
    <div className={style.Flag}>
      <div className={`${style.Eclipse} ${style.Verde}`}/>
      <div className={`${style.Eclipse} ${style.Branco}`}/>
      <div className={`${style.Eclipse} ${style.Vermelho}`}/>
    </div>
  );
};

export default Flag;
