import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Paymentinfo = () => {
    const [cardholder, setCardholder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiredMonth, setExpiredMonth] = useState('');
    const [expiredYear, setExpiredYear] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [card, setCard] = useState('front');

    const format = () => {
        if (cardNumber.length > 18) {
            return;
        }
        setCardNumber(cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '));
    };

    const isValid = () => {
        if (cardholder.length < 5) {
            return false;
        }
        if (cardNumber === '') {
            return false;
        }
        if (expiredMonth === '' && expiredYear === '') {
            return false;
        }
        if (securityCode.length !== 3) {
            return false;
        }
        return true;
    };

    const onSubmit = () => {
        alert(`You did it ${cardholder}.`);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto p-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Cardholder
                        </label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Cardholder name"
value={cardholder}
                            onChange={(e) => setCardholder(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Card Number
                        </label>
                        <input
                            type="text"
                            inputMode="numeric"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="0000 0000 0000 0000"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            onKeyDown={format}
                            maxLength={19}
                        />
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Expired
                            </label>
                            <div className="flex">
                                <select
                                    className="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                    value={expiredMonth}
                                    onChange={(e) => setExpiredMonth(e.target.value)}
                                >
                                    <option value="" disabled selected>
                                        MM
                                    </option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select
                                    className="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
                                    value={expiredYear}
                                    onChange={(e) => setExpiredYear(e.target.value)}
                                >
                                    <option value="" disabled selected>
                                        YY
                                    </option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Security Code
                            </label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="CVC"
                                value={securityCode}
                                onChange={(e) => setSecurityCode(e.target.value)}
                                maxLength={3}
                            />
                        </div>
                    </div>
                    <Link to="/done">
                        <div className="flex justify-center">
                            <button
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!isValid() &&
                                    'opacity-50 cursor-not-allowed'}`}
                                onClick={onSubmit}
                                disabled={!isValid()}
                            >
                                Pay
                            </button>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Paymentinfo;