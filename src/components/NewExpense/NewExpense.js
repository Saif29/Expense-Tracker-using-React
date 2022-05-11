import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
    const saveEnteredExpense = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.addedExpense(expenseData)
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveEnteredExpense}/>
    </div>
}

export default NewExpense;