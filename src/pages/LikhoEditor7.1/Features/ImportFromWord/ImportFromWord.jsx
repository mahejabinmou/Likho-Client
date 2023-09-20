import React from 'react';
import WordBanner from './WordBanner';
import BattleTest from './BattleTest/BattleTest';
import DocList from './DocList/DocList';
import Slider from './ImportSlideSection/Slider';


const ImportFromWord = () => {
    return (
        <div>
           <WordBanner></WordBanner>
           <BattleTest></BattleTest>
           <DocList></DocList>
           <Slider></Slider>
          
           
        </div>
    );
};

export default ImportFromWord;