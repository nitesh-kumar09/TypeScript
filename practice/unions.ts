// 4️⃣ union (|) — bohot important 🔥
// 🔹 Kya hota hai?

// Ek variable multiple type ka ho sakta hai

type Status = "loading" | "success" | "error";

// use = jo bhi status define kiye ho agr uske alwa koi aur status likhoge to error aayega like: - pending etc..

const newStatus : Status = "loading"

// const finalStatus: Status = 'pending' // we will get error because 'pending' not defined in Status


type OrderStatus = 'PLACED' | 'SHIPPED' | 'DELIVERED'

type Theme = 'light' | 'dark'

const theme : Theme = 'dark'



