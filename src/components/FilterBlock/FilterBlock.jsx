import React,{useContext} from 'react';
import "./styles.css";
import { CoinsContext } from '../../context/coinsContext';
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';

const FilterBlock = ({setCoins}) => {

  const coinsContext = useContext(CoinsContext);
  const {coins} = coinsContext;
  const { setValue,value} = useFilterCoins(setCoins,coins);


  return (

    <div className="filter-block">

      <input

        onChange={(e) => setValue(e.target.value)} 
        value={value} 
        className='input' 
        type='text' 
        placeholder='bitcoin'

     />

    </div>

  );

};


export default React.memo(FilterBlock);
//надо чтобы у нас был перерендер в случае, когда пропсы изменились,а если не изменились то не нужно перерендер.
//Также не нужно тратить время на перересовку страницы//
//без memo будет перерендер всех дочерних компонентов вместе с родителем in Main.jsx //