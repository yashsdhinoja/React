import React, { useState, useEffect, useRef, useReducer, createContext, useContext } from 'react';
// Imports Redux Toolkit elements for global state management
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// ==========================================
// 1. REDUX TOOLKIT (Global State)
// ==========================================
// Creates a slice for user authentication state
const userSlice = createSlice({
  name: 'user', // Namespace for actions
  initialState: { name: 'Guest' }, // Initial state
  reducers: {
    login: (state, action) => { state.name = action.payload; }, // Sets user name
    logout: (state) => { state.name = 'Guest'; } // Resets user name
  }
});
// Configures the global store with the user reducer
const store = configureStore({ reducer: { user: userSlice.reducer } });
const { login, logout } = userSlice.actions;

// ==========================================
// 2. CONTEXT API (Shared State Pattern)
// ==========================================
// Creates a Context to share theme data without passing props manually
const ThemeContext = createContext();

// ==========================================
// 3. CUSTOM HOOK
// ==========================================
// Reusable hook to manage form input state and logic
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue); // useState for input value[cite: 2]
  const handleChange = (e) => setValue(e.target.value); // Event handler for typing
  const reset = () => setValue(initialValue); // Helper to clear the input
  return { value, onChange: handleChange, reset };
}

// ==========================================
// 4. USEREDUCER (Complex State Management)
// ==========================================
// Reducer function to handle complex task array updates based on actions
function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      // Returns a new array with the previous tasks plus the new one
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE_TASK':
      // Filters out the task matching the provided ID
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}

// ==========================================
// 5. MAIN COMPONENT (Must start with capital letter[cite: 1, 2])
// ==========================================
function TaskManager() {
  // Consumes Custom Hook for input tracking
  const taskInput = useFormInput('');
  
  // Initializes useReducer for the task list
  const [tasks, dispatchTasks] = useReducer(taskReducer, []);
  
  // Initializes useState for validation error messages[cite: 2]
  const [error, setError] = useState('');
  
  // Initializes useRef to directly access the DOM input element
  const inputRef = useRef(null);
  
  // Consumes Context API to get the current theme (light or dark)
  const theme = useContext(ThemeContext);
  
  // Consumes Redux state to get the global username
  const userName = useSelector(state => state.user.name);
  const dispatchRedux = useDispatch(); // Hook to trigger Redux actions

  // useEffect: Runs once on mount to automatically focus the text input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useEffect: Runs every time 'tasks' array changes to update document title
  useEffect(() => {
    document.title = `Tasks: ${tasks.length}`;
  }, [tasks]);

  // Form Submission & Validation Logic
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevents default browser page refresh[cite: 1, 2]
    
    // Validation: Checks if the input is empty
    if (taskInput.value.trim() === '') {
      setError('Task cannot be empty!'); // Sets error state
      return; // Stops execution
    }
    
    setError(''); // Clears previous errors
    // Dispatches action to useReducer to add the task
    dispatchTasks({ type: 'ADD_TASK', payload: taskInput.value });
    taskInput.reset(); // Clears input field using custom hook helper
    inputRef.current.focus(); // Returns cursor focus to the input via useRef
  };

  return (
    // Applies conditional styling based on Context API theme
    <div style={{ padding: '20px', background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <h2>{userName}'s Task Manager</h2>
      
      {/* Event Handling for Redux state updates */}
      {userName === 'Guest' ? (
        <button onClick={() => dispatchRedux(login('Admin'))}>Log In</button>
      ) : (
        <button onClick={() => dispatchRedux(logout())}>Log Out</button>
      )}

      {/* Form Binding */}
      <form onSubmit={handleAddTask} style={{ marginTop: '20px' }}>
        <input 
          ref={inputRef} // Attaches the useRef hook
          type="text" 
          placeholder="New Task" 
          value={taskInput.value} 
          onChange={taskInput.onChange} 
        />
        <button type="submit">Add Task</button>
        {/* Conditional Rendering for validation error[cite: 2] */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <ul>
        {/* Renders list using .map() and unique keys[cite: 2] */}
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} 
            <button onClick={() => dispatchTasks({ type: 'REMOVE_TASK', payload: task.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==========================================
// 6. ROOT COMPONENT (Providers & State Lifting)
// ==========================================
export default function App() {
  // Lifts theme state to the highest level so the whole app can access it
  const [theme, setTheme] = useState('light');

  return (
    // Wraps the application in the Redux Toolkit Provider
    <Provider store={store}>
      {/* Wraps the application in the Context API Provider */}
      <ThemeContext.Provider value={theme}>
        <div style={{ fontFamily: 'sans-serif' }}>
          {/* Event handler to toggle state[cite: 2] */}
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme
          </button>
          <TaskManager />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}