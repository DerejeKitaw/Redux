"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miniRedux_1 = require("./lib/miniRedux");
//#endregion 
//#region 01a_Define action creator
var MessageActions = /** @class */ (function () {
    function MessageActions() {
    }
    MessageActions.addMessage = function (message) {
        return {
            type: 'ADD_MESSAGE',
            message: message
        };
    };
    MessageActions.deleteMessage = function (index) {
        return {
            type: 'DELETE_MESSAGE',
            index: index
        };
    };
    return MessageActions;
}());
//#endregion 
//#region 02_Define-Store
// Done by lib
//#endregion
//#region 03_Define reducer
var reducer = function (state, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                messages: state.messages.concat(action.message),
            };
        case 'DELETE_MESSAGE':
            var idx = action.index;
            return {
                messages: state.messages.slice(0, idx).concat(state.messages.slice(idx + 1, state.messages.length))
            };
        default:
            return state;
    }
};
//#endregion 
//#region 04_create new store
var store = new miniRedux_1.Store(reducer, { messages: [] });
console.log(store.getState()); // -> { messages: [] }
//#endregion
//#region 05_subscribe to store
// Done by lib
//#endregion
//#region 06_Dispatch store
store.dispatch(MessageActions.addMessage('Would you say the fringe was made of silk?'));
store.dispatch(MessageActions.addMessage('Wouldnt have no other kind but silk'));
store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses?'));
console.log(store.getState());
// -> 
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Wouldnt have no other kind but silk',
//      'Has it really got a team of snow white horses?' ] }
store.dispatch(MessageActions.deleteMessage(1));
console.log(store.getState());
// -> 
// { messages:
//    [ 'Would you say the fringe was made of silk?',
//      'Has it really got a team of snow white horses?' ] }
store.dispatch(MessageActions.deleteMessage(0));
console.log(store.getState());
// ->
// { messages: [ 'Has it really got a team of snow white horses?' ] }
//#endregion  
//# sourceMappingURL=02_messages-app-with-action-creator.js.map