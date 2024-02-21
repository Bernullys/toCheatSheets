You can put objects and arrays into state. In React, state is considered read-only, so you should replace it rather than mutate your existing objects. For example, if you have a form object in state, don't mutate it.

Treat any JavaScript object that you put into state as read-only.