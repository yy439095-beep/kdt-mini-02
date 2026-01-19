import './App.css';
import { useState } from 'react';

// 컴포넌트
import Filter from './components/filterSection/FilterSection.jsx'
import RcmdBtn from './components/recommendButton/RecommendButton.jsx'
import RcmdCard from './components/recommendCard/RecommendationCard.jsx'
import DisLike from './components/dislikedMenuSection/DislikedMenuSection.jsx'

export default function App() {
  // ------------- [카테고리 및 상황 선택 컴포 관련 코드] -------------
  const [category, setCategory] = useState([
    {id:0, food:'한식'},
    {id:1, food:'중식'},
    {id:2, food:'일식'},
    {id:3, food:'양식'},
  ]); 
  const [situation, setSituation] = useState([
    {id:0, food:'혼밥'},
    {id:1, food:'회식'},
    {id:2, food:'데이트'},
    {id:3, food:'야식'},
  ]);

  // ------------- [싫어하는 음식 선택 컴포 관련 코드] -------------
  const [disFood, setDisFood] = useState([
    {id:0, food:'낫또'},
    {id:1, food:'고수'},
    {id:2, food:'오이'},
  ]); 

  return (
    <div className="App">
      <Filter category={category} situation={situation} setCategory={setCategory} setSituation={setSituation}/>
      <RcmdBtn/>
      <RcmdCard/>
      <DisLike disFood={disFood} setDisFood={setDisFood}/>
    </div>
  );
}
