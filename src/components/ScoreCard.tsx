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
        alert(
          `Игра окончена, Ваш счёт: ${score}\nСервер ответил: ${data.message}`
        );
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
