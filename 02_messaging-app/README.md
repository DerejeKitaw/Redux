In all Redux apps, there are three main parts to the data model:
    1. The state 
    2. The actions 
    3. The reducer

Our app will process two actions: 

`ADD_MESSAGE`

    - Always have the property message, the message to be added to the state. 
    - The ADD_MESSAGE action object has this shape

    { 
    type: 'ADD_MESSAGE', message: 
    'Whatever message we want here'
    }

`DELETE_MESSAGE`

    - Will delete a specified message from the state. 
    need to specify which message we want to delete. 
    - Could assign each message an id property when it is created. 
    - (or just use the index of the message in the array)
    { 
    type: 'DELETE_MESSAGE', message: 
    index: 2
    }
