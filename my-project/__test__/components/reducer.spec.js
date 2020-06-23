const { default: reducer } = require("../../app/reducers")
const { INITIALIZE_STORE, ADD_ITEM, DELETE_ITEM } = require("../../app/constants/action_types")

describe('Reducer', () => {
    
    it('should initialize the store with data', () => {
        // given
        // an initial state and action object
        const initialState = { todos: [] };
        const action = { type: INITIALIZE_STORE, items: [ {text: 'buy breakfast', key: '1'}, 
                        { text: 'play video games', key: '2'} ] };

        // when
        // call the reducer function with inputs
        const someData = reducer(initialState, action);

        // then
        // we expect the store to be initialized
        expect(someData).toEqual({todos: [{text: 'buy breakfast', key: '1'}, { text: 'play video games', key: '2'}]});
    });

    it('should add an item to the store', () => {
        // given
        const initialState = { todos: [{text: 'buy breakfast', key: '1'}, { text: 'play video games', key: '2'}] };
        const action = { type: ADD_ITEM, item: {text: 'bike', key: '3'}};

        // when
        const addData = reducer(initialState, action);

        // then
        expect(addData).toEqual({todos: [{ text: 'bike', key: '3' }, {text: 'buy breakfast', key: '1'}, { text: 'play video games', key: '2'}]});
    });

    it('should delete an item from the store', () => {
        // given
        const initialState = {todos: [{ text: 'bike', key: '3' }, {text: 'buy breakfast', key: '1'}, { text: 'play video games', key: '2'}]};
        const action = { type: DELETE_ITEM, item_key: '1'};

        // when
        const deleteData = reducer(initialState, action);

        // then
        expect(deleteData).toEqual({todos: [{ text: 'bike', key: '3' }, { text: 'play video games', key: '2'}]});
    });
});