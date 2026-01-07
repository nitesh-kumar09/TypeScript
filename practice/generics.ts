// 5️⃣ generics 🤯 (easy way me)
// 🔹 Problem pehle samjho

// Same function:

// number return kare

// string return kare

// object return kare

// ❌ alag alag function likhna

type User = {
  id: number;
  name: string;
  email?: string | undefined;
  isActive: boolean;
};

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Nitesh"));
console.log(
  identity<User>({ id: 1, name: "Nitesh Singh", email: "", isActive: true })
);

// Real API response example

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

type UserResponse = ApiResponse<User>;

type ApiResult<T> = {
  data: T;
  error: string | null;
};

type UserResult = ApiResult<User>;

type OrderType = "IN_HOUSE" | "SELLER" | "POS";

type OrderStatus = "PLACED" | "SHIPPED" | "DELIVERED";

type Order = {
  id: number;
  amount: number;
  type: OrderType;
  status: OrderStatus;
};

interface OrderCardProps {
  order: Order;
}
