import {
  DOWN,
  INCREASE_SNAKE,
  INCREMENT_SCORE,
  ISnakeCoord,
  LEFT,
  RESET,
  RESET_SCORE,
  RIGHT,
  SET_DIS_DIRECTION,
  UP,
} from "../actions";

export interface IGlobalState {
  snake: ISnakeCoord[] | [];
  disallowedDirection: string;
  score: number;
}

const globalState: IGlobalState = {
  snake: [
    { x: 580, y: 300 },
    { x: 560, y: 300 },
    { x: 540, y: 300 },
    { x: 520, y: 300 },
    { x: 500, y: 300 },
  ],
  disallowedDirection: "",
  score: 0,
};

const updateSnakePosition = (
  state: IGlobalState,
  movement: number[]
): ISnakeCoord[] => {
  const newSnake = [
    {
      x: state.snake[0].x + movement[0],
      y: state.snake[0].y + movement[1],
    },
    ...state.snake.slice(0, -1),
  ];

  return newSnake;
};

const gameReducer = (state = globalState, action: any) => {
  switch (action.type) {
    case RIGHT:
      return { ...state, snake: updateSnakePosition(state, [20, 0]) };

    case LEFT:
      return { ...state, snake: updateSnakePosition(state, [-20, 0]) };

    case UP:
      return { ...state, snake: updateSnakePosition(state, [0, -20]) };

    case DOWN:
      return { ...state, snake: updateSnakePosition(state, [0, 20]) };

    case SET_DIS_DIRECTION:
      return { ...state, disallowedDirection: action.payload };

    case RESET:
      return {
        ...state,
        snake: [
          { x: 580, y: 300 },
          { x: 560, y: 300 },
          { x: 540, y: 300 },
          { x: 520, y: 300 },
          { x: 500, y: 300 },
        ],
        disallowedDirection: "",
      };

    case INCREASE_SNAKE: {
      const snakeLen = state.snake.length;
      return {
        ...state,
        snake: [
          ...state.snake,
          {
            x: state.snake[snakeLen - 1].x - 20,
            y: state.snake[snakeLen - 1].y - 20,
          },
        ],
      };
    }

    case RESET_SCORE:
      return { ...state, score: 0 };

    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
