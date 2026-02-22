interface Client {
    client_id: string;
    client_name: string;
    client_email: string;
}

interface Booking {
    booking_id: string;
    client_id: string;
    client_name: string;
    appointment_date: Date;
}

interface PortfolioOutfits {
    outfit_id: string;
    outfit_name: string;
    outfit_description: string;
    image_url: string;
}