export function AddTodoComponent({setIsVisible, data, setData}) {
    return (
        <div>
            <h3>Enter a task name</h3>
            <form onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.target);
                setData(...data, formData);
                setIsVisible("home")
                //alert(data.get('name'));
            }}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <button type="submit">Submit</button>
                {/*{data.get('name') && <p>Name: {data.get('name')}</p>}*/}
                {/*{data.get('email') && <p>email: {data.get('email')}</p>}*/}
            </form>
        </div>
    )
}