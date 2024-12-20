import { useState } from "react";

function AddTask ({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow felx flex-col">
            <input type="text" placeholder="Digite o titulo da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-lg w-full" value={title} onChange={(event) => setTitle(event.target.value)} />
            <br />
            <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-lg w-full" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <br />
            <button onClick={() => {
                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }} 
            className="bg-slate-500 text-white px-6 py-3 rounded-lg font-bold text-lg w-full">Adiconar</button>
        </div>
    )
}

export default AddTask;