
import { useState } from "react"
import '../App.css';
export default function Form(props) {
    const [member, setMember] = useState()
    return (
        <form>
            <h3>Add New Team Member</h3>
            <label>
                Name: <input 
                type='text' 
                />
            </label>
            <label>
                Email: <input 
                type='email' 
                />
            </label>
            <label>
                Role: <input 
                type='text' 
                />
            </label>
            <button>Submit</button>
        </form>
    )
}