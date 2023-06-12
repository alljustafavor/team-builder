
import '../App.css';
export default function Form(props) {

    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Team Builder</h3>
            <label>
                Name: <input 
                placeholder="Ex. John Doe"
                name="name"
                type='text' 
                value={props.values.name}
                onChange={handleChange}
                />
            </label>
            <label>
                Email: <input 
                placeholder="Ex. xxxxx@email.com"
                name="email"
                type='email' 
                value={props.values.email}
                onChange={handleChange}
                />
            </label>
            <label>
                Role: <input 
                placeholder="Ex. Software Developer"
                name="role"
                type='text' 
                value={props.values.role}
                onChange={handleChange}
                />
            </label>
            <input type="submit" value="Create your team!" style={{width: '20%', margin: '0 auto'}} />
        </form>
    )
}