import * as TYPES from '../constants/action_types'

export function initialize_store() {
    return {
        type: TYPES.INITIALIZE_STORE,
        items: [
            { text: 'buy coffee', key: '1' },
            { text: 'create an app', key: '2' },
            { text: 'play on the switch', key: '3' },
        ]
    }
}

export function add_item(item) {
    return {
        type: TYPES.ADD_ITEM,
        item
    }
}

export function delete_item(item_key) {
    return {
        type: TYPES.DELETE_ITEM,
        item_key
    }
}

export function clear_store() {
    return {
        type: TYPES.CLEAR_STORE
    }
}
