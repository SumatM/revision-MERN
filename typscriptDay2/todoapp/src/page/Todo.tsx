import { useSelector } from 'react-redux'
import { RootState } from '../store/store';
import { TodoInput } from '../component/TodoInput';
import { TodoDisplay } from '../component/TodoDisplay';
import { Footer } from '../component/Footer';
export const Todo = () => {

    const store = useSelector((s: RootState) => s.todoReducer)

    return (
        <div>
            <h1>Todo App</h1>
            <TodoInput />
            <TodoDisplay />
            <Footer />
        </div>
    )
}
