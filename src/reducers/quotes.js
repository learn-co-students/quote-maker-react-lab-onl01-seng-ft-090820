export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      return [
        ...state,
        action.quote
      ]

    case 'REMOVE_QUOTE':
      return [
        ...state.filter(q => q.id !== action.quoteId)
      ]

    case 'UPVOTE_QUOTE':
      const quoteToUpvote = state.find(q => q.id === action.quoteId)
      const upvotedQuote = {
        ...quoteToUpvote,
        votes: quoteToUpvote.votes + 1
      }
      return [
        ...state.filter(q => q.id !== action.quoteId),
        upvotedQuote
      ]

      case 'DOWNVOTE_QUOTE':
        const quoteToDownvote = state.find(q => q.id === action.quoteId)
        if (quoteToDownvote.votes > 0) {
          let downvotedQuote = {
            ...quoteToDownvote,
            votes: quoteToDownvote.votes - 1
          }
          return [
            ...state.filter(q => q.id !== action.quoteId),
            downvotedQuote
          ]
        } else {
          let downvotedQuote = {
            ...quoteToDownvote,
            votes: 0
          }
          return [
            ...state.filter(q => q.id !== action.quoteId),
            downvotedQuote
          ]
        }

    default:
      return state;
  }
}
