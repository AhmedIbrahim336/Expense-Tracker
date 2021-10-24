import { loadTransactions, updateTransactions } from "../utils";


const initialState = { transactions: loadTransactions() }
export default (state = initialState, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      let trans = loadTransactions()
      trans = trans.filter(t => t.id !== action.payload)
      updateTransactions(trans)
      return {
        ...state,
        transactions: trans
      }
    case 'ADD_TRANSACTION':
      const transactions = loadTransactions()
      transactions.unshift(action.payload)
      updateTransactions(transactions)
      return {
        ...state,
        transactions
      }
    default:
      return state;
  }
}