// 3️⃣ interface (React me bohot use hota hai)
// 🔹 Interface vs type (simple language)

// interface → objects ke liye best

// React props ke liye mostly interface


// React Components example

interface ButtonProps {
    title:string;
    onClick: ()=>void;
    disabled?:boolean; // optional
}

// use

// function Button({title,onClick,disabled}:ButtonProps){
//     return(
//         <button disabled ={disabled} onClick={onClick} > {title}</button>
//     )
// }


interface UserCardProps{
    name:string;
    email:string;
    onEdit:()=>void;
}

