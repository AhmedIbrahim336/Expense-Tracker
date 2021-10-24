const TRANSACTIONS = 'transactions'
export const loadTransactions = () => {
    return localStorage.getItem(TRANSACTIONS) ? JSON.parse(localStorage.getItem('transactions')) : []
}

export const updateTransactions = (transactions) => {
    if (!transactions) return
    localStorage.setItem(TRANSACTIONS, JSON.stringify(transactions))
}