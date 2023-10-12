const initialState = {};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: any) => {
  if (action.type === "BUS_SELECTION") {
    return { ...state, selectedBusId: action.id };
  } else if (action.type === "SEAT_SELECTION") {
    return { ...state, selectedSeats: action.seats };
  }
  return state;
};
