import { useSelector } from "react-redux";
import { IGlobalState } from "../store/reducers";
import "./scoreCard.scss";

const ScoreCard = () => {
  const score = useSelector((state: IGlobalState) => state.score);

  const handleGameEnd = () => {
    // Отправка данных на бэкенд
    const gameData = {
      score: score,
    };

    fetch("http://localhost:3001/api/saveGameData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Текущий счёт: ${score}\nСервер ответил: ${data.message}`);
      })
      .catch((error) => console.error("Ошибка при отправке данных:", error));
  };
  return (
    <div className="score">
      <div className="score_current">Текущий счёт: {score}</div>
      <button onClick={handleGameEnd}>Закончить игру</button>
    </div>
  );
};

export default ScoreCard;

// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { IGlobalState } from "../store/reducers";
// import { scoreUpdates } from "../store/actions";
// import app from "../../firebaseconfig";
// import "./scoreCard.scss";

// const ScoreCard = () => {
//   const score = useSelector((state: IGlobalState) => state.score);
//   const dispatch = useDispatch();
//   const [record, setRecord] = useState(0);

//   useEffect(() => {
//     const fetchRecord = async () => {
//       const response = await app
//         .firestore()
//         .collection("record")
//         .doc("1")
//         .get();
//       const data = response.data();
//       if (data) {
//         setRecord(data.record);
//       }
//     };

//     fetchRecord();
//   }, []);

//   const updateRecord = async (newRecord: number) => {
//     await app.firestore().collection("record").doc("1").set({
//       record: newRecord,
//     });
//     setRecord(newRecord);
//   };

//   useEffect(() => {
//     if (score > record) {
//       updateRecord(score);
//     }
//   }, [score, record]);

//   return (
//     <div className="score">
//       <div className="score_current">Текущий счёт: {score}</div>
//       <div className="score_record">Рекорд: </div>
//     </div>
//   );
// };
// export default ScoreCard;
