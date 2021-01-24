// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
    return {
        type: 'ADD_QUOTE',
        quote: Object.assign({}, quote, { votes: 0 })
        // quote: { ...this.quote,
        //     vote: 0
        // }
    };
};

export const removeQuote = (quoteId) => {
    debugger
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    };
};

export const upvoteQuote = (quoteId) => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    };
};

export const downvoteQuote = (quoteId) => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    };
};