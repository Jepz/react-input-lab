This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 
How to preforming common tasks, you can find the most recent version of the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Whats done:

- [X] First Commit
- [X] Storybook
- [] Added input fields
- [] Clean out boilerplate
- [] email and password field
- [] Add to localStorage(test)


the outgoing effect here is simply React, and no need to remove that here.(edited)
So you will need two input fields and a button to click.
Start doing those three as stateless components
- done

Then add a stateful component that imports the input field(s) and the button.
- done

Now, you need to have some state shape that holds the current state of the form. It should be empty at first, so { username: '', password: ''} is a good starting point.
- think is done

Now, inside the render function of the stateful component, you send this.state.username to the username input, and similar for the password. Try setting something else than an empty string as the initial value to see that it works.
- done

Next is to do two functions that updates the values. One for username, and one for password. Give them as props as well to the stateless components, and check if it works via console.log('inside updater'), or debugger; statements.
- done

Now, you need to add the button onClick handler to the stateful form component that takes the entire state, and checks the username and password to see if the username exists, and that the password matches that username.

That should prob show some status in the state, like {status: 'pristine' or 'invalid' or 'valid'}. Pristine is the untouched state.


