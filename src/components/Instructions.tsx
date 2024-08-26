import "./instructions.scss";

export interface IInstructionProps {
  resetBoard: () => void;
}
const Instruction = ({ resetBoard }: IInstructionProps) => (
  <div>
    <p>Как играть:</p>
    <p>
      Чтобы начать нажми <span className="instruction_letter">d</span>
    </p>
    <div>
      <div>
        <p>
          <span className="instruction_letter">w</span> Вверх
        </p>
        <p>
          <span className="instruction_letter">a</span> Влево
        </p>
        <p>
          <span className="instruction_letter">s</span> Вниз
        </p>
        <p>
          <span className="instruction_letter">d</span> Вправо
        </p>
      </div>
      <div>
        <button className="main_button" onClick={() => resetBoard()}>
          Перезапустить
        </button>
      </div>
    </div>
  </div>
);

export default Instruction;
