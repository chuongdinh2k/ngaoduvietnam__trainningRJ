import creditCard from "@assets/creditcard.png";
import paypal from "@assets/paypal.png";

export const formSubmission = {
    info: [
        {
            widthMd: 6,
            label: "First Name",
            placeholder: "First Name",
            required: true,
            name: "firstName",
        },
        {
            widthMd: 6,
            label: "Last Name",
            placeholder: "Last Name",
            required: true,
            name: "lastName",
        },
        {
            widthMd: 6,
            label: "Email",
            placeholder: "Email",
            required: true,
            name: "email",
        },
        {
            widthMd: 6,
            label: "Phone Number",
            placeholder: "Your Phone",
            required: true,
            name: "phoneNumber",
        },
    ],
    address: [
        {
            widthMd: 12,
            label: "Your Address",
            placeholder: "Your Address",
            required: false,
            name: "address",
        },
    ],
};
export const paymentMethod = {
    options: [
        {
            label: "Credit Card",
            value: "credit",
            icon: creditCard,
        },
        {
            label: "Paypal",
            value: "paypal",
            icon: paypal,
        },
    ],
    listPolicy: [
        "You will be charged the total amount once your order is confirmed.",
        "If confirmation isn't received instantly, an authorization for the total amount will be held until your booking is confirmed.",
        `You can cancel for free up to 24 hours before the day of the experience, local time.
        By clicking 'Pay with PayPal,' you are acknowledging that you have read and are bound by Ojimah's`,
        `Customer Terms of Use, Privacy Policy, plus the tour operator’s rules & regulations (see the listing for more details)`,
    ],
};
