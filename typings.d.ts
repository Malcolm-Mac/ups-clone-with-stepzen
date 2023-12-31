type Customer = {
    email: string;
    name: string;
};

type CustomerList = {
    name: ID;
    value: Customer;
}

type TrackingItem = {
    customer_id: ID;
    customer: Customer;
    items: Item[];
}

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
}

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type Order = {
    carrier: string;
    createdAt: Date;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItem;
    Lat: number;
    Lng: number;
    Address: string;
    City: string;
}

type OrderResponse = {
    value: Order;
}
