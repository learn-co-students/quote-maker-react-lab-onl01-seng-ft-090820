export default (state = [], action) => {
  let idx 
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'UPVOTE_QUOTE':
      const quotes = state.map(quote => {
        if (quote.id === action.quoteId) { 
          return {...quote, votes: quote.votes +1}
        } else {
          return quote
        }
      })
      return quotes
      
      // return Object.assign({}, quote, { votes: quote.votes + 1 })

      case 'DOWNVOTE_QUOTE':
        const voteQuotes = state.map(quote => {
          if (quote.id === action.quoteId) { 
            if (quote.votes !== 0) { 
            return {...quote, votes: quote.votes - 1}
            } else { 
              return quote
            }
          } else {
            return quote
          }
        })
        return voteQuotes

    default: 
      return state
  }
}
